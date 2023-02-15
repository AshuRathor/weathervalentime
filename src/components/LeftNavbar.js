import React from 'react'
import './Styles/LeftNavbar.css'
import { Link } from 'react-router-dom'
import WeatherContext from '../context/weather/WeatherContext'
import { useContext,useState } from 'react'


const LeftNavbar = () => {
  const context = useContext(WeatherContext)
  const {currentSite, setCurrentSite} = context
  const myStyle = { backgroundColor:"#475d66", color:"white",borderLeft: "4px solid rgb(242, 186, 43)"}
  const [navStyle, setNavStyle] = useState({display:"none"})
  const [ulStyle, setUlStyle] = useState({})
  const [xStyle, setXStyle] = useState({position:"fixed", left:"13%", backgroundColor:"transparent", border:"none", cursor:"pointer", display:"none"})
  const [barStyle, setBarStyle] = useState({position:"fixed", left:"13%", backgroundColor:"transparent", border:"none", cursor:"pointer", left:"0", display:"block"})
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const outTranslate = ()=>{

    if(windowWidth<933 && windowWidth>312){
      return 0
    }
    else{
      return -42
    }
  }
  const xOnClick = ()=>{
    console.log(windowWidth)
    console.log("x clicked")
    setNavStyle( {position : "sticky", top:"0", left:"0", height:"38", width:"15%", position: "-webkit-sticky", padding: "0% 0% 0% 0%", backgroundColor: "#93BFCF",transform:"translateX(-400px)"})
    setUlStyle({width:"100%"})
    setXStyle({position:"fixed", left:"13%", backgroundColor:"transparent", border:"none", cursor:"pointer", display:"none"})
    setBarStyle({position:"fixed", left:"13%", backgroundColor:"transparent", border:"none", cursor:"pointer", left:"0", display:"block"})
    setTimeout(() => {
      setNavStyle({display:"none"})
    }, 310);
  }

  const barOnClick = async()=>{
    console.log("bar clicked")
    setNavStyle( {position : "sticky", top:"0", left:"0", height:"38", width:"15%", position: "-webkit-sticky", padding: "0% 0% 0% 0%", backgroundColor: "#93BFCF",transform:"translateX(-400px)"})
    setTimeout(() => {
      setNavStyle( {position : "sticky", top:"0", left:"0", height:"38", width:"15%", position: "-webkit-sticky", padding: "0% 0% 0% 0%", backgroundColor: "#93BFCF", transform:`translateX(${outTranslate()}px)`})
      setUlStyle({width:"100%"})
      setXStyle({position:"fixed", left:"13%", backgroundColor:"transparent", border:"none", cursor:"pointer", display:"block"})
      setBarStyle({position:"fixed", left:"13%", backgroundColor:"transparent", border:"none", cursor:"pointer", left:"0", display:"none"})
      
    }, 5);
  }

  return (<>
  
    <div className='leftNavbar' style={navStyle}>
      
        <ul style={ulStyle}>
            <li className="l_bar" style={currentSite===1?myStyle:{}}><Link style={currentSite===1?{color:"white"}:{color:"#475d66"}} to ="/">Current Weather Data</Link></li>
            
            <li className="l_bar" style={currentSite===2?myStyle:{}}><Link style={currentSite===2?{color:"white"}:{color:"#475d66"}} to="/previousforecast">5 Days Weather Data</Link></li>
            <li className="l_bar" style={currentSite===3?myStyle:{}}><Link style={currentSite===3?{color:"white"}:{color:"#475d66"}} to = "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=temperature&lat=30&lon=-20&zoom=3">Weather Map</Link> </li>
        </ul>
    </div>
        <button onClick={barOnClick} style={barStyle} className="menu"><i class="fa-solid fa-bars"></i></button>
        <button onClick={xOnClick} style={xStyle} className="xmark"><i class="fa-solid fa-xmark"></i></button>
  </>
  )
}

export default LeftNavbar