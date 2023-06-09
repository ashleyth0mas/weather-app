import React from 'react';
import { iconUrlFromCode } from '../services/weatherServices';

const Forecast = ({ title, items }) => {
  return (
    <div>
      <div className='flex items-center mt-6'>
        <p className='text-white text-2xl font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2'></hr>
      <div className='text-white text-2xl flex flex-row items-center justify-between'>
        {items && Array.isArray(items) && items.map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>{item.title}</p>
            <img
              className='w-14 my-5'
              src={iconUrlFromCode(item.icon)}
              alt="item"
            />
            <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
