import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()
const apiKey = process.env.RIOT_API_KEY;
const fetchMasteryBySummonerId = async (summonerId) => {
    const summonerDataMasteryResponse = await fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${apiKey}`);
    const summonerMastery = await summonerDataMasteryResponse.json();
    console.log(summonerMastery);
    return summonerMastery;
};

export default fetchMasteryBySummonerId;