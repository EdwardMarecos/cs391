import { useEffect, useState } from "react";
import styled from "styled-components";
import { GeminiData } from "../interfaces/GeminiData";

const PriceCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    margin: 1em;
    background: #1e1e1e;
    color: white;
    border-radius: 8px;
    border: 2px solid #61dafb;
    text-align: center;
    width: 100%;

    h2 {
        margin: 0.5em 0;
    }

    p {
        margin: 0.3em 0;
    }
`;

export default function GeminiPrice({ symbol }: { symbol: string }) {
    const [data, setData] = useState<GeminiData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.gemini.com/v2/ticker/${symbol}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result: GeminiData = await response.json();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [symbol]);

    return (
        <PriceCard>
            <h2>{symbol.toUpperCase()} Current Prices</h2>
            {loading ? (
                <p>Loading...</p>
            ) : data ? (
                <>
                    <p>Open Price: ${data.open}</p>
                    <p>High: ${data.high}</p>
                    <p>Low: ${data.low}</p>
                    <p>Last Price: ${data.close}</p>
                    <p>Bid: ${data.bid}</p>
                    <p>Ask: ${data.ask}</p>
                </>
            ) : (
                <p>Failed to load data.</p>
            )}
        </PriceCard>
    );
}
