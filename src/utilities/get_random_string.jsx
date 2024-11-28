export default function getRandomString(string1, string2) {
    // Generate a random number (0 or 1)
    const randomIndex = Math.random() < 0.5 ? 0 : 1

    // Return one of the strings based on the random number
    return randomIndex === 0 ? string1 : string2
}
