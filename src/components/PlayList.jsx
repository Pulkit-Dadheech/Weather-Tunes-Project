import { tracks } from "../data/tracks";
import { useState } from "react";
import "../styles/playlist.css";

function Playlist() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(null);

    const playTrack = (index) => {
        setCurrentTrackIndex(index);
    };

    return (
        <div className="playlist-container">
            <div className="playlist">
                <div className="playlist-image">
                    <img src={require("../img/artist.jpg")} alt="" />
                </div>
                <ul className="playlist-track-list">
                    {tracks.map((track, index) => (
                        <li key={index} className="playlist-track-item" onClick={() => playTrack(index)}>
                            {`${index + 1}. ${track.title} - ${track.author}`}
                        </li>
                    ))}
                </ul>

            {currentTrackIndex !== null && (
                <div className="playlist-footer">
                    <p>Now Playing: {tracks[currentTrackIndex].title} - {tracks[currentTrackIndex].author}</p>
                    <audio controls src={currentTrackIndex !== null ? tracks[currentTrackIndex].src : ''}></audio>
                </div>
            )}
            </div>
        </div>
    );
}

export default Playlist;
