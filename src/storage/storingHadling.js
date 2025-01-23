import {keyOpeningCrawl, keySkyWalkerInfo} from "./constants.js";

export const setOpeningCrawlIntoSessionStorage = (openingCrawl) =>
    sessionStorage.setItem(keyOpeningCrawl, openingCrawl)

export const getOpeningCrawlFromSessionStorage = () => sessionStorage.getItem(keyOpeningCrawl)

export const setSkyWalkerInfoIntoLocalStorage = (info) => {
    const dateOfInput = new Date()
    localStorage.setItem(keySkyWalkerInfo, JSON.stringify({...info, dateOfInput}))
}

export const getSkyWalkerInfoFromLocalStorage = () => localStorage.getItem(keySkyWalkerInfo)
