//todo adding socket.io for the chatroom and match finder
import app from './app.js';
import { createServer } from 'http';
import { Server } from 'socket.io';
import championsRoutes from './routes/champions.js';
import loginRoutes from './routes/login.js';
import logoutRoutes from './routes/logout.js';
import matchFinderRoutes from './routes/matchFinder.js';
import registerRoutes from './routes/register.js';
import summonerRoutes from './routes/summoner.js';
import dashboardRoutes from './routes/dashboard.js';
import path from "path";
import dotenv from 'dotenv'
import {pool} from "./database/connection.js";
import {getSummonerIconInfoBySummonerName} from "./models/getSummonerData.js";
dotenv.config()

const server = createServer(app);
const io = new Server(server);
const port = process.env.PORT || 3000;

app.use(summonerRoutes);
app.use(championsRoutes);
app.use(loginRoutes);
app.use(registerRoutes);
app.use(logoutRoutes);
app.use(dashboardRoutes);
app.use(matchFinderRoutes);

app.get('/offline', (req, res) => {
    res.sendFile('offline.html', {root: path.join(__dirname, 'public')});
});

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('postMessage', async (msgData) => {
        console.log('msgData: ', msgData);
        console.log('message: ' + msgData.message);

        const userId = msgData.userId;
        const isNsfw = msgData.nsfw;
        const isLiked = false; // Default value
        await pool.query('INSERT INTO posts (user_id, message, nsfw, is_liked) VALUES (?, ?, ?, ?)', [userId, msgData.message, isNsfw, isLiked]);

        const [userRows] = await pool.query('SELECT nickname, summoner_name FROM users WHERE id = ?', [userId]);
        const user = userRows[0];

        // Get the summonerIcon
        const summonerIcon = await getSummonerIconInfoBySummonerName(user.summoner_name);

        if (summonerIcon) {
            // Emit the "newMessage" event to all connected clients
            io.emit('newMessage', { userId, message: msgData.message, nickname: user.nickname, summonerIconId: summonerIcon.summonerIconId });
        } else {
            console.error('Error: Could not fetch summonerIcon');
        }
    });


    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
