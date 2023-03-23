import express from 'express'
import {getSummonerData} from "../../models/getSummonerData.js";

const router = express.Router()

router.get('/:name', async (req,res) => {
    try{
        const summonerName = req.params.name
        const summonerData = await getSummonerData(summonerName)

        res.render('summoner',{summonerData})
    }
    catch (error){
        console.error(error)
        res.status(500).send('Error retrieving summoner data vitconecttt')
    }
})