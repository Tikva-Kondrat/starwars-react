import {defaultExpireNumOfDays} from "./constatns.js";

/**
 * Returns random numbers form 1 to upper limit
 * @param upperLimit
 * @returns {number}
 */
export const getRandomNumber = (upperLimit: any) => (Math.floor(Math.random() * 10) % upperLimit) + 1

/**
 * Check if the date has expired
 * @param numOfDays - expire period in days
 * @param date - date to check in string format
 * @returns {boolean} true if the {date} has expired else false
 */
export const hasExpired = (date: any, numOfDays = defaultExpireNumOfDays) => {
    const dateToCheck = new Date(date);
    // Calculating the time difference
    const timeDiff = (new Date()).getTime() - dateToCheck.getTime();
    // Calculating the no. of days between the dates
    const  daysDiff = Math.round(timeDiff / (1000 * 3600 * 24))
    return daysDiff > numOfDays;
}