import { useState } from "react";
import InFoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp()
{   let [weatherInfo,setWeatherInfo]=useState({"Humidity" :76,
        "Temperature_Min":19.1,
        "Temperature_Max":20.99,
        "Description":"scattered clouds",
        "Temperature": 19.59,
        "Feels Like":19.59,
        "name":"Paris",})
    let updateInfo=(result)=>{
        setWeatherInfo(result)
    }
    return(
        <div>
        <SearchBox updateInfo={updateInfo}/>
        <InFoBox info={weatherInfo}/>
        </div>
    )
}