import {useCallback, useEffect, useState} from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const responseData = await response.json();
            setData(responseData);
            setError(null);
        } catch (error) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {data, error, loading};
}