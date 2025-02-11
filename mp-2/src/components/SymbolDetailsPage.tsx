import { useEffect, useState } from "react";

interface SymbolDetails {
    base_currency: string;
    quote_currency: string;
    min_order_size: string;
    status: string;
}

export default function SymbolDetailsPage({ symbol }: { symbol: string }) {
    const [details, setDetails] = useState<SymbolDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.gemini.com/v1/symbols/details/${symbol}`)
            .then((res) => res.json())
            .then((data) => {
                setDetails(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching symbol details:", err);
                setLoading(false);
            });
    }, [symbol]);

    return (
        <div>
            <button onClick={() => window.location.reload()}>Back</button>
            <h2>Details for {symbol.toUpperCase()}</h2>
            {loading ? (
                <p>Loading...</p>
            ) : details ? (
                <>
                    <p>Base Currency: {details.base_currency}</p>
                    <p>Quote Currency: {details.quote_currency}</p>
                    <p>Min Order Size: {details.min_order_size}</p>
                    <p>Status: {details.status}</p>
                </>
            ) : (
                <p>Failed to load details.</p>
            )}
        </div>
    );
}
