import fetchChampions from "./fetch/fetchChampions.js";
import getFilteredName from "./helpers/getFilteredName.js";
import fetchSingleChampion from "./fetch/fetchSingleChampion.js";

export const getChampionData = async (req, res) => {
    const summonerName = req.params.summonerName;
    const championId = req.params.championId;

    try {
        const championData = await fetchChampions();
        const selectedChampion = Object.values(championData.data).find(champion => {
            return champion.key === championId;
        });

        if (selectedChampion) {
            const filteredName = getFilteredName(selectedChampion.id);
            const singularData = await fetchSingleChampion(filteredName);

            res.render("summoner-details", {
                summonerName: summonerName,
                championName: selectedChampion.name,
                championTitle: selectedChampion.title,
                championBio: singularData.lore,
                championSplash: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${filteredName}_0.jpg`,
            });
        } else {
            res.status(404).send('Champion not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving champion data');
    }
};