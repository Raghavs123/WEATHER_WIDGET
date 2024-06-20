import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react"; 
import InfoBox from "./InfoBox";

export default function SearchBox({ updateInfo }) {
    let [ city, setCity ] = useState("");
    let [ error, setError ] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "3bf2508dca73e7cc89bb13476074fadd";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
    
            let result = {
                city: city,
                feels_like: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                weather: jsonResponse.weather[0].description
            };
    
            console.log(result);
            return result;
        } catch (err) {
            // setError("No such place in our API");
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo(); 
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" value={city} variant="outlined" onChange={handleChange} required /> <br/><br/>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}