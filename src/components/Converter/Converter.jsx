import { useEffect, useState } from "react"
import { getCoins } from "../../services/api"
import { Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from "styled-components"

export const Converter = (props) => {

    const [coin, setCoin] = useState({
        coinA: props.coinA,
        coinB: props.coinB
    })
    const [coinAsk, setCoinAsk] = useState()
    const [input, setInput] = useState('')
    const [coinValue, setCoinValue] = useState(0)

    const fetchData = async () => {
        const coins = await getCoins(coin.coinA, coin.coinB)
        setCoinAsk(coins[`${coin.coinA}${coin.coinB}`])
    }

    const calculateCoin = () => {
        setCoinValue((input * coinAsk.ask).toFixed(1))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ConverterWrapper>
            <ConverterWrapperHeader>
                <Typography variant="h2">{coin.coinA} to {coin.coinB}</Typography>
            </ConverterWrapperHeader>
            <ConverterWrapperBody>
                <TextField id="outlined-basic" label={`${coin.coinA} to ${coin.coinB}`} variant="outlined" onChange={(e) => setInput(e.target.value)} />
                <Button variant="contained" onClick={calculateCoin}>Converter</Button>
            </ConverterWrapperBody>
            <ConverterWrapperFooter>
                <Typography variant="h3">{coinValue}</Typography>
            </ConverterWrapperFooter>
        </ConverterWrapper>
    )
}

const ConverterWrapper = styled.div`
    max-width: 350px;
    width: 100%;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ConverterWrapperHeader = styled.div`
    h2 {
        color: #000;
        font-size: 2rem;
        text-align: center;
    }
`

const ConverterWrapperBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const ConverterWrapperFooter = styled.div`
    color: #000;
    text-align: center;
    font-weight: 300;
`