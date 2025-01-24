import {getRandomNumber} from "../utils/utilFunctions.js";

const maxEpisodeCount = 6
const skyWalkerId = 1

export const baseUrl = 'https://sw-info-api.herokuapp.com/v1/'

export const requestRandomEpisodeDetails = () =>
    fetch(`${baseUrl}films/${getRandomNumber(maxEpisodeCount)}`)

const requestPersonByIdDetails = (id) =>
    fetch(`${baseUrl}peoples/${id}`)

export const requestSkyWalkerDetails = () =>
    requestPersonByIdDetails(skyWalkerId)

export const requestPlanets = () =>
    fetch(`${baseUrl}planets`)

export const makeServerRequest = async (
    request,
    actionOnServerOkResponse,
    actionOnServerErrorResponse,
    actionOnRequestFulfilled = () => {}
) => {
    try {
        const response = await request()
        if (response.status === 200) {
            const data = await response.json()
            actionOnServerOkResponse(data)
        } else {
            console.warn(response)
            actionOnServerErrorResponse()
        }
    } catch (e) {
        console.error(e.message)
        actionOnServerErrorResponse()
    } finally {
        actionOnRequestFulfilled()
    }
}