import fetch from 'node-fetch'
const fetchChampions = async () => {
    try {
        const championDataResponse = await fetch('https://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json');
        if(!championDataResponse.ok) {
            throw new Error('No response between range 200-2999');
        }
        const championData = await championDataResponse.json();
        return championData;
    } catch (error) {
        console.error('error: champion fetched before username has been set')
    }

};

export default fetchChampions;