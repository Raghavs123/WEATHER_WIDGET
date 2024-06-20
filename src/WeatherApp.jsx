// WeatherApp Component will add both SearchBox and InfoBox Components

import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import { useState } from "react";

export default function WeatherApp () {
    const [ weatherInfo, setWeatherInfo ] = useState({
        city: "Indore", 
        feels_like: 22.82,
        humidity: 94,
        temp: 22.1,
        tempMax: 22.1,
        tempMin: 22.1,
        weather: "mist"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    } 

    return(
        <div style={{ textAlign: "center" }}>
            <h3>Weather App</h3>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}