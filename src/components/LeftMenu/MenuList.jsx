import React from "react";
import {BsFillMouseFill,BsJournalAlbum} from "react-icons/bs"
import {FaBroadcastTower,FaMicrophoneAlt,FaPodcast} from "react-icons/fa";
import {BiPulse} from "react-icons/bi";
import {WiCloud} from "react-icons/wi";

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
    {
        id: 3,
        icon: <WiCloud/>,
        name: "Recommendations"
    }
];

export {MenuList}