import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../helpers/api';

export default function DeveloperProjects() {
  const { id } = useParams();
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getDevelopers = async () => {
      try {
        const response = await api.get('/developer');
        setDevelopers(response.data);
      } catch (error) {
        console.error('Error fetching developers:', error);
      } finally {
        setLoading(false);
      }
    };

    getDevelopers();
  }, []);

  const viewProjects = (devId) => {
    navigate(`/developer-projects/${devId}`);
  };

  if (loading) {
    return <div className="text-center py-20 text-xl font-semibold text-gray-600">Loading...</div>;
  }

  
  const firstDev = developers.length > 0 ? developers[0] : null;
  const mainBannerImage = firstDev
    ? Array.isArray(firstDev.images)
      ? firstDev.images[0] || ''
      : firstDev.images || firstDev.image || firstDev.img || ''
    : '';

  return (
    <div className="w-full max-w-[1366px] mx-auto px-4 py-10">

      
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-[32px] font-semibold font-['Playfair_Display'] text-[#1D1616] tracking-wide text-center">
          Developer Projects
        </h2>
        <div className="w-[120px] h-[4px] bg-[#8E1616] rounded-full mt-2"></div>
      </div>

      {/* صورة البانر */}
      {mainBannerImage && typeof mainBannerImage === 'string' && (
        <div className="w-full h-[350px] md:h-[525px] rounded-[24px] overflow-hidden shadow-md mb-12 border border-gray-200">
          <img
            src={mainBannerImage}
            alt="Developer Projects Banner"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* شبكة الكروت: استخدام flex للموبايل للتوسيط التام، و grid للشاشات الكبيرة */}
      <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(developers) && developers.map((developer) => {
          const developerImage = Array.isArray(developer.images)
            ? developer.images[0]
            : developer.images || developer.image || developer.img || '';

          return (
            <div
              key={developer.id}
              className="bg-white border border-[#EAEAEA] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col justify-between w-full max-w-[380px] md:max-w-none mx-auto"
            >
             
              <div className="w-full h-[240px] rounded-[12px] overflow-hidden mb-4 bg-gray-100">
                {developerImage && typeof developerImage === 'string' && (
                  <img
                    src={developerImage}
                    alt={developer.title || developer.name_en || 'Developer'}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* تفاصيل المطور */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                  <span>{developer.projects?.length || developer.projects || 0} Projects</span>
                  <span>•</span>
                  <span>{developer.units || 0} Units</span>
                  <span>•</span>
                  <span>{developer.location || developer.area || 'N/A'}</span>
                </div>

                <h3 className="text-xl font-bold text-[#8E1616] mb-2">
                  {developer.title || developer.name_en || developer.name || 'Developer'}
                </h3>

                <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {developer.description ||
                    developer.description_en ||
                    'Discover more about this developer and its projects.'}
                </p>
              </div>

              
              
          <button
            onClick={() => navigate(`/developer-details/${developer.id}`)}
            className="w-full h-[45px] bg-white hover:text-white hover:bg-[#8E1616] text-[#8E1616] border border-[#8E1616] rounded-[8px] transition-colors duration-300 font-medium text-center flex items-center justify-center text-sm shadow-sm"
          >
            View Details
          </button>
            </div>
          );
        })}
      </div>

    </div>
  );
}