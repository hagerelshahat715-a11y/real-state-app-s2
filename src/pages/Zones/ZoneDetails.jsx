import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../helpers/api';
import { MapPin } from 'lucide-react';

export default function ZoneDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [zone, setZone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImages, setSelectedImages] = useState("");

  useEffect(() => {
    const getZoneDetails = async () => {
      try {
        const response = await api.get(`/zone/${id}`);
        setZone(response.data);
        console.log(response.data);
        
        
        if (response.data.images && response.data.images.length > 0) {
          setSelectedImages(response.data.images[0]);
        }
      } catch (error) {
        console.error('Error fetching zone details:', error);
      } finally {
        setLoading(false);
      }
    };

    getZoneDetails();
  }, [id]);

  if (loading) {
     return <div className="text-center py-20 text-xl font-semibold text-gray-600">Loading zone details...</div>;
  }

  if (!zone) {
    return <div className="text-center py-20 text-xl text-red-500">Zone not found</div>;
  }

  return (
    <div className="max-w-[1366px] mx-auto px-4 py-10">
      
      <div className="flex flex-col items-center justify-center mb-10"> 
        <h2 className="text-[32px] font-semibold font-['Playfair_Display'] text-[#1D1616] tracking-wide">
          Zone Details    
        </h2> 
        <div className="w-[120px] h-[4px] bg-[#8E1616] rounded-full mt-2"></div>
      </div>
      
    
      <div className='flex flex-col gap-4 mb-10'>
        <div className="w-full h-[450px] md:h-[550px] rounded-[16px] overflow-hidden shadow-md border border-gray-200 bg-gray-100">
          <img
            src={selectedImages || (zone.images && zone.images[0])} 
            alt="Zone main view"
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>

        
        <div className='flex items-center gap-4 overflow-x-auto pb-2'>
          {zone.images && zone.images.map((img, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImages(img)}
              className={`w-[140px] h-[90px] rounded-[10px] overflow-hidden cursor-pointer border-2 transition-all flex-shrink-0 ${
                selectedImages === img ? 'border-[#8E1616] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={img} 
                alt={`thumbnail-${index}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#1D1616] mb-2">
          {zone.title || zone.name_en}
        </h1>
        <div className="flex items-center text-gray-500 text-sm gap-2">
          <MapPin size={16} className="text-[#8E1616]" />
          <span>{zone.location || "Location details"}</span>
        </div>
      </div>


      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white p-8 rounded-[20px]  mb-12">
        
        
        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-[#EAEAEA] pb-6 lg:pb-0 lg:pr-8 bg-white p-6 h-fit rounded-[16px]">
          <h3 className="text-2xl font-bold text-[#1D1616] mb-4">
            At a glance
          </h3>
          <div className="space-y-4 text-[#847D7D] text-sm">
            <div className="flex justify-between items-center border-b border-[#EAEAEA] pb-3">
              <p>Units</p>
              <p className="font-semibold text-[#1D1616]">{zone.units || (zone.projects ? zone.projects.length : "N/A")}</p>
            </div>
            <div className="flex justify-between items-center border-b border-[#EAEAEA] pb-3">
              <p>Gyms</p>
              <p className="font-semibold text-[#1D1616]">{zone.gyms || "N/A"}</p>
            </div>
            <div className="flex justify-between items-center pb-1">
              <p>Area</p>
              <p className="font-semibold text-[#1D1616]">{zone.area || "N/A"}</p>
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-[#1D1616] mb-6">Overview</h3>
          <p className="text-gray-600 leading-relaxed text-base">
            {zone.description || zone.description_en || "No description available."}
          </p>
        </div>

      </div>

        
      

    </div>
  );
}