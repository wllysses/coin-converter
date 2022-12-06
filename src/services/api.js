import axios from "axios"

export const getCoins = async (coinA, coinB) => {
    const url = `https://economia.awesomeapi.com.br/last/${coinA}-${coinB}`
    const response = await axios.get(url).catch(err => console.log(`Error: ${err}`))

    return response.data
}