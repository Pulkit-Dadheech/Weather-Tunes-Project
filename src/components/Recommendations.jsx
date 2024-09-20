import {useContext, useEffect, useState} from "react";
import {SongNameContext} from "../songContext";
import "../styles/weather-playlist.css";
import {useNavigate} from "react-router-dom";

export default function Recommendations() {
    const [loading, setLoading] = useState(true); // Initialize loading state
    const navigate  = useNavigate();
    const {
        setSongName,
        weatherPlaylistData,
        setActiveItem
    } = useContext(SongNameContext);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const setSong = (song) => {
        setSongName(song);
        localStorage.setItem('songName', song);
        setActiveItem('Home');
        navigate('/home-page');
    }

    return (
        <div className="weather-playlist">
            <h1 className="weather-playlist-title">Recommended Songs</h1>

            {loading ? (
                <p className="loading-text" style={{color: "white"}}>Please wait, fetching songs...</p>
            ) : (
                <ul className="weather-song-list">
                    {weatherPlaylistData.map((song, index) => (
                        <li key={index} className="weather-song-item" onClick={() => setSong(song)}>
                            {song}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
