import express from 'express';
const router = express.Router();

import {getSummonerData} from "../../models/getSummonerData.js";

router.get('/', getSummonerData)

export default router