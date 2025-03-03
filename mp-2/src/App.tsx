import { useState } from "react";
import SymbolList from "./components/SymbolList";
import MarketPage from "./components/MarketPage";
import GeminiPrice from "./components/GeminiPrice";
import CryptoHistory from "./components/CryptoHistory";
import styled from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 100vh;
    margin: 0 10vw;
    border: 5px darkgoldenrod solid;
`;

const CryptoWrapper = styled.div`
    font-size: calc(2px + 1.3vh);
    display: flex;
    flex-direction: column;
    padding: 5vh 0.5vw;
    border: 3px white solid;
    width: 80%;
`

const Sidebar = styled.div`
    width: 20%;
    border: 5px mediumpurple solid;
    overflow-y: hidden;
    font-size: calc(2px + 1vw);

    h2 {
        margin: 5vh 0 1vh 0;
    }
`;

const MarketContent = styled.div`
    text-align: center;
    
    h1 {
        margin: 0 0 1vh 0;
    }
`;

const History = styled.div`
    
`

const GeminiPriceContainer = styled.div`
display: flex;
`

export default function App() {
    const [selectedSymbol, setSelectedSymbol] = useState<string>("btcusd");

    return (
        <PageWrapper>
            <CryptoWrapper>
                <MarketContent>
                    <h1>Crypto Price Tracker</h1>
                    <MarketPage symbol={selectedSymbol} />
                </MarketContent>
                <GeminiPriceContainer>
                    <GeminiPrice symbol={selectedSymbol} />
                </GeminiPriceContainer>
                <History>
                    <CryptoHistory symbol={selectedSymbol} />
                </History>
            </CryptoWrapper>
            <Sidebar>
                <h2>Crypto Symbols</h2>
                <SymbolList onSelect={setSelectedSymbol} />
            </Sidebar>
        </PageWrapper>
    );
}
