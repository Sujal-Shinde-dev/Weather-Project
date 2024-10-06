import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({updateInfo})
{   let URL="https://api.openweathermap.org/data/2.5/weather"
    let [err,setErr]=useState(false)
    let key="f1a6deb933c709184d3ebea5a0740702"
    let weatherInfo=async()=>{
        try{
        let response= await fetch(`${URL}?q=${city }&appid=${key}&units=metric`)
        let jsonResult=await response.json()
        let result={
            "Humidity" : jsonResult.main.humidity,
            "Temperature_Min":jsonResult.main.temp_min,
            "Temperature_Max":jsonResult.main.temp_max,
            "Description":jsonResult.weather[0].description,
            "Temperature":jsonResult.main.temp,
            "Feels Like":jsonResult.main.feels_like,
            "name":jsonResult.name,
        }
        return result
    }
    catch(err)
    {
        throw err;
    }
    }
    
    
    let [city,setCity]=useState("")
    let handleChange=(event)=>{
        setCity(event.target.value)
    }

    
    let handleSubmit=async(event)=>{
        try{
        event.preventDefault()
        setCity("")
       let info=await weatherInfo()
       updateInfo(info)
        }
       catch{
        setErr(true)
       }
}
    return(
        <div className='SearchBox'>
        <h1>Search Box</h1>
        {err && <p style={{color : "red"}}>No such Place Exists !!</p>}
        <form onSubmit={handleSubmit} >
        <TextField id="city" label="City" variant="outlined"  required value={city} onChange={handleChange}/>
        <br /><br />
        <Button variant="contained" startIcon={<SearchIcon/>} type='submit'>Submit</Button>
        </form>
        </div>
    )
}