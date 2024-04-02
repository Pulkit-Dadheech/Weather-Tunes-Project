import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Playlist from "./components/PlayList";
import Login from "./components/Login";
import {FetchTracksProvider} from "./data/tracks";
import {SongNameProvider} from "./songContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Login/>}/>
            <Route path="home-page" element={<App/>}>
                <Route path="playlist" element={<Playlist/>}/>
            </Route>
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

