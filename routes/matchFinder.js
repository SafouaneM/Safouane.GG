import express from 'express';
import auth from '../middlewares/auth.js';
import fetchUser from '../middlewares/fetchUser.js';
import { pool } from '../database/connection.js';
import { getSummonerIconInfoBySummonerName } from '../models/getSummonerData.js';

const router = express.Router();

router.get('/match-finder', auth, fetchUser, async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM posts JOIN users ON users.id = posts.user_id ORDER BY posts.created_at DESC');

    // Fetch summoner icons for all posts
    for (let post of rows) {
        const iconInfo = await getSummonerIconInfoBySummonerName(post.summoner_name);
        if (iconInfo) {
            post.summonerIconId = iconInfo.summonerIconId;
        } else {
            console.error(`Error: Could not fetch summonerIcon for summonerName: ${post.summoner_name}`);
        }
    }

    res.render('match-finder', { posts: rows });
});

export default router;
