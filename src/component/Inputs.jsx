import React, { useState } from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'
const Inputs = ({setQuery,units,setUnits}) => {
   const [city,setCity]=useState("")
   const searchClick=()=>{
    if(city !="")
      setQuery({q:city})
                          
   }
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row items-center w-3/4 space-x-4'>
        <input type='text' 
        value={city}
        onChange={(e)=> setCity(e.currentTarget.value)}
        placeholder='Search for city....'
         className='w-full text-lg font-light focus:outline-none p-2 shadow-xl capitalize'></input>
         <UilSearch
         size={25}
         className="text-white cursor-pointer transition ease-out hover:scale-125"
         onClick={searchClick}/>
         <UilLocationPoint
         size={25}
         className="text-white cursor-pointer transition ease-out hover:scale-125"
         />
        
        </div>
        <div className='w-1/4 flex  items-center justify-center '>
            <button className='text-white text-xl font-light transition ease-out hover:scale-125'>°C </button>
            <p className='text-white text-xl mx-1'>|</p>
            <button className='text-white text-xl font-light  transition ease-out hover:scale-125'>°F </button>

         </div>
       
    </div>
  )
}

export default Inputs