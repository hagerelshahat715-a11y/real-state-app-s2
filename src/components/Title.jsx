import React from 'react';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';

export default function Title({ title, cn, showCards = true }) {
return (
<>
<div className={`flex flex-col justify-center items-center gap-1 ${cn}`}> <h2 className="text-[32px] font-semibold font-['Playfair_Display']">
{title} </h2>


    <div className="bg-[#C34B4B] w-[164px] h-[6px] rounded-full"></div>
  </div>

  {showCards && (
    <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">

      <div className="bg-white border border-[#CEC7C7] rounded-xl w-[325px] h-[143px] flex flex-col justify-center items-center gap-1 shadow-sm">
        <img src={card1} alt="Properties" className="w-[37px] h-[37px] object-contain" />
        <h3 className="text-2xl font-bold text-gray-900">48</h3>
        <p className="text-xs text-gray-500">Properties Managed</p>
      </div>

      <div className="bg-white border border-[#CEC7C7] rounded-xl w-[325px] h-[143px] flex flex-col justify-center items-center gap-1 shadow-sm">
        <img src={card2} alt="Investments" className="w-[37px] h-[37px] object-contain" />
        <h3 className="text-2xl font-bold text-gray-900">90M</h3>
        <p className="text-xs text-gray-500">Total Managed Investments</p>
      </div>

      <div className="bg-white border border-[#CEC7C7] rounded-xl w-[325px] h-[143px] flex flex-col justify-center items-center gap-1 shadow-sm">
        <img src={card3} alt="Clients" className="w-[37px] h-[37px] object-contain" />
        <h3 className="text-2xl font-bold text-gray-900">500</h3>
        <p className="text-xs text-gray-500">Happy Clients</p>
      </div>

      <div className="bg-white border border-[#CEC7C7] rounded-xl w-[325px] h-[143px] flex flex-col justify-center items-center gap-1 shadow-sm">
        <img src={card4} alt="Client Satisfaction" className="w-[37px] h-[37px] object-contain" />
        <h3 className="text-2xl font-bold text-gray-900">99%</h3>
        <p className="text-xs text-gray-500">Client Satisfaction</p>
      </div>

    </div>
  )}
</>


);
}
