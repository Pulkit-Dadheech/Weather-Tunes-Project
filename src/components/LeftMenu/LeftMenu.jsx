import React, {useContext, useEffect, useState} from "react";
import "../../styles/LeftMenu.css"
import {WiCloud} from "react-icons/wi";
import {BiSearchAlt} from "react-icons/bi";
import {MenuList} from "./MenuList";
import {MenuItems} from "./MenuItems";
import {TrackList} from "./TrackList";
import {SongNameContext} from "../../songContext";

function LeftMenu() {
    const {setSongName} = useContext(SongNameContext);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setSongName(search);
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [search]);

    return (
        <div className="left-menu">
            <div className="logo-container">
                <i>{WiCloud()}</i>
                <h3 className="left-menu-main-title">Weather Tunes</h3>
            </div>
            <div className="search-box">
                <i className="search-icon">{BiSearchAlt()}</i>
                <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className={"menu-items-container"}>
                <MenuItems title={"Menu"} menuObject={MenuList}/>
            </div>
            <div className="track-list-container">
                <TrackList/>
            </div>

        </div>
    )
}

export {LeftMenu};