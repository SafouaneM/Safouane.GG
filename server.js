import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { getSummonerData } from "./models/getSummonerData.js";
import {getAllChampionsData, getSingleChampionData} from './models/getAllChampionsData.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.set("view engine", "ejs");

app.get('/offline', (req, res) => {
        res.sendFile('offline.html', { root: path.join(__dirname, 'public') });
});
app.get("/summoner", (req, res) => {
        res.render("summoner-search");
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
                        totalPages });
        } catch (error) {
                console.error(error);
                res.status(500).send("Error retrieving champions data");
        }
});


app.get('/champions/:id', async (req, res) => {
        try {
                const championData = await getSingleChampionData(req.params.id);
                res.render('champion-details', { championData });
        } catch (error) {
                console.error(error);
                res.status(500).send('Error retrieving champion data');
        }
});

app.post("/summoner", (req, res) => {
        const summonerName = req.body.summonerName;
        res.redirect(`/summoner/${summonerName}?loadingState=true`);
});


app.get("/summoner/:summonerName", getSummonerData);


app.listen(port, () => {
        console.log(`Server started on port ${port}`);
});