import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./WeatherApp.css";

export default function WeatherApp() {
  let [WeatherInfo, setWeatherInfo] = useState("");

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <Card
        sx={{
          width: "90%",
          maxWidth: "600px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          backgroundColor: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{ fontWeight: "600", marginBottom: "20px" }}
          >
            Weather App
          </Typography>
          <SearchBox updateInfo={updateInfo} />
          <InfoBox info={WeatherInfo} />
        </CardContent>
      </Card>
    </div>
  );
}
