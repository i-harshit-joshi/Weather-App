import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox ({info}){
    const IMG_URL = "https://plus.unsplash.com/premium_vector-1689096745362-5b49969dcdff?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    const HOT_URL = "https://plus.unsplash.com/premium_vector-1708487039612-85d87b402734?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdHxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://plus.unsplash.com/premium_vector-1689096745362-5b49969dcdff?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://plus.unsplash.com/premium_vector-1722028326151-13af9b571f70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: "100%", width: "350px", border: "2px solid black" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <div style={{ display: "flex", alignItems: "center", marginLeft: "7.5rem" }}>{info.city} &nbsp;{info.humidity > 80 ? <UmbrellaIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}</div>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.primary' }} component={"span"}>
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Min temperature: {info.tempMin}&deg;C</p>
          <p>Max Temperature: {info.tempMax}&deg;C</p>
          <p>Humidity: {info.humidity}%</p>
          <p>Feels Like: {info.feelsLike}&deg;C</p>
          <p>Weather: {info.weather}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}
