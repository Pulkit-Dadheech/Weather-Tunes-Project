import React from "react";
import {BsFillMouseFill,BsJournalAlbum} from "react-icons/bs"
import {FaBroadcastTower,FaMicrophoneAlt,FaPodcast} from "react-icons/fa";
import {BiPulse} from "react-icons/bi";

const MenuList=[
    {
        id: 1,
        icon: <BsFillMouseFill/>,
        name: "Home",
    },
    {
        id: 2,
        icon: <BiPulse/>,
        name: "PlayList",
    },
];

export {MenuList}