import {getRandomNumber} from "../utils/utilFunctions.ts";

const maxEpisodeCount = 6

export const baseUrl = 'https://sw-info-api.herokuapp.com/v1/'

export const requestRandomEpisodeDetails = () =>
  fetch(`${baseUrl}films/${getRandomNumber(maxEpisodeCount)}`)

export const requestCharacterByIdDetails = (id: string) =>
  fetch(`${baseUrl}peoples/${id}`)

export const requestSkyWalkerDetails = () =>
  requestCharacterByIdDetails('1')

export const requestPlanets = () =>
  fetch(`${baseUrl}planets`)

export const makeServerRequest = async (
  request: Promise<Response>,
  actionOnServerOkResponse: (param: any) => void,
  actionOnServerErrorResponse: () => void,
  actionOnRequestFulfilled = () => {
  }
) => {
  try {
    const response = await request
    if (response.status === 200) {
      const data = await response.json()
      actionOnServerOkResponse(data)
    } else {
      console.warn(response)
      actionOnServerErrorResponse()
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message)
    }
    actionOnServerErrorResponse()
  } finally {
    actionOnRequestFulfilled()
  }
}