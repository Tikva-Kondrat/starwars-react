import {useEffect, useState} from "react";
import {makeServerRequest, requestSkyWalkerDetails} from "../api/apiRequests.js";
import {getSkyWalkerInfoFromLocalStorage, setSkyWalkerInfoIntoLocalStorage} from "../storage/storingHadling.js";
import {hasExpired} from "../utils/utilFunctions.js";
import Spinner from "./utilComponents/Spinner.jsx";
import WalkerInfo from "./walker/WalkerInfo.tsx";

const AboutMe = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [walkerInfo, setWalkerInfo] = useState({})

    const getSkyWalkerDetailsFromStorage = () => {
        const data = getSkyWalkerInfoFromLocalStorage()
        if (!data) return null // no information in storage
        const {dateOfInput, ...details} = JSON.parse(data)
        if (hasExpired(dateOfInput)) return null
        return details
    }

    const makeSkyWalkerDetailsServerRequest = () => {
        setIsLoading(true)
        makeServerRequest(
            requestSkyWalkerDetails,
            (data) => {
                setWalkerInfo(data)
                setSkyWalkerInfoIntoLocalStorage(data)
            },
            () => setWalkerInfo({}),
            () => setIsLoading(false)
        )
    }

    useEffect(
        () => {
            const walkerDetails = getSkyWalkerDetailsFromStorage()
            !walkerDetails
                ? makeSkyWalkerDetailsServerRequest()
                : setWalkerInfo(walkerDetails)
        }, []
    )

    return (
        isLoading
            ? <Spinner/>
            :  <WalkerInfo info = {walkerInfo} />
    );
};

export default AboutMe;