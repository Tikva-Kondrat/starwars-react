import {useEffect, useRef, useState} from "react";
import {defaultOpeningCrawl} from "../utils/constatns.js";
import {getRandomEpisodeDetails} from "../utils/apiRequests.js";
import {maxEpisodeCount} from "../utils/constatns.js";


const getOpeningCrawlFromServerResponse = async (maxEpisodeNumber = 6,
                                                 actionOnServerOkResponse,
                                                 actionOnServerErrorResponse,
                                                 updateLoadingStatus) => {
    updateLoadingStatus(true)
    try {
        const response = await getRandomEpisodeDetails(maxEpisodeNumber)
        console.log(response)
        if (response.status === 200) {
            const data = await response.json()
            actionOnServerOkResponse(data.opening_crawl)
        } else {
            console.error(response.message)
            actionOnServerErrorResponse()
        }
    } catch (e) {
        actionOnServerErrorResponse()
    } finally {
        setTimeout(() => updateLoadingStatus(false), 2000)
    }
}

const Description = () => {
    console.log('rendering Description...')
    const [description, setDescription] = useState(defaultOpeningCrawl)
    const idTimeout = useRef(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(
        () => {
            idTimeout.current = setInterval(() => {
                getOpeningCrawlFromServerResponse(maxEpisodeCount,
                    (openingCrawl) => setDescription(openingCrawl),
                    () => setDescription(defaultOpeningCrawl),
                    (isLoading) => setIsLoading(isLoading))
            }, 10_000)
            return () => {
                console.log('clearInterval')
                clearInterval(idTimeout.current)
            }
        },
        [description]
    )

    return (
        isLoading ? (
                <div className="spinner-grow text-info align-content-center" role="status" style={{background: "red"}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) :
            <p className="farGalaxy">{description}</p>
    )
};

export default Description;