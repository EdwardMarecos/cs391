import { useEffect, useState } from "react";
import styled from "styled-components";

const SymbolContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vh;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px blue solid;

    // similarly to mp1, hide the scrollbar but keep functionality
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    ::-webkit-scrollbar {
        display: none;
    }
`;

const SymbolButton = styled.button`
    background: #1e1e1e;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    font-size: calc(2px + 1.3vw);

    &:hover {
        background: #646cff;
    }
`;

export default function SymbolList({ onSelect }: { onSelect: (symbol: string) => void }) {
    const [symbols, setSymbols] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.gemini.com/v1/symbols")
            .then((res) => res.json())
            .then((data) => {
                setSymbols(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching symbols:", err);
                setLoading(false);
            });
    }, []);

    return (
        <SymbolContainer>
            {loading ? <p>Loading...</p> : symbols.map((symbol) => (
                <SymbolButton key={symbol} onClick={() => onSelect(symbol)}>
                    {symbol}
                </SymbolButton>
            ))}
        </SymbolContainer>
    );
}
