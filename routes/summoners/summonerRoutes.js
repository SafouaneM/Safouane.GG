import express from 'express';
const router = express.Router();
import fetchSummoner from '../../controllers/summoner/summonerController.js'


router.get('/api/summoner/:name', fetchSummoner )


export default router