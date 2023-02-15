import React from 'react'
import { useEffect } from 'react'
import "./Styles/WeatherCard.css"

const date = new Date();
const day = ["Mon", "Tue", "wed", "Thurs", "Fri", "Sat", "Sun"]

const WeatherCard = (props) => {
    const myStyle = ()=>{
      if((props.id>=200 && props.id<300) || props.id == 762){
        return{
          width: "13%", padding:"2% 6%", borderRadius:"15px",
          backgroundColor:"#717a7d",
          color:"#f2ffec",
          boxShadow:"2px 23px 142px 30px #717a7d",
          margin:"auto"
        }
      }
      else if((props.id>=300 && props.id<400)){
        return{
          width: "13%", padding:"2% 6%", borderRadius:"15px",
          backgroundColor:"#ff9624",
          color:"#ffe4bd",
          boxShadow:"2px 23px 142px 30px #ff9624",
          margin:"auto"
        }
      }

      else if((props.id>=600 && props.id<700)){
        return{
          width: "13%", padding:"2% 6%", borderRadius:"15px",
          backgroundColor:"#fefcff",
          color:"#2e6262",
          boxShadow:"2px 23px 142px 30px #fefcff",
          margin:"auto"
        }
      }

      else if((props.id==731 || props.id== 751 || props.id == 761)){
        return{
          width: "13%", padding:"2% 6%", borderRadius:"15px",
          backgroundColor:"#bf4e24",
          color:"#f2e4d8",
          boxShadow:"2px 23px 142px 30px #bf4e24",
          margin:"auto"
        }
      }

      else if((props.id== 771)){
        return{
          width: "13%", padding:"2% 6%", borderRadius:"15px",
          backgroundColor:"#33bf36",
          color:"#acdfa1",
          boxShadow:"2px 23px 142px 30px #33bf36",
          margin:"auto"
        }
      }

      else if((props.id== 800)){
        return{
          width: "13%", padding:"2% 6%", borderRadius:"15px",
          backgroundColor:"#4a7bff",
          color:"#feff50",
          boxShadow:"2px 23px 142px 30px 4a7bff",
          margin:"auto"
        }
      }

      else{
        return {width: "13%", padding:"2% 6%", backgroundColor:"#475d66", color:"#BDCDD6", borderRadius:"15px", boxShadow:"2px 23px 142px 30px rgb(71 93 102)", margin:"auto"}

      }
        
    }
    
  return (
    <div className='card' style={myStyle()} >
      <div className='desc' style={{textAlign: "center", padding:"3% 0%", fontWeight:"bold" , padding:"12% 0%"}}>{props.description}</div>
        <div style={{textAlign: "center", backgroundColor:"#BDCDD6", borderRadius:"30px"}} className="img"> <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt="" /></div>
        <div style={{textAlign: "center", margin:"3%"}} className='day'>{day[date.getDay()-1]}</div>
        <div style={{textAlign: "center", margin:"3%"}} className='humidity'><i class="fa-solid fa-droplet"></i> {props.humidity}%</div>
        
    </div>
  )
}

export default WeatherCard