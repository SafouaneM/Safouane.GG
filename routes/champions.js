import express from 'express';
import { getAllChampionsData, getSingleChampionData } from '../models/getAllChampionsData.js';

const router = express.Router();

router.get('/champions', async (req, res) => {
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

router.get('/champions/:id', async (req, res) => {
    try {
        const championData = await getSingleChampionData(req.params.id);
        res.render('champion-details', {championData});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving champion data');
    }
});

export default router;
