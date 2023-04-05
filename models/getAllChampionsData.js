import fetchChampions from "./fetch/fetchChampions.js";
import getFilteredName from "./helpers/getFilteredName.js";
import fetch from 'node-fetch'

export const getAllChampionsData = async (pageSize, offset) => {
    try {
        const championData = await fetchChampions();

        const champions = Object.values(championData.data).slice(offset, offset + pageSize).map(async (champion) => {
            const filteredName = getFilteredName(champion.id);

            return {
                id: champion.id,
                name: champion.name,
                title: champion.title,
                blurb: champion.blurb,
                splash: `https://champion-images.imgix.net/${filteredName}_0.jpg?w=580&auto=compress&fm=auto`,
            };
        });

        const championsData = await Promise.all(champions);

        return championsData;
    } catch (error) {
        throw new Error("Error retrieving champions data");
    }
};

export const getSingleChampionData = async (id) => {
    try {
        const filteredName = getFilteredName(id);
        const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/${filteredName}.json`);
        const championData = await response.json();
        return {
            id: championData.data[filteredName].id,
            name: championData.data[filteredName].name,
            title: championData.data[filteredName].title,
            lore: championData.data[filteredName].lore,
            splash: `https://champion-images.imgix.net/${filteredName}_0.jpg?w=800&auto=compress&fm=auto`,
            spells: championData.data[filteredName].spells,
        };
    } catch (error) {
        throw new Error("Error retrieving champion");
    }
}
