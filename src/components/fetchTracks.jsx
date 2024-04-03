import {useContext} from "react";
import {FetchTracksContext} from "../data/tracks";

export const useFetchTracks = () => {
    return useContext(FetchTracksContext);
};
