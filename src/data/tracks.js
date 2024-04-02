import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

// Create a context for the fetchTracks functions
export const FetchTracksContext = createContext();

export const FetchTracksProvider = ({children}) => {
    const [tracks, setTracks] = useState([]);
    const [songName, setSongName] = useState(() => localStorage.getItem('search') || "bade ache lagte h")

    // useEffect(() => {
    //     setSongName()
    // }, [songName]);
    const fetchTracks = async () => {
        const options = {
            method: 'GET',
            url: 'https://saavn.dev/api/search/songs',
            params: {query: songName}
        };
        try {
            const {data} = await axios.request(options);
            console.log(data); // Log the received data for debugging
            console.log("hello");
            let newTracks = [];
            if (data && data.data && Array.isArray(data.data.results)) {
                const newTracks = data.data.results.map((song) => {
                    const downloadUrl = song.downloadUrl[4].url || "";
                    const thumbnail = song.image[2].url || "";
                    const author = song.artists.primary.map(artist => artist.name).join(', ');
                    return {
                        title: song.name,
                        author: author,
                        src: downloadUrl,
                        thumbnail: thumbnail,
                    };
                });
                setTracks(newTracks);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            // You might want to handle the error state or message here
            // For now, I'm just returning an empty array
        }
    };

    return (
        <FetchTracksContext.Provider value={{tracks, fetchTracks}}>
            {children}
        </FetchTracksContext.Provider>
    );
};

// Custom hook to consume the fetchTracks function
