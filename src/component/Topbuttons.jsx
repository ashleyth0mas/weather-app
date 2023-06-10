import React from 'react'

function Topbuttons({setQuery}) {
    const cities=[
{
id:1,
title:'London'
},
{
    id:1,
    title:'Spain'
    },
    {
        id:1,
        title:'Italy'
        },
        {
            id:1,
            title:'France'
            },
            {
                id:1,
                title:'Paris'
                },
    ]

    
  return (
    <div className=' flex justify-between items-center pt-4'>
    {cities.map((city)=> 
    (
        <button key= {city.id} className='font-medium text-lg text-white'   onClick={()=>setQuery({q:city.title})}>
             {city.title}</button>
       
    ))} 
        </div>
  )
}

export default Topbuttons
