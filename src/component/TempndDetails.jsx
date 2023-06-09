import React from 'react'
import { UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset

 } from '@iconscout/react-unicons'
import { formatLocaltime } from '../services/weatherServices'

const TempndDetails = ({weather:{description,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) => {

  return (
    <div className='w-full'>
<div className='flex justify-center py-6 text-3xl text-black'>
<p>{description}</p> 
</div>
<div className='flex flex-row  justify-between items-center text-white py-3'>
<img  className='w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Eo_circle_deep-orange_blank.svg/2048px-Eo_circle_deep-orange_blank.svg.png"
 >

 </img>
 <p className='flex flex-col font-semibold space-y-2 text-5xl'>{`${temp?.toFixed()}°`}</p>
 <div className='flex flex-col'>
<div className='flex font-light text-sm items-center justify-center  py-1'>
<UilTemperature
size={18}
className="mr-1"
/>
Real felt:
<p className='font-medium ml-1'>{`${feels_like?.toFixed()}°`}</p>
</div>
<div className='flex font-light text-sm items-center justify-center py-1'>
<UilTear
size={18}
className="mr-1"
/>
Humidity:
<p className='font-medium ml-1'>{`${humidity?.toFixed()}°`}</p>
</div>
<div className='flex font-light text-sm items-center justify-center py-1'>
<UilWind
size={18}
className="mr-1"
/>
Wind:
<p className='font-medium ml-1'>{`${speed?.toFixed()}km/h`}</p>
</div>
 </div>
</div >

<div className='flex flex-row justify-center items-center font-bold text-white text-sm py-3 space-x-2'>
<UilSun/>
<p className='font-light'>Rise:<span className='font-medium ml-1'>{formatLocaltime(sunrise,timezone,"hh:mm a")}</span></p>
<p className='font-light'>|</p>
<UilSun/>
<p className='font-light'>Set:<span className='font-medium ml-1'>{formatLocaltime(sunset,timezone,"hh:mm a")} </span></p>
<p className='font-light'>|</p>


<UilSun/>
<p className='font-light'>High:  <span className='font-medium ml-1'>{`${temp_max?.toFixed()}°`}</span></p>
<p className='font-light'>|</p>



<UilSun/>
<p className='font-light'>Low:  <span className='font-medium ml-1'>{`${temp_min?.toFixed()}°`}</span></p>


</div>
    </div>
    
  )
}

export default TempndDetails
