import React, { useState } from "react";
import { Link } from "react-router-dom";

function MenuListItems({ menu, activeItem, setActiveItem }) {
    const handleClick = () => {
        // Set the clicked item as active
        setActiveItem(menu.name);
    };

    const isActive = activeItem === menu.name;

    return (
        <li className={isActive ? "active" : ""} onClick={handleClick} key={menu.name}>
            <Link to="/">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
            </Link>
        </li>
    );
}

export { MenuListItems };
