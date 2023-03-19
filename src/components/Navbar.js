import React from 'react'
import { useContext } from 'react';
import WeatherContext from '../context/weather/WeatherContext'
import LoadingBar from 'react-top-loading-bar'
import './Styles/Navbar.css'

const date = new Date();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(date.getMonth())

const Navbar = (props) => {

  const context = useContext(WeatherContext)
  const { city, lang, objectData, setObjectData, humidity, setHumidity, url, icon, setIcon, temp, setTemp, pressure, setPressure, windSpeed, setWindSpeed, sunrise, setSunrise, sunset, setSunset, minTemp, setMinTemp, maxTemp, setMaxTemp, description, setDescription, id, setId, setCity, setUrl, searchText, setSearchText, tempArr, setTempArr, d_text, setD_text, dates, setDates, setCtiy, progress, setProgress, currentSite, setCurrentSite } = context;
  const handleOnChangeSearch = async (e) => {
    console.log(searchText)
    setSearchText(e.target.value)
  }
//   const langOnChange=()=>{
//     setl
//   }
  const handleOnClickSearch = async (e) => {
    setCity(searchText)
    if (currentSite === 1) {
      setProgress(0)

      e.preventDefault();
      console.log(searchText)
      await setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=abcb614d368f5f95bf3c4076d0cbc6a7&lang=${lang}`)
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=abcb614d368f5f95bf3c4076d0cbc6a7&lang=${lang}`)
      setProgress(20)
      console.log(data)
      const objDataNav = await data.json()
      setProgress(40)
      console.log(objDataNav)
      await setIcon(objDataNav.weather[0].icon)
      await setTemp(objDataNav.main.temp)
      await setHumidity(objDataNav.main.humidity)
      await setPressure(objDataNav.main.pressure)
      await setWindSpeed(objDataNav.wind.speed)
      await setSunrise(new Date(objDataNav.sys.sunrise * 1000))
      setPressure(80)
      console.log(sunrise)
      // await setSunrise( new Date(objDataNav.sys.sunrise*1000))
      await setSunset(new Date(objDataNav.sys.sunset * 1000))
      await setObjectData(objDataNav)
      await setMinTemp(objDataNav.main.temp_min)
      await setMaxTemp(objDataNav.main.temp_max)
      await setDescription(objDataNav.weather[0].description)
      await setId(objDataNav.weather[0].id)
      setProgress(100)
    }


    //5days forecast
    else if (currentSite === 2) {
      setProgress(0)
      e.preventDefault()

      const dataCast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&units=metric&appid=abcb614d368f5f95bf3c4076d0cbc6a7&lang=${lang}`)
      // console.log("data fetched")
      const tempData = await dataCast.json()
      setProgress(20)
      setTempArr(tempData.list.map((i) => i.main.temp))
      setD_text(tempData.list.map((i) => new Date(i.dt * 1000).getUTCHours()))
      setProgress(60)
      setDates(tempData.list.map((i) => new Date(i.dt * 1000).toDateString()))
      setProgress(100)
    }

  }
  return (<>

    <LoadingBar
      color='#f11946'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    <div className='navbar' style={{ backgroundColor: "#BDCDD6", display: "flex", flexWrap: "wrap" }}>
      <div className="time">
        {date.getDate()}, {month[date.getMonth() - 1]}, {date.getFullYear()}
      </div>
      <div className="searchBar"><form className='form' action="" style={{ width: "309px" }}>
        <input className='input' value={searchText} onChange={handleOnChangeSearch} placeholder='search...' style={{ backgroundColor: "#BDCDD6", border: "3px solid #475d66", borderRadius: "18px" }} type="text" />
        <button type='submit' onClick={handleOnClickSearch} style={{ cursor: "pointer", backgroundColor: "#93BFCF", border: "none", color: "#475d66", margin: "3%" }}><i class="fa-solid fa-location-dot"></i></button>
      </form></div>
      <div className="lang">
        <label htmlFor="cars">Language: </label>
        <select name="cars" id="cars">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="">Japanese</option>
          <option value="">Russian</option>
        </select>
      </div>
    </div>
  </>
  )
}

export default Navbar
