import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

// Create a context for the fetchTracks functions
export const FetchTracksContext = createContext();

export const FetchTracksProvider = ({children}) => {
    const [tracks, setTracks] = useState([]);
    const [songName,setSongName] = useState(()=>localStorage.getItem('search') || "")

    // useEffect(() => {
    //     setSongName()
    // }, [songName]);
    const fetchTracks = async () => {
        try {
            const {data} = await axios.get(`http://127.0.0.1:5100/song/?query=${songName}&lyrics=true`);
            const newTracks = data.map((song) => {
                return {
                    title: song.song,
                    author: song.primary_artists,
                    src: song.media_url,
                    thumbnail: song.image,
                };
            });
            setTracks(newTracks);
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    };
    return (
        <FetchTracksContext.Provider value={{tracks, fetchTracks}}>
            {children}
        </FetchTracksContext.Provider>
    );
};

// Custom hook to consume the fetchTracks function
