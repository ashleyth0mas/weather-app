

import { DateTime } from "luxon";

const APIKEY ="ur api here";
const BASEURL ="https://api.openweathermap.org/data/2.5";



const getData = (infoType, searchParams) => {
  const url = new URL(BASEURL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: APIKEY });
console.log(url)
  return fetch(url).then((res) => res.json());

};
const formatCurrentweather = (data) => { 
  const { 
    coord:{lat,lon},
    main:{temp,feels_like,temp_min,temp_max,humidity} ,
  name,

dt,
sys:{country,sunrise,sunset} ,
weather,
wind:{speed} } = data;
const{main:description,icon} = weather[0];
return{lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,description,icon,speed}
}
const formatForecastweather = (data) => {
  let { timezone, daily, hourly } = data;
  
  if (daily && Array.isArray(daily) && daily.length >= 6) {
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: formatLocaltime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon
      };
    });
  }

  if (hourly && Array.isArray(hourly) && hourly.length >= 6) {
    hourly = hourly.slice(1, 6).map((d) => {
      return {
        title: formatLocaltime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon
      };
    });
  }

  return { timezone, daily, hourly };
};

const getWeatherdata = async (searchParams) => {
  const currentWeather = await getData("weather", searchParams).then(formatCurrentweather);
  const{lat,lon} = currentWeather;
  const forecastWeather=await getData("onecall",{
    lat,lon,exclude:'current,minutely,alerts',units:searchParams.units }).then(formatForecastweather);
  return {...currentWeather, ...forecastWeather }; 
}
const formatLocaltime = (secs, zone, format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => {
  // Check if secs is a valid number
  if (typeof secs !== "number") {
    console.error("Invalid seconds value:", secs);
    return ""; // or handle the error in a different way
  }

  return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};

 const iconUrlFromCode = (code) =>
 `http://openweathermap.org/img/wn/${code}@2x.png`;
export default getWeatherdata;
export { formatLocaltime, iconUrlFromCode };
