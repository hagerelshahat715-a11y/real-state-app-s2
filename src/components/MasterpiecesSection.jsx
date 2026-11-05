import React, { useEffect, useState } from 'react';
import slick from "react-slick";
const Slider = slick.default || slick;

import Title from './Title';
import api from '../helpers/api';

export default function MasterpiecesSection() {
  const [masterpieces, setMasterpieces] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMasterpieces = async () => {
    try {
      const response = await api.get("/unit");
      setMasterpieces(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error fetching masterpieces", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMasterpieces();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,       
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,   
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading Masterpieces...</div>;
  }

  return (
    <section className="w-full py-12 px-4 md:px-12 overflow-hidden">
      <Title title="Hand-Selected Masterpieces" showCards={false} />

      <div className="max-w-[1400px] mx-auto mt-10 slider-container">
        {masterpieces.length > 0 ? (
          <Slider {...settings}>
            {masterpieces.map((item, index) => (
              <div key={item.id || index} className="px-2">
                <div className="flex flex-col justify-between items-start bg-white p-3 rounded-[16px] border border-[#EAEAEA] shadow-sm">
                  <img 
                    src={item.images && item.images[0] ? item.images[0] : item.image} 
                    alt={item.title || item.name_en || "Masterpiece"} 
                    className="w-full h-[260px] md:h-[298px] object-cover rounded-[12px]" 
                  />
                  <h3 className="text-[16px] md:text-[18px] font-bold text-[#1E1E1E] mt-3 font-serif truncate w-full">
                    {`0${index + 1}. `} {item.title || item.title_en || item.name || "Luxury Property"}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500 py-10">No masterpieces available</p>
        )}
      </div>
    </section>
  );
}