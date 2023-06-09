
import './App.css';
import Topbuttons from './component/Topbuttons';
import Inputs from './component/Inputs';
import Timendloc from './component/Timendloc';
import TempndDetails from './component/TempndDetails';
import Forecast from './component/Forecast';

import getWeatherdata from './services/weatherServices';
import { useState } from 'react';
import { useEffect } from 'react';
const bgimg='https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp'
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
       rounded-lg mb-3' src={bgimg}></img>
<div className=" absolute left-5  pt-4 right-5 top-5 bottom-15  mx-auto max-w-screen-md mt-4 py-5 px-32 bg-transparent shadow-xl shadow-gray-400 h-fit ${formatBackground()} ">
    
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
