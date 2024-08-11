import {useContext} from "react";
import {SongNameContext} from "../songContext";
import "../styles/weather-playlist.css";
import {useNavigate} from "react-router-dom";

export default function Recommendations() {

    const navigate  = useNavigate();
    const {
        setSongName,
        weatherPlaylistData,
        setActiveItem
    } = useContext(SongNameContext);


    const setSong = (song) => {
        setSongName(song);
        localStorage.setItem('songName', song);
        setActiveItem('Home');
        navigate('/home-page');

    }

    return (
        <div className="weather-playlist">
            <h1 className="weather-playlist-title">Recommended Songs</h1>
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
