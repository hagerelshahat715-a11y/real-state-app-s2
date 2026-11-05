import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero';
import Developershome from '../../assets/images/Developers.png';
import PropertyCard from '../../components/PropertyCard';
import api from '../../helpers/api';
import { useNavigate } from 'react-router-dom';

export default function Developers() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getDevelopers = async () => {
      try {
        const response = await api.get("/developer");
        setDevelopers(response.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    getDevelopers();
  }, []);

 
  const viewDeveloperProjects = (id) => {
    navigate(`/developer-projects/${id}`);
  };

  if (loading) {
    return <div className="text-center py-20 text-xl font-semibold text-gray-600">Loading...</div>;
  }

  return (
    <div className="w-full">
      
      <Hero
        bg={Developershome}
        title={"Defining the Future Skyline."}
        desc={`Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers.`}
        icons={true}
      />

      
      <section className="container mx-auto px-4 py-16 max-w-[1366px]">
        
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-[32px] font-semibold font-['Playfair_Display'] text-[#1D1616] text-center tracking-wide">
            Developers Projects
          </h2>
          <div className="w-[180px] h-[4px] bg-[#8E1616] rounded-full mt-2"></div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev) => {
            const cardImage = Array.isArray(dev.images) && dev.images.length > 0 
              ? dev.images[0] 
              : (typeof dev.images === 'string' ? dev.images : "https://via.placeholder.com/400x300?text=No+Image");

            return (
               <PropertyCard
                      key={dev.id}
                      image={cardImage}
                      developer={dev.name_en || dev.name}
                      badgeText={dev.badge || "New Cairo"}
                      fullLogo={dev.logo}
                      btitle={"view project"}
                      onDetailsClick={() => viewDeveloperProjects(dev.id)}
                />
            );
          })}
        </div>

      </section>
    </div>
  );
}