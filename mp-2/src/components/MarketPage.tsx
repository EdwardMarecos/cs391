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
    const [error, setError] = useState<string | null>(null);

    // Format timestamp for readability
    const formatTimestamp = (timestampms: number) => {
        return new Date(timestampms).toLocaleString();
    };

    useEffect(() => {
        const fetchMarketData = async () => {
            setLoading(true);
            setError(null);

            try {
                const marketResponse = await fetch(`https://api.gemini.com/v1/pubticker/${symbol}`);
                const marketResult = await marketResponse.json();
                if (marketResult.errorMessage) throw new Error(marketResult.errorMessage);
                setMarketData(marketResult);

                const symbolResponse = await fetch(`https://api.gemini.com/v1/symbols/details/${symbol}`);
                const symbolResult = await symbolResponse.json();
                if (symbolResult.errorMessage) throw new Error(symbolResult.errorMessage);
                setSymbolDetails(symbolResult);

                // Only fetch network data if base_currency is valid
                if (symbolResult.base_currency) {
                    const networkResponse = await fetch(`https://api.gemini.com/v1/network/${symbolResult.base_currency}`);
                    const networkResult = await networkResponse.json();
                    if (networkResult.errorMessage) throw new Error(networkResult.errorMessage);
                    setNetworkData(networkResult);
                }
            } catch (err) {
                setError((err as Error).message);
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
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : marketData && symbolDetails ? (
                <>
                    <h3>Volume</h3>
                    {Object.entries(marketData.volume).map(([currency, amount]) =>
                        currency !== "timestamp" ? <p key={currency}>Volume ({currency}): {amount}</p> : null
                    )}
                    <p>Last Updated: {formatTimestamp(marketData.volume.timestamp)}</p>

                    <hr />
                    <h3>Symbol Details</h3>
                    <p>Base Currency: {symbolDetails.base_currency}</p>
                    <p>Quote Currency: {symbolDetails.quote_currency}</p>
                    <p>Min Order Size: {symbolDetails.min_order_size}</p>
                    <p>Product Type: {symbolDetails.product_type}</p>
                    <p>Contract Type: {symbolDetails.contract_type}</p>
                    <p>Status: {symbolDetails.status}</p>

                    {networkData && (
                        <>
                            <hr />
                            <h3>Network Information</h3>
                            <p>Token: {networkData.token}</p>
                            <p>Supported Networks: {networkData.network.join(", ")}</p>
                        </>
                    )}
                </>
            ) : (
                <p>Failed to load data.</p>
            )}
        </PriceContainer>
    );
}
