import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../helpers/api';

export default function DeveloperDetails() {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeveloperDetails = async () => {
      try {
        // جلب بيانات المطور المحدد بناءً على الـ id
        const response = await api.get(`/developer/${id}`);
        setDeveloper(response.data);
      } catch (error) {
        console.error('Error fetching developer details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeveloperDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-xl font-semibold text-gray-600">Loading Developer Details...</div>;
  }

  if (!developer) {
    return <div className="text-center py-20 text-xl font-semibold text-red-600">Developer not found</div>;
  }

  // استخراج صورة البانر أو الصورة الرئيسية للمطور بشكل آمن
  const devImage = Array.isArray(developer.images)
    ? developer.images[0]
    : developer.images || developer.image || developer.img || '';

  return (
    <div className="w-full max-w-[1366px] mx-auto px-4 py-10">

      {/* عنوان الصفحة */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-[32px] font-semibold font-['Playfair_Display'] text-[#1D1616] tracking-wide text-center">
          {developer.title || developer.name_en || developer.name || 'Developer Details'}
        </h2>
        <div className="w-[120px] h-[4px] bg-[#8E1616] rounded-full mt-2"></div>
      </div>

      {/* صورة البانر الرئيسية */}
      {devImage && typeof devImage === 'string' && (
        <div className="w-full h-[350px] md:h-[525px] rounded-[24px] overflow-hidden shadow-md mb-12 border border-gray-200">
          <img
            src={devImage}
            alt={developer.title || 'Developer'}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* قسم التفاصيل والمعلومات */}
      <div className="bg-white border border-[#EAEAEA] rounded-[20px] p-6 md:p-10 shadow-sm mb-12">
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-4">
          <span className="bg-[#8E1616]/10 text-[#8E1616] px-3 py-1 rounded-full font-medium">
            {developer.projects?.length || developer.projects || 0} Projects
          </span>
          <span>•</span>
          <span className="font-medium text-gray-700">Units: {developer.units || 0}</span>
          <span>•</span>
          <span className="font-medium text-gray-700">Location: {developer.location || developer.area || 'N/A'}</span>
        </div>

        <h3 className="text-2xl font-bold text-[#1D1616] mb-4">About Developer</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          {developer.description || developer.description_en || 'No description available for this developer.'}
        </p>
      </div>

      {/* لو المطور لديه مشاريع فرعية عرضها هنا */}
      {developer.projects_list && developer.projects_list.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-[#1D1616] mb-6">Projects by this Developer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developer.projects_list.map((proj, index) => (
              <div key={proj.id || index} className="bg-white border border-[#EAEAEA] rounded-[16px] p-4 shadow-sm">
                <img 
                  src={proj.image || devImage} 
                  alt={proj.title || "Project"} 
                  className="w-full h-[200px] object-cover rounded-[12px] mb-4" 
                />
                <h4 className="text-lg font-bold text-[#8E1616] mb-2">{proj.title || proj.name}</h4>
                <p className="text-gray-600 text-sm">{proj.description || "Luxury property project."}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}