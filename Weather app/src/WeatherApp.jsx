import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp (){
    let [WeatherInfo, setWeatherInfo] = useState("")
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}