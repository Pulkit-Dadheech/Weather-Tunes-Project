import React from "react";
import {FaPlus} from "react-icons/fa";
import {BsMusicNoteList, BsTrash} from "react-icons/bs";
import {PlayList} from "../PlayList";

function MenuPlayList() {
    return (
        <div className="playlist-container">
            <div className="name-container">
                <p>PlayList</p>
                <i>{<FaPlus/>}</i>
            </div>
            <div className="playlist-scroll">
                {PlayList && PlayList.map((list)=>(
                <div className="playlist">
                    <i className="list">{BsMusicNoteList()}</i>
                    <p>Sample Name</p>
                    <i className="trash">{BsTrash()}</i>
                </div>
                    ))}
            </div>

        </div>
    )
}

export {MenuPlayList};