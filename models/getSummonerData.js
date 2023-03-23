import fetchSummoner from "./fetch/fetchSummoner.js";
import {getQueueData} from "./helpers/getQueueData.js";
import fetchElo from "./fetch/fetchElo.js";

export const getSummonerData = async (req, res) => {
    const summonerName = req.params.summonerName;

    try {
        const summoner = await fetchSummoner(summonerName);

        if (!summoner) {
            res.status(404).render("error", { message: "Summoner not found" });
            return;
        }

        const summonerId = summoner.id;
        const summonerElo = await fetchElo(summonerId);

        const soloQueueData = getQueueData(summonerElo, "RANKED_SOLO_5x5");
        const flexQueueData = getQueueData(summonerElo, "RANKED_FLEX_SR");

        res.render("summoner-details", {
            summonerName: summoner.name,
            summonerLevel: summoner.summonerLevel,
            summonerIconId: summoner.profileIconId,
            soloQueueData: soloQueueData,
            flexQueueData: flexQueueData,
        });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { message: "Error retrieving summoner data" });
    }
};