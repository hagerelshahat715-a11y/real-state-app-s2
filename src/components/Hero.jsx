import React from 'react';

import herohome from '../assets/images/herohome.png';
import facebook from '../assets/icons/fb.svg';
import instagram from '../assets/icons/insta.svg';
import tiktok from '../assets/icons/t.svg';
import x from '../assets/icons/x.svg';

export default function Hero({ bg, title, desc, btn, btncontent, icons }) {
  return (
    <div
      className="relative h-[450px] md:h-screen w-full bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className="max-w-[600px] text-[32px] md:text-[48px] font-bold leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h1>

        <p className="mt-3 md:mt-5 max-w-[650px] text-[#CEC7C7] text-sm md:text-lg leading-relaxed">
          {desc}
        </p>

        {btn && (
          <button
            type="button"
            className="mt-5 md:mt-7 flex h-[42px] md:h-[47px] w-[220px] md:w-[258px] items-center justify-center rounded-[8px] bg-gradient-to-r from-[#8E1616] to-[#C34B4B] px-[26px] py-[8px] text-sm text-white transition duration-300 hover:opacity-90"
          >
            {btncontent || "Explore"}
          </button>
        )}
      </div>

      
      {icons && (
        <div className="hidden md:flex absolute bottom-10 left-0 z-20 px-9 flex-col gap-4">
          <img className="size-12 border-[3px] border-white rounded-full p-2" src={facebook} alt="facebook" />
          <img className="size-12 border-[3px] border-white rounded-full p-2" src={x} alt="x" />
          <img className="size-12 border-[3px] border-white rounded-full p-2" src={instagram} alt="instagram" />
          <img className="size-12 border-[3px] border-white rounded-full p-2" src={tiktok} alt="tiktok" />
        </div>
      )}
    </div>
  );
}