//todo split everything up :D else bad progamur
//todo adding socket.io for the chatroom and match finder
import express from "express";
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import auth from "./middlewares/auth.js";
import {fileURLToPath} from 'url';
import path from 'path';
import {pool} from './database/connection.js';
import session from 'express-session'


const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {getSummonerData} from "./models/getSummonerData.js";
import {getAllChampionsData, getSingleChampionData} from './models/getAllChampionsData.js';
import getFilteredName from "./models/helpers/getFilteredName.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public'))


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 24 * 60 * 60 * 1000}
}))

app.set("view engine", "ejs");

app.get('/offline', (req, res) => {
    res.sendFile('offline.html', {root: path.join(__dirname, 'public')});
});
app.get('/register', (req, res) => {
    res.render('register');
});

app.get("/login", (req, res) => {
    res.render("login")
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = rows[0]

        if (!user) {
            return res.status(400).send('Invalid email or password')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).send('invalid email or password')
        }

        req.session.userId = user.id
        res.redirect('/summoner')


    } catch (error) {
        console.error(error)
        res.status(500).send('error loggin in')
    }
})

app.post('/register', async (req, res) => {
    const {nickname, email, summoner_name, discord_tag, password} = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    try {
        const result = await pool.query('INSERT INTO users (nickname, email, summoner_name, discord_tag, password) VALUES (?,?,?,?,?)', [nickname, email, summoner_name, discord_tag, passwordHash]);
        console.log('User registered successfully');
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
});

const fetchUser = async (req, res, next) => {
    if (req.session.userId) {
        try {
            const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.session.userId]);
            req.user = rows[0];
            res.locals.user = req.user; // Add this line

        } catch (error) {
            console.error(error);
        }
    }
    next();
};


app.get('/summoner', fetchUser, (req, res) => {
    res.render('summoner-search', {user: req.user});
});


app.get('/dashboard', auth, fetchUser, async (req, res, next) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.user.id]);
        const user = rows[0];

        req.params.summonerName = req.user.summoner_name;
        const data = await getSummonerData(req, res);

        if (data) {
            res.render('dashboard', {
                username: req.user.nickname,
                summonerName: req.user.summoner_name,
                summonerData: {
                    rank: {
                        solo: data.soloQueueData,
                        flex: data.flexQueueData,
                    },
                    championMasteries: data.summonerMastery,
                },
                championData: data.championData,
                summonerMastery: data.summonerMastery.slice(0, 3),
                getFilteredName: getFilteredName,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('errorrrrrrr')
    }
});




app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error logging out');
        }
        res.redirect('/login');
    });
});


app.get("/champions", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 8;
        const offset = (page - 1) * pageSize;
        const championsData = await getAllChampionsData(pageSize, offset);
        const totalPages = Math.ceil(163 / pageSize)
        res.render("champions", {
            championsData,
            page,
            totalPages
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving champions data");
    }
});


app.get('/champions/:id', async (req, res) => {
    try {
        const championData = await getSingleChampionData(req.params.id);
        res.render('champion-details', {championData});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving champion data');
    }
});

app.post("/summoner", (req, res) => {
    const summonerName = req.body.summonerName;
    res.redirect(`/summoner/${summonerName}?loadingState=true`);
});


app.get('/summoner/:summonerName', async (req, res) => {
    const data = await getSummonerData(req, res);
    if (data) {
        res.render('summoner-details', data);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});