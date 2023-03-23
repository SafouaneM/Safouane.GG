import express from "express";
import { getSummonerData } from "./models/getSummonerData.js";
import {getChampionData} from './models/getChampionData.js'

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/summoner", (req, res) => {
        res.render("summoner-search");
});

app.post("/summoner", (req, res) => {
        const summonerName = req.body.summonerName;
        res.redirect(`/summoner/${summonerName}`);
});

app.get("/summoner/:summonerName", getSummonerData);

app.get('/api/summoner/:summonerName/:championId',getChampionData)

app.listen(port, () => {
        console.log(`Server started on port ${port}`);
});