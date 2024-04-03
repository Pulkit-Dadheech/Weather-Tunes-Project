import React, {createContext, useState} from 'react';

// Create a context for the song name
export const SongNameContext = createContext();

export const SongNameProvider = ({children, initialSongName}) => {
    const [songName, setSongName] = useState(initialSongName || "bade ache lagte h");

    return (
        <SongNameContext.Provider value={{songName, setSongName}}>
            {children}
        </SongNameContext.Provider>
    );
};
