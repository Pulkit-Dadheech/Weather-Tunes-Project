import React, {createContext, useEffect, useState} from 'react';

// Create a context for the song name
export const SongNameContext = createContext();

export const SongNameProvider = ({children}) => {
    const [city, setCity] = useState("Pune");
    const [weatherData, setWeatherData] = useState({});
    const [songName, setSongName] = useState(() => {
        // Retrieve the song name from localStorage, or use the initial value
        const storedSongName = localStorage.getItem('songName');
        if (storedSongName) {
            return storedSongName;
        } else {
            // If no song name is found in localStorage, use the initial value and store it
            const defaultSongName = "de mauka zindagi";
            localStorage.setItem('songName', defaultSongName);
            return defaultSongName;
        }
    });
    const [weatherPlaylistData, setWeatherPlaylistData] = useState([]);
    const [activeItem, setActiveItem] = useState(null);

    const getSongs = async () => {
        try {
            const response = await fetch('https://weather-tunes-backend.onrender.com/get_songs', {
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
        getSongs();
    }, [weatherData]);

    // Save the songName to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('songName', songName);
    }, [songName]);

    return (
        <SongNameContext.Provider value={{songName, setSongName, weatherData, setWeatherData, city, setCity, weatherPlaylistData, setWeatherPlaylistData, activeItem, setActiveItem}}>
            {children}
        </SongNameContext.Provider>
    );
};
