import React, {useContext, useEffect, useState} from "react";
import "../../styles/LeftMenu.css";
import {WiCloud} from "react-icons/wi";
import {BiSearchAlt} from "react-icons/bi";
import {MenuList} from "./MenuList";
import {MenuItems} from "./MenuItems";
import {TrackList} from "./TrackList";
import {SongNameContext} from "../../songContext";
import axios from "axios";

function LeftMenu() {
    const {setSongName, weatherData, setWeatherData, city, setCity} = useContext(SongNameContext);

    const [cityName, setCityName] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setSongName(search);
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [search]);

    useEffect(() => {
        fetchWeatherData()
    }, [city])

    const fetchWeatherData = async () => {
        try {
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e6bed74c04b5e007c5319a037a08e8e&units=metric`);
            console.log(data);
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setWeatherData({});
        }
    };

    const onSearch = () => {
        setCity(cityName);
        fetchWeatherData();
    };

    return (
        <div className="left-menu">
            <div className="logo-container">
                <i>{WiCloud()}</i>
                <h3 className="left-menu-main-title">Weather Tunes</h3>
            </div>
            <div className="search-box">
                <i className="search-icon">{BiSearchAlt()}</i>
                <input type="text" placeholder="Search Song" onChange={(e) => setSearch(e.target.value)}/>
            </div>

            <div className="weather-card">
                <div className="weather-box">
                    <div className="weather-search-box">
                        <i className="weather-icon">{WiCloud()}</i>
                        <input type={"text"} placeholder="Enter City" onChange={(e) => setCityName(e.target.value)}/>
                    </div>
                    <button onClick={onSearch} className="search-button">Search</button>
                </div>
                {typeof weatherData.main !== "undefined" ? (
                    <div className={"weather-information"}>
                        <p>{weatherData.name}</p>

                        {/* Temperature Celsius  */}
                        <p>{weatherData.main.temp}°C</p>

                        {/* Condition (Sunny ) */}
                        <p>{weatherData.weather[0].main}</p>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div className={"menu-items-container"}>
                <MenuItems title={"Menu"} menuObject={MenuList}/>
            </div>
            <div className="track-list-container">
                <TrackList/>
            </div>

        </div>
    );
}

export {LeftMenu};
