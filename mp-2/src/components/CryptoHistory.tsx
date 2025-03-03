import { useEffect, useState } from "react";
import styled from "styled-components";
import { GeminiData } from "../interfaces/GeminiData";

const PriceCard = styled.div`

`;

export default function CryptoHistory({ symbol }: { symbol: string }) {
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

                </>
            ) : (
                <p>Failed to load data.</p>
            )}
        </PriceCard>
    );
}
