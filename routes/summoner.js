import express from 'express';
import fetchUser from '../middlewares/fetchUser.js';
import { getSummonerData } from '../models/getSummonerData.js';

const router = express.Router();

router.get('/summoner', fetchUser, (req, res) => {
    res.render('summoner-search', { user: req.user });
});

router.post('/summoner', (req, res) => {
    const summonerName = req.body.summonerName;
    res.redirect(`/summoner/${summonerName}?loadingState=true`);
});

router.get('/summoner/:summonerName', async (req, res) => {
    const data = await getSummonerData(req, res);
    if (data) {
        res.render('summoner-details', data);
    }
});

export default router;
