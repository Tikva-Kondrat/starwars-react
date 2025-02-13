import {keyOpeningCrawl} from "./constants.ts";
import {CharacterDetails} from "../types/types.t.ts";

export const setOpeningCrawlIntoSessionStorage = (openingCrawl:string) =>
    sessionStorage.setItem(keyOpeningCrawl, openingCrawl)

export const getOpeningCrawlFromSessionStorage = () => sessionStorage.getItem(keyOpeningCrawl)

export const setCharacterInfoIntoLocalStorage = (shortName: string, info:CharacterDetails) => {
    const dateOfInput = new Date()
    localStorage.setItem(shortName, JSON.stringify({...info, dateOfInput}))
}

export const getCharacterInfoFromLocalStorage = (shortName: string) => localStorage.getItem(shortName)
