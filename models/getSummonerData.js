import fetchSummoner from "./fetch/fetchSummoner.js";
import {getQueueData} from "./helpers/getQueueData.js";
import fetchElo from "./fetch/fetchElo.js";
import fetchMasteryBySummonerId from "./fetch/fetchMasteryBySummonerId.js";
import fetchChampions from "./fetch/fetchChampions.js";
import getFilteredName from "./helpers/getFilteredName.js";

export const getSummonerData = async (req, res) => {
    const summonerName = req.params.summonerName;
    const loadingState = req.query.loadingState === 'true';

    try {
        const summoner = await fetchSummoner(summonerName);

        if (!summoner) {
            res.status(404).render("error", { message: "Summoner not found" });
            return;
        }

        const summonerId = summoner.id; // Define summonerId here
        const summonerMastery = await fetchMasteryBySummonerId(summonerId);
        const championData = await fetchChampions();

        const summonerElo = await fetchElo(summonerId);

        const soloQueueData = getQueueData(summonerElo, "RANKED_SOLO_5x5");
        const flexQueueData = getQueueData(summonerElo, "RANKED_FLEX_SR");

        return {
            summonerName: summoner.name,
            summonerLevel: summoner.summonerLevel,
            summonerIconId: summoner.profileIconId,
            soloQueueData: soloQueueData,
            flexQueueData: flexQueueData,
            summonerMastery: summonerMastery,
            championData: championData,
            loadingState: loadingState,
            getFilteredName: getFilteredName,
        };
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { message: "Error retrieving summoner data" });
    }
};
