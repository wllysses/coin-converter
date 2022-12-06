import { Typography } from "@mui/material"
import styled from "styled-components"
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export const Header = () => {
    return (
        <HeaderWrapper>
            <header>
                <Typography variant="h1">
                    <CurrencyExchangeIcon fontSize="xl"/>
                    <div>Coin<span className="text-primary">Converter</span></div>
                    </Typography>
                <Typography variant="h4">easy and free coin converter</Typography>
            </header>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    padding: 4rem 0;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 1rem;

            @media(max-width: 760px) {
                font-size: 3rem;
            }

            @media(max-width: 430px) {
                flex-direction: column;
            }
        }

        h4 {
            font-size: 1.5rem;
            font-weight: 300;
        }
    }
`