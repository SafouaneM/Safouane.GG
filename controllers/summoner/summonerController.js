import fetch from 'node-fetch'
import { config } from 'dotenv';
config();
const apiKey = process.env.RIOT_API_KEY;

    export default async function fetchSummoner(req, res) {
        const summonerName = req.params.name

        try {
            const summonerDataResponse = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`);
            if (!summonerDataResponse.ok) {
                throw new Error('No response between range 200-299');
            }
            const summoner = await summonerDataResponse.json();
            console.log(summoner);
            res.json(summoner);
        } catch (error) {
            console.error('error: username does not exist');
            res.status(404).send('Summoner not found');
        }

}