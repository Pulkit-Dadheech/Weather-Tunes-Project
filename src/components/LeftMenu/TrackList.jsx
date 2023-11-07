import React from "react";
import {BsFillVolumeUpFill, BsMusicNoteList} from "react-icons/bs";
import {FaDesktop} from "react-icons/fa";
import Track from "../../img/track.png";
function TrackList(){
    return(
        <div className="track-list">
            <div className="top">
                <img src={Track} alt=""/>
                <p className="track-name">
                    Play Your Favorite songs
                    {/*Play Your Favorite songs<span className="track-span">Artist</span>*/}
                </p>
            </div>
            <div className="bottom">
                <i><BsFillVolumeUpFill/></i>
                <input type="range"/>
                <i><BsMusicNoteList/></i>
                <i className="track-desktop-icon"><FaDesktop/></i>
            </div>
        </div>
    )
}
export {TrackList};