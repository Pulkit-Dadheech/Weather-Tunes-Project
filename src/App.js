import { LeftMenu } from "./components/LeftMenu/LeftMenu";
import "./styles/color.css";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import { Routes, Route} from "react-router-dom";
import Playlist from "./components/PlayList";
import React from "react";
import WeatherFetchedTracks from "./components/WeatherFetchedTracks";

function App() {
    return (
        <>
            <div className="App">
                <LeftMenu />
                <div className="main-container">
                    <Routes>
                        <Route path="/" element={<AudioPlayer/>}/>
                        <Route path="playlist" element={<Playlist/>}></Route>
                        <Route path="weather-playlist" element={<WeatherFetchedTracks/>}></Route>
                    </Routes>
                </div>
            </div>
            <div className="background"></div>
        </>
    );
}

export default App;