import {keyOpeningCrawl, keySkyWalkerInfo} from "./constants.ts";
import {SkyWalkerDetails} from "../types/types.t.ts";

export const setOpeningCrawlIntoSessionStorage = (openingCrawl:string) =>
    sessionStorage.setItem(keyOpeningCrawl, openingCrawl)

export const getOpeningCrawlFromSessionStorage = () => sessionStorage.getItem(keyOpeningCrawl)

export const setSkyWalkerInfoIntoLocalStorage = (info:SkyWalkerDetails) => {
    const dateOfInput = new Date()
    localStorage.setItem(keySkyWalkerInfo, JSON.stringify({...info, dateOfInput}))
}

export const getSkyWalkerInfoFromLocalStorage = () => localStorage.getItem(keySkyWalkerInfo)
