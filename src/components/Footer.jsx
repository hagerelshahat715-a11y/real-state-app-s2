import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#EBEBEB] pt-12 pb-6 px-6 md:px-12 lg:px-16">
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center">
            <img
              src="src/assets/images/Logo.png"
              alt="Grand Atlas Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <p className="text-sm text-gray-600">+1 (7635) 547-12-97</p>
          <p className="text-sm text-gray-600">support@lift.agency</p>
        </div>

        
        <div className="flex flex-col gap-3">
          <p className="font-bold text-gray-800">Quick Links</p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-[#8E1616] transition-colors">Home</p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-[#8E1616] transition-colors">Inventories</p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-[#8E1616] transition-colors">Zones</p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-[#8E1616] transition-colors">Developers</p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-[#8E1616] transition-colors">Contact Us</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-bold text-gray-800">About</p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-[#8E1616] transition-colors">Grand Atlas</p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-[#8E1616] transition-colors">Privacy Policy</p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-[#8E1616] transition-colors">Legal</p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-[#8E1616] transition-colors">Help</p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-[#8E1616] transition-colors">Support</p>
        </div>

        
        <div className="flex flex-col gap-3">
          <p className="font-bold text-gray-800">Get In touch</p>
          
          
          <div className="flex items-center w-full max-w-[248px] h-[46px] bg-white border border-gray-300 rounded overflow-hidden mt-2 mb-2">
            <input 
              type="text" 
              placeholder="Get product updates" 
              className="w-full h-full px-3 text-sm bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="h-full px-4 bg-[#8B0000] hover:bg-[#700000] hover:cursor-pointer flex items-center justify-center text-white transition-colors shrink-0">
              <img src="src/assets/images/arrows-down-top-move-1.png" alt="arrow" />
            </button>
          </div>
          
          
          <img
            src="src/assets/images/Group 3148 (1).png"
            alt="Social Media Icons"
            className="w-[135px] h-[35px] object-contain mt-2"
          />
        </div>

      </div>

      
      <div className="border-t border-gray-300 pt-6">
        <p className="text-center font-['Lato'] text-[#0A142F] text-[14px] md:text-[16px] font-normal">
          © 2020 Lift Media. All rights reserved
        </p>
      </div>

    </footer>
  );
}