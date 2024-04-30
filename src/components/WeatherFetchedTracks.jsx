import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {SongNameContext} from "../songContext";
import "../styles/weather-playlist.css";
import {useNavigate} from "react-router-dom";

export default function WeatherFetchedTracks() {

    const navigate  = useNavigate();
    const {
        setSongName,
        weatherPlaylistData,
        setActiveItem
    } = useContext(SongNameContext);


    const setSong = (song) => {
        setSongName(song);
        setActiveItem('Home');
        navigate('/home-page');
    }

    return (
        <div className="weather-playlist">
            <h1 className="weather-playlist-title">Weather Playlist Songs</h1>
            <ul className="weather-song-list">
                {weatherPlaylistData.map((song, index) => (
                    <li key={index} className="weather-song-item" onClick={()=>setSong(song)}>
                        {song}
                    </li>
                ))}
            </ul>
        </div>
    );
}
