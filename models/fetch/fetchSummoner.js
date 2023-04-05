import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()
const apiKey = process.env.RIOT_API_KEY;

const fetchSummoner = async (summonerName) => {
    try {
        const summonerDataResponse = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`);
        if(!summonerDataResponse.ok) {
            throw new Error('No response between range 200-299');
        }
        const summoner = await summonerDataResponse.json();
        console.log(summoner)
        return summoner
    } catch (error) {
        console.error('error: username does not exist')
    }

};

export default fetchSummoner;