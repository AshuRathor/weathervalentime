import WeatherContext from "./WeatherContext";
import { useState } from "react";

const WeatherState = (props) => {
  const [city, setCity] = useState("assam");
  const [lang, setLang] = useState("en")
  const [currentSite, setCurrentSite] = useState(1)
  // const [objectData, setObjectData] = useState()
  const [objectData, setObjectData] = useState({})
  const [humidity, setHumidity] = useState("")
  const [searchText, setSearchText] = useState("")
  const [url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=abcb614d368f5f95bf3c4076d0cbc6a7&lang=${lang}`)
  // const [first, setfirst] = useState(second)
  const [icon, setIcon] = useState("")
  const [pressure, setPressure] = useState("fetching pressure...")
  const [windSpeed, setWindSpeed] = useState("fetching wind speed...")
  const [sunrise, setSunrise] = useState(new Date())
  const [sunset, setSunset] = useState(new Date())
  const [minTemp, setMinTemp] = useState("fetching min temp...")
  const [maxTemp, setMaxTemp] = useState("fetching max temp...")
  const [description, setDescription] = useState("Have a nice day :)")
  const [temp, setTemp] = useState("fetching...")
  const [id, setId] = useState("711")


  //for five days cast states

  const [tempArr, setTempArr] = useState([1, 2])
  const [d_text, setD_text] = useState([7, 8])
  const [dates, setDates] = useState(new Date())

  //top loading bar
  const [progress, setProgress] = useState(0)

  return (
    

    <WeatherContext.Provider value={{city, setCity, lang, setLang, objectData, setObjectData, humidity, setHumidity, searchText, setSearchText, url, setUrl, icon, setIcon, pressure, setPressure, windSpeed, setWindSpeed, sunrise, setSunrise, sunset, setSunset, minTemp, setMinTemp, maxTemp, setMaxTemp, description, setDescription, id, setId,temp, setTemp, currentSite, setCurrentSite, tempArr,setTempArr,d_text, setD_text, dates, setDates, progress, setProgress}}>
        {props.children};
    </WeatherContext.Provider>
  )
}

export default WeatherState