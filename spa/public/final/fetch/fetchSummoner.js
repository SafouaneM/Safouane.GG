import { getKey } from '../api.js';
import fetch from 'node-fetch'

const key = getKey();

const fetchSummoner = async (summonerName) => {
    try {
        const summonerDataResponse = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`);
        if(!summonerDataResponse.ok) {
            throw new Error('No response between range 200-2999');
        }
        const summoner = await summonerDataResponse.json();
        console.log(summoner)
        return summoner
    } catch (error) {
        console.error('error: username does not exist')
    }

};

export default fetchSummoner;