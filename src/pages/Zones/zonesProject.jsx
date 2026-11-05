import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../helpers/api';

export default function ZonesProject() {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const getZones = async () => {
      try {
        const response = await api.get('/zone');
        setZones(response.data);
      } catch (error) {
        console.error('Error fetching zones:', error);
      } finally {
        setLoading(false);
      }
    };

    getZones();
  }, []);

  const viewDetails = (id) => {
    navigate(`/zones-details/${id}`);
  };

  if (loading) {
    return <div className="text-center py-20 text-xl font-semibold text-gray-600">Loading...</div>;
  }

  const mainBannerImage = zones.length > 0 && zones[0].images?.[0] 
    ? zones[0].images[0] 
    : "";

  return (
    <div className="container mx-auto px-4 py-10 max-w-[1366px]">
      
      <div className="flex flex-col items-center justify-center mb-10"> 
        <h2 className="text-[32px] font-semibold font-['Playfair_Display'] text-[#1D1616] tracking-wide">
          Zone Projects    
        </h2> 
        <div className="w-[120px] h-[4px] bg-[#8E1616] rounded-full mt-2"></div>
      </div>

      <div className="w-full h-[350px] md:h-[525px] rounded-[24px] overflow-hidden shadow-md mb-12 border border-gray-200">
        <img 
          src={mainBannerImage} 
          alt="Zone Projects Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {zones.map((zone) => (
          <div 
            key={zone.id} 
            className="bg-white border border-[#EAEAEA] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col justify-between"
          >
            
            
            <div 
              onClick={() => viewDetails(zone.id)}
              className="w-full h-[240px] rounded-[12px] overflow-hidden mb-4 bg-gray-100 cursor-pointer"
            >
              <img 
                src={
                  Array.isArray(zone.images) && zone.images.length > 0 ? zone.images[0] : 
                  (typeof zone.images === 'string' ? zone.images : 
                  zone.image || zone.img )
                } 
                alt={zone.title || zone.name_en} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                <span>{zone.units || 0} Units</span>
                <span>•</span>
                <span>{zone.gyms || 0} Gyms</span>
                <span>•</span>
                <span>{zone.area || "N/A"}</span>
              </div>

              <h3 
                onClick={() => viewDetails(zone.id)}
                className="text-xl font-bold text-[#8E1616] mb-2 cursor-pointer hover:underline"
              >
                {zone.title || zone.name_en}
              </h3>

              <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                {zone.description || zone.description_en}
              </p>
            </div>

            <button
              onClick={() => viewDetails(zone.id)} 
              className="w-full h-[45px] bg-white hover:text-white hover:bg-[#8E1616] text-[#8E1616] border border-[#8E1616] rounded-[8px] transition-colors duration-300 font-medium text-center flex items-center justify-center text-sm shadow-sm"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}