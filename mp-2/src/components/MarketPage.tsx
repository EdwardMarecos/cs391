import { useEffect, useState } from "react";
import styled from "styled-components";
import { MarketData } from "../interfaces/MarketData";
import { SymbolDetails } from "../interfaces/SymbolDetails";
import { NetworkData } from "../interfaces/NetworkData";

const PriceContainer = styled.div`
    background: #1e1e1e;
    padding: 1rem;
    border-radius: 10px;
    color: white;
    width: 80%;
    margin: auto;
    border: 2px solid #61dafb;
`;

export default function MarketPage({ symbol }: { symbol: string }) {
    const [marketData, setMarketData] = useState<MarketData | null>(null);
    const [symbolDetails, setSymbolDetails] = useState<SymbolDetails | null>(null);
    const [networkData, setNetworkData] = useState<NetworkData | null>(null);
    const [loading, setLoading] = useState(true);

    // the timestamp denotes ms so it's not very useful unless we make it a readable date and time
    const formatTimestamp = (timestampms: number) => {
        return new Date(timestampms).toLocaleString();
    };

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const marketResponse = await fetch(`https://api.gemini.com/v1/pubticker/${symbol}`);
                const marketResult: MarketData = await marketResponse.json();
                setMarketData(marketResult);

                const symbolResponse = await fetch(`https://api.gemini.com/v1/symbols/details/${symbol}`);
                const symbolResult: SymbolDetails = await symbolResponse.json();
                setSymbolDetails(symbolResult);

                const networkResponse = await fetch(`https://api.gemini.com/v1/network/${symbolResult.base_currency}`);
                const networkResult: NetworkData = await networkResponse.json();
                setNetworkData(networkResult);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMarketData();
    }, [symbol]);

    return (
        <PriceContainer>
            <h2>{symbol.toUpperCase()} Market Data</h2>
            {loading ? (
                <p>Loading...</p>
            ) : marketData && symbolDetails && networkData ? (
                <>
                    <p>Volume (BTC): {marketData.volume.BTC}</p>
                    <p>Volume (USD): {marketData.volume.USD}</p>
                    <p>Last Updated: {formatTimestamp(marketData.volume.timestamp)}</p>
                    <hr />
                    <h3>Symbol Details</h3>
                    <p>Base Currency: {symbolDetails.base_currency}</p>
                    <p>Quote Currency: {symbolDetails.quote_currency}</p>
                    <p>Min Order Size: {symbolDetails.min_order_size}</p>
                    <p>Product Type: {symbolDetails.product_type}</p>
                    <p>Contract Type: {symbolDetails.contract_type}</p>
                    <p>Status: {symbolDetails.status}</p>
                    <hr />
                    <h3>Network Information</h3>
                    <p>Token: {networkData.token}</p>
                    <p>Supported Networks: {networkData.network.join(", ")}</p>
                </>
            ) : (
                <p>Failed to load data.</p>
            )}
        </PriceContainer>
    );
}
