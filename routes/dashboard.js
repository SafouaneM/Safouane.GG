import express from 'express';
import auth from '../middlewares/auth.js';
import fetchUser from '../middlewares/fetchUser.js';
import { getSummonerData } from '../models/getSummonerData.js';
import getFilteredName from '../models/helpers/getFilteredName.js';
import {pool} from "../database/connection.js";

const router = express.Router();

router.get('/dashboard', auth, fetchUser, async (req, res) => {
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

export default router;
