import React, {createContext, useState} from 'react';

// Create a context for the song name
export const SongNameContext = createContext();

export const SongNameProvider = ({children, initialSongName}) => {
    const [city,setCity] = useState("Pune");
    const [weatherData,setWeatherData] = useState({});
    const [songName, setSongName] = useState(initialSongName || "bade ache lagte h");

    return (
        <SongNameContext.Provider value={{songName, setSongName,weatherData,setWeatherData,city,setCity}}>
            {children}
        </SongNameContext.Provider>
    );
};
