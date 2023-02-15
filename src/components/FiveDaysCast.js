import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useState, useEffect, useContext } from 'react';
import WeatherContext from '../context/weather/WeatherContext';
import "./Styles/FiveDaysCast.css"

const FiveDaysCast = () => {

    const context = useContext(WeatherContext)
    const { setCurrentSite, tempArr, setTempArr, d_text, setD_text, dates, setDates, city, setCtiy, lang, progress, setProgress } = context
    const [fiveDaysUrl, setFiveDaysUrl] = useState(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=abcb614d368f5f95bf3c4076d0cbc6a7&lang=${lang}`)

    const [objData, setObjData] = useState()

    const fetchData = async () => {
        setProgress(0)
        const data = await fetch(fiveDaysUrl)
        console.log("data fetched")
        const tempData = await data.json()
        setProgress(40)
        setTempArr(tempData.list.map((i) => i.main.temp))
        setD_text(tempData.list.map((i) => new Date(i.dt * 1000).getUTCHours()))
        setDates(tempData.list.map((i) => new Date(i.dt * 1000).toDateString()))
        setProgress(80)
        await setObjData(tempData)
        setProgress(100)
        console.log("obj set")



    }

    useEffect(() => {
        setCurrentSite(2)
        fetchData()
    }, [])


    return (
        <div style={{ width: "50%" }}>
            <h1 style={{ padding: "0% 9%" }}>
                {/* {city.toString().charAt(0).toUpperCase() + city.toString().slice(1)} */}
                {city.toString().toUpperCase()}

                {/* {city} */}
            </h1>
            <h2 style={{ margin: "0px 60px" }}>Next 5 Days forecast</h2>
            <div style={{ paddingLeft: "10%" }} className="dates">
                <h2>{dates[0]}</h2>
            </div>
            <Line className='line' style={{ margin: "80px"}} data={{
                labels: d_text.slice(0, 7),
                datasets: [{ label: "Temperature in degree celcius", data: tempArr.slice(0, 7) }],
                
            }}
            
            />
            <div style={{ paddingLeft: "10%" }} className="dates">
                <h2>{dates[7]}</h2>
            </div>

            <Line style={{ margin: "80px" }} data={{
                labels: d_text.slice(7, 15),
                datasets: [{ label: "Temperature in degree celcius", data: tempArr.slice(7, 15) }]
                
            }} />
            <div style={{ paddingLeft: "10%" }} className="dates">
                <h2>{dates[15]}</h2>
            </div>

            <Line style={{ margin: "80px" }} data={{
                labels: d_text.slice(15, 23),
                datasets: [{ label: "Temperature in degree celcius", data: tempArr.slice(15, 23) }]
            }} />
            <div style={{ paddingLeft: "10%" }} className="dates">
                <h2>{dates[23]}</h2>
            </div>
            <Line style={{ margin: "80px" }} data={{
                labels: d_text.slice(23, 31),
                datasets: [{ label: "Temperature in degree celcius", data: tempArr.slice(23, 31) }]
            }} />
            <div style={{ paddingLeft: "10%" }} className="dates">
                <h2>{dates[31]}</h2>
            </div>
            <Line style={{ margin: "80px" }} data={{
                labels: d_text.slice(31, 39),
                datasets: [{ label: "Temperature in degree celcius", data: tempArr.slice(31, 39) }]
            }} />

        </div>

    )
}

export default FiveDaysCast