import React, { useState } from "react";
import { MenuListItems } from "./MenuListItems";
import { Link } from "react-router-dom";

function MenuItems({ title, menuObject }) {
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (name) => {
        // Set the clicked item as active
        setActiveItem(name);
    };

    return (
        <div className="menu-container">
            <p className="title">{title}</p>
            <ul>
                {menuObject &&
                    menuObject.map((menu) => {
                        const isActive = activeItem === menu.name;
                        return (
                            <li className={isActive ? "active" : ""} onClick={() => handleClick(menu.name)} key={menu.name}>
                                <Link to = {menu.name === "PlayList"? "/home-page/playlist": menu.name === "WeatherPlaylist" ?  "/home-page/weather-playlist" : "/home-page"}>
                                    <i>{menu.icon}</i>
                                    <span>{menu.name}</span>
                                </Link>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

export { MenuItems };
