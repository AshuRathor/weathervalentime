import React from 'react'
import { useEffect, useContext, useState } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import WeatherCard from './WeatherCard'
import "./Styles/Home.css"
import LoadingBar from 'react-top-loading-bar'

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const Home = () => {
  const context = useContext(WeatherContext)
  const { city, lang, objectData, setObjectData, humidity, setHumidity, url, icon, setIcon, temp, setTemp, pressure, setPressure, windSpeed, setWindSpeed, sunrise, setSunrise, sunset, setSunset, minTemp, setMinTemp, maxTemp, setMaxTemp, description, setDescription, id, setId, setCurrentSite, progress, setProgress } = context;


  // const city = "delhi"
  // const lang = "en"
  // const [objectData, setObjectData] = useState([])

  const fetchOnClick = async () => {

    // const objectData = false
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=abcb614d368f5f95bf3c4076d0cbc6a7&lang=${lang}`
    setProgress(0)
    console.log(url)
    const data = await fetch(url)
    setProgress(20)
    console.log("fetched up ")
    const objData = await data.json()
    setProgress(40)
    await setTemp(objData.main.temp)
    await setIcon(objData.weather[0].icon)
    await setHumidity(objData.main.humidity)
    await setPressure(objData.main.pressure)
    await setWindSpeed(objData.wind.speed)
    setProgress(70)
    await setSunrise(new Date(objData.sys.sunrise * 1000))
    console.log(sunrise)
    // await setSunrise( new Date(objData.sys.sunrise*1000))
    await setSunset(new Date(objData.sys.sunset * 1000))
    await setObjectData(objData)
    // await setMinTemp(objData.main.temp_min)
    // await setMaxTemp(objData.main.temp_max)
    await setDescription(objData.weather[0].description)
    await setId(objData.weather[0].id)

    // console.log("objectData set just ")
    // console.log("if really  then", objectData)
    // console.log("temp jsut ", temp)
    setProgress(100)
  }

  useEffect(() => {
    setCurrentSite(1)
    fetchOnClick()

  }, [])

  return (
    <div style={{ width: "63%", backgroundColor: "#BDCDD6" }}>
      
      <h1 style={{ padding: "0% 9%" }}>
        {/* {city.toString().charAt(0).toUpperCase() + city.toString().slice(1)} */}
        {city.toString().toUpperCase()}
        {/* {city} */}
      </h1>
      <div style={{ width: "100%", margin: "1%", display: "flex", flexWrap: "wrap-reverse" }}>
        <div className="temp" style={{ fontWeight: "bold", padding: "4% 8%", height: "30%" }}>
          <span className='tempInsideBig' style={{ fontSize: "5em" }}>{Math.floor(temp)}</span><span className='tempInsideSmall' style={{ fontSize: "2em" }}>{(((temp - Math.floor(temp)).toFixed(2)).toString()).slice(1)}</span> <span className='tempInsideBig' style={{ fontSize: "4em" }}>°C</span>
          {/* <div className='rawData' style={{ fontSize: "0.7em", fontWeight: "normal", display: "flex"}}>
            <div style={{ padding: "3%" }}> min temp: {minTemp}°C </div>
            <div style={{ padding: "3%" }}> max temp: {maxTemp}°C </div>
          </div> */}
          <br />

        </div>
        <WeatherCard className="weatherCard" icon={icon} humidity={humidity} description={description} id={id} />

      </div>
      <div className="otherData" style={{ width: "50%", fontWeight: "600" }}>
        <div className="pressure insideData" style={{ padding: "5% 15%" }}>Pressure: {pressure}hPa</div>
        <div className="windSpeed insideData" style={{ padding: "5% 15%" }}>Wind Speed: {windSpeed}m/s</div>
        <div className="sunRise insideData" style={{ padding: "5% 15%" }}>Sunrise: {sunrise.getDate()}, {month[sunrise.getMonth()]}, {sunrise.getFullYear()}, {sunrise.getHours()}:{sunrise.getMinutes() < 10 ? ("0" + sunrise.getMinutes()) : sunrise.getMinutes()}:{sunrise.getSeconds()}</div>
        <div className="sunSet insideData" style={{ padding: "5% 15%" }}>Sunset: {sunset.getDate()}, {month[sunset.getMonth()]}, {sunset.getFullYear()}, {sunset.getHours()}:{sunset.getMinutes() < 10 ? ("0" + sunset.getMinutes()) : sunset.getMinutes()}:{sunset.getSeconds()}</div>
      </div>
    </div>
  )
}

export default Home