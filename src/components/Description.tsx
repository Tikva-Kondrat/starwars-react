import {useEffect, useState} from "react";
import {defaultOpeningCrawl} from "../utils/constatns.js";
import {requestRandomEpisodeDetails, makeServerRequest} from "../api/apiRequests.js";
import "../styles/spinnerStyle.css"
import Spinner from "./utilComponents/Spinner.jsx";
import {getOpeningCrawlFromSessionStorage, setOpeningCrawlIntoSessionStorage} from "../storage/storingHadling.js";

const Description = () => {
    const [description, setDescription] = useState(defaultOpeningCrawl)
    const [isLoading, setIsLoading] = useState(false)

    const makeOpeningCrawlServerRequest = () => {
        setIsLoading(true)
        makeServerRequest(
            requestRandomEpisodeDetails,
            (data) => {
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