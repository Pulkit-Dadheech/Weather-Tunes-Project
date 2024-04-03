import axios from "axios";
import { useContext, useEffect } from "react";
import { SongNameContext } from "../songContext";

export const FetchWeatherData = () => {
    const { city, setWeatherData } = useContext(SongNameContext);
    const fetchTracks = async () => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.api_key}`);
            console.log(data);
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setWeatherData({});
        }
    };
    useEffect(() => {
        fetchTracks();
    }, [city]);

    return fetchTracks;
};
