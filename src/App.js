
import './App.css';
import Topbuttons from './component/Topbuttons';
import Inputs from './component/Inputs';
import Timendloc from './component/Timendloc';
import TempndDetails from './component/TempndDetails';
import Forecast from './component/Forecast';

import getWeatherdata from './services/weatherServices';
import { useState } from 'react';
import { useEffect } from 'react';
const bgimg='https://cdn.wallpaperhub.app/cloudcache/c/6/e/1/c/0/c6e1c0a6675b2b2b3f49ace94683d018a506bb11.jpg'
function App() {
  const [query, setQuery] = useState({q: "kochi"});
  const [units , setUnits] = useState("metric");
  const [weather, setWeather] = useState({});
useEffect (() => {
  const fetchweather=async()=>{
    await getWeatherdata({...query,units}).then((data) =>{
      console.log(data);
      setWeather(data);
    })
    
    
     }
     fetchweather();
},[query,units])
  return (
    <div classname="relative">
  <img  classname='w-full shadow-lg shadow-black object-cover
       rounded-lg' src={bgimg}></img>
<div className=" absolute left-5  pt-4 right-5 top-1 bottom-15  mx-auto max-w-screen-md mt-2 py-5 px-32 bg-transparent shadow-2xl shadow-gray-400 h-fit rounded-3xl ">
    
     <Topbuttons setQuery={setQuery} />
     <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
   {weather && (
    <div>
    <Timendloc weather={weather}  />
    <TempndDetails weather={weather}/>
    <Forecast title="hourly forecast" items={weather.hourly} />
    <Forecast title="daily forecast" items={weather.daily} />
    </div>
   )}
 
   

    </div>
    </div>
    
  );

}

export default App;
