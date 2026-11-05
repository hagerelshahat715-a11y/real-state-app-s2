import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../helpers/api';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';

export default function UnitsDetails() {
    const { id } = useParams();
    const [unit, setUnit] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        const getSingleUnit = async () => {
            try {
                const response = await api.get(`/unit/${id}`);
                console.log("بيانات الوحدة كاملة من الـ API:", response.data);
                setUnit(response.data);
                
                if (response.data.images && response.data.images.length > 0) {
                    setSelectedImage(response.data.images[0]);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching unit details:', error);
                setLoading(false);
            }
        };

        getSingleUnit();
    }, [id]);

    if (loading) {
        return <div className="text-center py-20 text-xl font-semibold text-gray-600">Loading unit details...</div>;
    }

    if (!unit) {
        return <div className="text-center py-20 text-xl text-red-500">Unit not found</div>;
    }

    return (
        <div className="max-w-[1366px] mx-auto px-4 py-10">
            
            
            <div className="flex flex-col gap-4 mb-8">
                
                
                <div className="w-full h-[450px] md:h-[550px] rounded-[16px] overflow-hidden shadow-md border border-gray-200">
                    <img 
                        src={selectedImage || (unit.images && unit.images[0])} 
                        alt="Main property view" 
                        className="w-full h-full object-cover transition-all duration-300"
                    />
                </div>

                
                <div className="flex items-center gap-4 overflow-x-auto pb-2">
                    {unit.images && unit.images.map((img, index) => (
                        <div 
                            key={index}
                            onClick={() => setSelectedImage(img)}
                            className={`w-[140px] h-[90px] rounded-[10px] overflow-hidden cursor-pointer border-2 transition-all flex-shrink-0 ${
                                selectedImage === img ? 'border-[#8E1616] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
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

            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 pb-4">
                <div>
                    <h1 className="text-3xl font-bold text-[#8E1616] mb-2">
                        {unit.title || unit.title_en || unit.name || unit.name_en}
                    </h1>
                    <p className="text-gray-500 flex items-center gap-1 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {unit.location || unit.zone || "Minusio, Lake Maggiore, Switzerland"}
                    </p>
                </div>
                
                <div className="text-3xl font-bold text-gray-900">
                    {unit.price} EGP
                </div>
            </div>

            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                
                
                <div className="bg-white p-6  h-fit">
                    <h3 className="text-2xl font-bold text-[#1D1616] mb-4">
                        At a glance
                    </h3>
                    <ul className='list-disc list-inside space-y-2 text-[#847D7D] text-sm'>
                        <li>Living area: {unit.size} m²</li>
                        <li>Bedrooms: {unit.bedrooms}</li>
                        <li>Bathrooms: {unit.bathrooms}</li>
                        <li>Status: {unit.status || "Available"}</li>
                    </ul>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-6">
                    
                    
                    <div className="bg-white p-6 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                {unit.description_en || unit.description_ar}
                            </p>
                        </div>

                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <button className="w-full h-[45px] bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium rounded-[8px] transition-colors shadow-sm flex items-center justify-center">
                                Contact via WhatsApp
                            </button>
                            <button className="w-full h-[45px] bg-white border border-[#8E1616] hover:bg-[#8E1616] text-[#8E1616] hover:text-white font-medium rounded-[8px] transition-colors shadow-sm flex items-center justify-center">
                                Call
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
}