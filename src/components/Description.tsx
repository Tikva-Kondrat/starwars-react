import {useEffect, useState} from "react";
import {defaultOpeningCrawl} from "../utils/constatns.js";
import {requestRandomEpisodeDetails, makeServerRequest} from "../api/apiRequests.js";
import "../styles/spinnerStyle.css"
// @ts-expect-error TS(6142): Module './utilComponents/Spinner.jsx' was resolved... Remove this comment to see the full error message
import Spinner from "./utilComponents/Spinner.jsx";
import {getOpeningCrawlFromSessionStorage, setOpeningCrawlIntoSessionStorage} from "../storage/storingHadling.js";

const Description = () => {
    const [description, setDescription] = useState(defaultOpeningCrawl)
    const [isLoading, setIsLoading] = useState(false)

    const makeOpeningCrawlServerRequest = () => {
        setIsLoading(true)
        makeServerRequest(
            requestRandomEpisodeDetails,
            (data: any) => {
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
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            ? <Spinner/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            : <p className="context__text">{description}</p>
    )
};

export default Description;