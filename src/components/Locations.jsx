import React from 'react';
import Title from './Title';
import locationsImg from '../../src/assets/images/Locations.png';

export default function Locations() {
  return (
    <section className="w-full my-12">
      
      <div className="px-6 md:px-12">
        <Title title={"Strategic Locations"} showCards={false} />
      </div>

      
      <div className='w-full mt-8'>
        <img 
          src={locationsImg} 
          alt="Strategic Locations" 
          className='w-full h-auto object-cover' 
        />
      </div>
    </section>
  );
}