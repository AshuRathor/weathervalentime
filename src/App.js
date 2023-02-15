import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Home from "./components/Home";
import LeftNavbar from "./components/LeftNavbar";
import Navbar from "./components/Navbar";
import FiveDaysCast from "./components/FiveDaysCast";
import WeatherState from "./context/weather/WeatherState";
import "./App.css"

function App() {
  return (
    <>
      <WeatherState>
        <BrowserRouter>
          <Navbar />
          <div className="afterleft" style = {{display:"flex", justifyContent:"center"}}>
            <LeftNavbar style={{width:"127%"}} />
            <Routes>
              {/* <Route exact path="/" element={<Home showAlert={showAlert} />} /> */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/previousforecast" element={<FiveDaysCast/>} />
            </Routes>

          </div>
        </BrowserRouter>

      </WeatherState>
    </>
  );
}

export default App;
