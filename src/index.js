import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import Playlist from "./components/PlayList";
import Login from "./pages/Login";
import {FetchTracksProvider} from "./data/tracks";
import {SongNameProvider} from "./songContext";
import WeatherFetchedTracks from "./components/WeatherFetchedTracks";
import Signup from "./pages/Signup";


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/home-page" element={<App/>}>
                <Route path="playlist" element={<Playlist/>}/>
                <Route path="weather-playlist" element={<WeatherFetchedTracks/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
        </>
    )
)
root.render(
    <React.StrictMode>
        <SongNameProvider>
            <FetchTracksProvider>
                <RouterProvider router={router}/>
            </FetchTracksProvider>
        </SongNameProvider>
    </React.StrictMode>
);

