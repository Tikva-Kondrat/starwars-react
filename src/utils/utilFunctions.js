/**
 * Returns random numbers form 1 to upper limit
 * @param upperLimit
 * @returns {number}
 */
export const getRandomNumber = (upperLimit) =>
    (Math.floor(Math.random() * 10) % upperLimit) + 1
