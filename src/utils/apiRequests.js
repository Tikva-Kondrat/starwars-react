import {getRandomNumber} from "./utilFunctions.js";

const mainUrl = 'https://sw-info-api.herokuapp.com/v1/films/'

export const getRandomEpisodeDetails = (maxEpisodeNumber) =>
    fetch(mainUrl + getRandomNumber(maxEpisodeNumber))