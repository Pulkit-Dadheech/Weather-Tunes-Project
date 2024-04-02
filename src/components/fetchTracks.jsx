import {useContext, useState} from "react";
import {FetchTracksContext} from "../data/tracks";
import axios from "axios";

export const useFetchTracks = () => {
    return useContext(FetchTracksContext);
};
// export const useAudioTracks = () => {
//     const [tracks, setTracks] = useState([]);
//     const searchQuery = localStorage.getItem("search");
//
//     const fetchTracks = async () => {
//         try {
//             let songName = "";
//             if (searchQuery && searchQuery !== "") {
//                 songName = searchQuery;
//             }
//             const { data } = await axios.get(`http://127.0.0.1:5100/song/?query=${songName}&lyrics=true`);
//             const newTracks = data.map((song) => ({
//                 title: song.song,
//                 author: song.primary_artists,
//                 src: song.media_url,
//                 thumbnail: song.image,
//             }));
//             setTracks(newTracks);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };
//
//     return { tracks, fetchTracks };
// };
