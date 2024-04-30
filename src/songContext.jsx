import React, {createContext, useEffect, useState} from 'react';
import {get} from "axios";

// Create a context for the song name
export const SongNameContext = createContext();

export const SongNameProvider = ({children, initialSongName}) => {
    const [city,setCity] = useState("Pune");
    const [weatherData,setWeatherData] = useState({});
    const [songName, setSongName] = useState(initialSongName || "bade ache lagte h");
    const [weatherPlaylistData,setWeatherPlaylistData] = useState([])
    const [activeItem, setActiveItem] = useState(null);

    const getSongs = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/get_songs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({ weather_condition: weatherData.weather[0].main })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();

            setWeatherPlaylistData(data.songs);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getSongs()
    }, [weatherData]);

    return (
        <SongNameContext.Provider value={{songName, setSongName,weatherData,setWeatherData,city,setCity,weatherPlaylistData,setWeatherPlaylistData,activeItem, setActiveItem}}>
            {children}
        </SongNameContext.Provider>
    );
};
