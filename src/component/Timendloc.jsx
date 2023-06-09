import React from 'react'
import { formatLocaltime } from '../services/weatherServices'

function Timendloc({weather:{dt,timezone,name,country}}) {
  return (
    <div className='pt-1'>
        <div className='flex justify-center my-6'>
         <p className='text-white text-2xl  font-light'> {formatLocaltime(dt,timezone)} </p>
        </div>
        <div className='flex justify-center  my-3'>
        <p className='text-white text-4xl font-medium'>{`${name},${country}`}</p>
        </div>

    </div>
  )
}

export default Timendloc