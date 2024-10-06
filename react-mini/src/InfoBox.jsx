import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InFoBox({info})
{  let Hot_url="https://media.istockphoto.com/id/1167696661/photo/race-track-and-green-woods-nature-landscape-at-sunset.jpg?s=612x612&w=0&k=20&c=aVNa7vQkWvx_i9xV4JweJRTIlWo2rPAt7O0J7nyuCq4="
    let Snow_url="https://media.istockphoto.com/id/607743344/photo/snow-in-new-york-city-fantastic-image.jpg?s=612x612&w=0&k=20&c=szAy0tvCU9E3rwWp18zV4oBU-h_6V_g-9VQKFwR7G7Y="
    let Rain_url="https://images.unsplash.com/photo-1674639703956-3be307cb2485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJhaW4lMjBjaXR5fGVufDB8fDB8fHww"
    return(
        <div className='InfoBox'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.Humidity > 80 ? Rain_url : info.Temperature >15 ? Hot_url : Snow_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.name}
         {info.Humidity > 80 ? <ThunderstormIcon/> : info.Temperature >15 ? <WbSunnyIcon/> :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
            <p>HUMIDITY : {info.Humidity}</p>
            <p>Temp Min. : {info.Temperature_Min}&deg;C</p>
            <p>Temp Max. :{info.Temperature_Max}&deg;C</p>
            <p>Temp : {info.Temperature}&deg;C</p>
            <p>The Weather is described as {info.Description} and feels like {info['Feels Like']}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}