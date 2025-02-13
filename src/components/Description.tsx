import {useEffect, useState} from "react";
import {defaultOpeningCrawl} from "../utils/constatns.ts";
import {requestRandomEpisodeDetails, makeServerRequest} from "../api/apiRequests.ts";
import "../styles/spinnerStyle.css"
import Spinner from "./utilComponents/Spinner.tsx";
import {getOpeningCrawlFromSessionStorage, setOpeningCrawlIntoSessionStorage} from "../storage/storingHadling.ts";

interface InfoEpisode{
    opening_crawl: string,
}

const Description = () => {
    const [description, setDescription] = useState<string>(defaultOpeningCrawl)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const makeOpeningCrawlServerRequest = () => {
        setIsLoading(true)
        makeServerRequest(
            requestRandomEpisodeDetails(),
            (data: InfoEpisode):void => {
                const openingCrawl = data.opening_crawl
                setDescription(openingCrawl)
                setOpeningCrawlIntoSessionStorage(openingCrawl)
            },
            () => setDescription(defaultOpeningCrawl),
            () => setIsLoading(false)
        ).then()
    }

    useEffect(
        () => {
            const openingCrawl = getOpeningCrawlFromSessionStorage()
            !openingCrawl
                ? makeOpeningCrawlServerRequest()
                : setDescription(openingCrawl)
        }, []
    )

    return (
        isLoading
            ? <Spinner/>
            : <p className="context__text">{description}</p>
    )
};

export default Description;