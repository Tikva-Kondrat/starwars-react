import {useEffect, useState} from "react";
import {makeServerRequest, requestSkyWalkerDetails} from "../api/apiRequests.ts";
import {getSkyWalkerInfoFromLocalStorage, setSkyWalkerInfoIntoLocalStorage} from "../storage/storingHadling.ts";
import {hasExpired} from "../utils/utilFunctions.ts";
import Spinner from "./utilComponents/Spinner.tsx";
import WalkerInfo from "./walker/WalkerInfo.tsx";
import {SkyWalkerDetails} from "../types/types.t.ts";

const AboutMe = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [walkerInfo, setWalkerInfo] = useState<SkyWalkerDetails>({})

  const getSkyWalkerDetailsFromStorage = () => {
    const data = getSkyWalkerInfoFromLocalStorage()
    if (!data) return null // no information in storage
    const {dateOfInput, ...details} = JSON.parse(data)
    if (hasExpired(dateOfInput)) return null
    try {
      return details as SkyWalkerDetails
    } catch (e) {
      console.error('error in parsing walker details', e)
      return null
    }

  }

  const makeSkyWalkerDetailsServerRequest = () => {
    setIsLoading(true)
    makeServerRequest(
      requestSkyWalkerDetails,
      (data: SkyWalkerDetails) => {
        setWalkerInfo(data)
        setSkyWalkerInfoIntoLocalStorage(data)
      },
      () => setWalkerInfo({}),
      () => setIsLoading(false)
    ).then()
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
      : <WalkerInfo info={walkerInfo} />
  );
};

export default AboutMe;