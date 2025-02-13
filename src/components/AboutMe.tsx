import {useEffect, useState} from "react";
import {makeServerRequest, requestCharacterByIdDetails} from "../api/apiRequests.ts";
import {hasExpired} from "../utils/utilFunctions.ts";
import Spinner from "./utilComponents/Spinner.tsx";
import CharacterInfo from "./walker/CharacterInfo.tsx";
import {CharacterDetails} from "../types/types.t.ts";
import {characters, defaultCharacterId} from "../api/constants.ts";
import {getCharacterInfoFromLocalStorage, setCharacterInfoIntoLocalStorage} from "../storage/storingHadling.ts";
import {defaultCharacterShortName} from "../storage/constants.ts";
import {useParams} from "react-router";

const AboutMe = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [characterInfo, setCharacterInfo] = useState<CharacterDetails>({})
  const {shortName = defaultCharacterShortName} = useParams();

  const getSkyWalkerDetailsFromStorage = () => {
    const data = getCharacterInfoFromLocalStorage(shortName)
    if (!data) return null // no information in storage
    const {dateOfInput, ...details} = JSON.parse(data)
    if (hasExpired(dateOfInput)) return null
    try {
      return details as CharacterDetails
    } catch (e) {
      console.error('error in parsing character details', e)
      return null
    }
  }

  const makeSkyWalkerDetailsServerRequest = () => {
    setIsLoading(true)
    const id = characters.get(shortName)?.id ?? defaultCharacterId
    makeServerRequest(
      requestCharacterByIdDetails(id),
      (data: CharacterDetails) => {
        setCharacterInfo(data)
        setCharacterInfoIntoLocalStorage(shortName, data)
      },
      () => setCharacterInfo({}),
      () => setIsLoading(false)
    ).then()
  }

  useEffect(
    () => {
      const characterDetails = getSkyWalkerDetailsFromStorage()
      !characterDetails
        ? makeSkyWalkerDetailsServerRequest()
        : setCharacterInfo(characterDetails)
    }, []
  )

  return (
    isLoading
      ? <Spinner/>
      : <CharacterInfo info={characterInfo} />
  );
};

export default AboutMe;