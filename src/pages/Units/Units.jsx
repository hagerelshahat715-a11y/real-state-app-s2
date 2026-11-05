import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from "../../components/Hero";
import unitshome from '../../assets/images/units.png';
import api from '../../helpers/api';
import { Search, Bed, Bath, Maximize } from 'lucide-react';

export default function Units() {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [search, setSearch] = useState("");
  const [price, setSPrice] = useState("");
  const [bedrooms, setSBedrooms] = useState("");
  const [developer, setDeveloper] = useState("");
  const [zone, setZone] = useState("");

  const navigate = useNavigate();

  const getUnits = async () => {
    try {
      const response = await api.get("/units");
      setUnits(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error fetching units", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUnits();
  }, []);

  const viewDetails = (id) => {
    navigate(`/units-details/${id}`);
  };

  const filteredUnits = units.filter((unit) => {
    const unitTitle = unit.title || unit.title_en || unit.name || unit.name_en || "";
    
    const matchesSearch = search === "" || unitTitle.toLowerCase().includes(search.toLowerCase());
    const matchesPrice = price === "" || Number(unit.price) <= Number(price);
    const matchesBedrooms = bedrooms === "" || String(unit.bedrooms) === String(bedrooms);
    const matchesDeveloper = developer === "" || unit.developer?.toLowerCase().includes(developer.toLowerCase());
    const matchesZone = zone === "" || unit.zone?.toLowerCase().includes(zone.toLowerCase());

    return matchesSearch && matchesPrice && matchesBedrooms && matchesDeveloper && matchesZone;
  });

  if (loading) {
    return <div className="text-center py-20 text-xl font-semibold text-red-700">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div>
        <Hero
          bg={unitshome}
          title={"Where Visionary Design Meets Daily Life"}
          desc={"Experience a collection of residences designed as personal sanctuaries..."}
          icons={true}
        />
      </div>

      <div className='max-w-[1366px] mx-auto px-4 mt-8 flex flex-col items-center gap-6'>
        <div className='w-full bg-white border border-[#EAEAEA] rounded-[12px] p-4 shadow-sm grid grid-cols-1 md:grid-cols-5 items-center gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100'>
          
          <div className='flex items-center gap-2 px-2 col-span-1 md:col-span-2'>
            <Search className='w-4 h-4 text-gray-400 shrink-0' />
            <input 
              type='text' 
              placeholder='Search Property' 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-full outline-none text-sm text-gray-700 bg-transparent'
            />
          </div>

          <div className='px-2'>
            <select 
              value={bedrooms} 
              onChange={(e) => setSBedrooms(e.target.value)}
              className='w-full bg-transparent outline-none cursor-pointer text-sm text-gray-600 py-1'
            >
              <option value="">Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>
          </div>

          <div className='px-2'>
            <input 
              type="text" 
              placeholder="Developer" 
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-gray-600"
            />
          </div>

          <div className='flex items-center justify-between px-2 gap-2'>
            <input 
              type="text" 
              placeholder="Zone" 
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-1/2 bg-transparent outline-none text-sm text-gray-600"
            />
            <input 
              type="number" 
              placeholder="Max Price" 
              value={price}
              onChange={(e) => setSPrice(e.target.value)}
              className="w-1/2 bg-transparent outline-none text-sm text-gray-600 text-right"
            />
          </div>

        </div>

        <button className='w-full max-w-[400px] h-[48px] bg-[#8E1616] hover:bg-[#7a1313] text-white font-medium rounded-[8px] transition-colors shadow-md text-base'>
          Search
        </button>
      </div>

      <div className='max-w-[1366px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center'>
        {filteredUnits.length > 0 ? (
          filteredUnits.map((unit) => {
            return (
              <div 
                key={unit.id} 
                className='w-full max-w-[442px] h-[529px] bg-white rounded-[16px] border border-[#EAEAEA] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] p-5 flex flex-col justify-between'
              >
                <div className='relative w-full h-[240px] rounded-[12px] overflow-hidden'>
                  <img 
                    src={unit.images && unit.images[0]} 
                    alt={unit.title || unit.name_en || "Property"} 
                    className='w-full h-full object-cover'
                  />
                  <span className='absolute top-3 right-3 bg-[#10B981] text-white text-[11px] font-semibold px-3 py-1 rounded-[4px]'>
                    Available
                  </span>
                </div>

                <div className='flex items-center justify-between text-gray-500 text-xs border-b border-gray-100 py-2'>
                  <div className='flex items-center gap-1'>
                    <Bed className='w-4 h-4 text-gray-400' />
                    <span>{unit.bedrooms || 2} Bedrooms</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Bath className='w-4 h-4 text-gray-400' />
                    <span>{unit.bathrooms || 2} Bathrooms</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Maximize className='w-4 h-4 text-gray-400' />
                    <span>{unit.area || 120}m</span>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-bold text-[#8E1616] truncate'>
                    {unit.title || unit.title_en || unit.name || unit.name_en || "Sawary Family Villa"}
                  </h3>
                  <span className='text-lg font-bold text-gray-800'>
                    {unit.price} EGP
                  </span>
                </div>

                <p className='text-[12px] text-gray-400 leading-relaxed line-clamp-2'>
                  {unit.description_en || unit.description || "Experience the true meaning of modern living..."}
                </p>

                <button 
                  onClick={() => viewDetails(unit.id)}
                  className='w-full h-[40px] border border-[#8E1616] text-[#8E1616] hover:bg-[#8E1616] hover:text-white rounded-[8px] text-sm font-medium transition-colors'
                >
                  View Details
                </button>
              </div>
            );
          })
        ) : (
          <p className='text-center col-span-3 text-gray-500 py-10'>No units found matching your search</p>
        )}
      </div>
    </div>
  );
}