import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Hero from "../../components/Hero";
import Zoneshome from '../../assets/images/zones.png';
import api from '../../helpers/api'; 

export default function Zones() {
  const [zone, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  const getZones = async () => {
    try {
      const response = await api.get("/zone");
      setZones(response.data); 
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getZones();
  }, []);

  return (
    <>
      {loading && <h1 className='text-center text-red-50'>loading....</h1>}
      
      <div>
        <Hero
          bg={Zoneshome}
          title={"Destinations Defined by Distinction"}
          desc={`From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic.`}
          icons={true}
        />
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {zone.map((item) => {
          return (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <img 
                  src={item.images?.[0]} 
                  onClick={() => navigate(`/zones-project`)} // تحويل إلى صفحة المشاريع عند النقر على الصورة
                  className='w-full h-48 object-cover rounded-lg mb-3 cursor-pointer hover:opacity-90 transition-opacity' 
                  alt={item.name_en} 
                />
                <h3 className="text-xl font-bold text-red-800">{item.name_en}</h3>
                <p className="text-gray-600 text-sm">{item.description_en}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}