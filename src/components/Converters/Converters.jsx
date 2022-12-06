import { Container } from "@mui/material"
import { Converter } from "../Converter/Converter"
import styled from "styled-components"

export const Converters = () => {
    return (
        <Container>
            <ContentContainer>
                <Converter coinA="USD" coinB="BRL"/>
                <Converter coinA="EUR" coinB="BRL"/>
                <Converter coinA="CAD" coinB="BRL"/>
                <Converter coinA="BRL" coinB="USD"/>
                <Converter coinA="BRL" coinB="EUR"/>
                <Converter coinA="BRL" coinB="CAD"/>
            </ContentContainer>
        </Container>
    )
}

const ContentContainer = styled.div`
    padding: 2rem;
    border-radius: 0.3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`