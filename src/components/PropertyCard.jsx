import React from 'react';

export default function PropertyCard({ image, title, developer, badgeText, logo, fullLogo, subtitle, onDetailsClick ,btitle}) {
  return (
    <div className="w-full max-w-[352px] h-[348px] shrink-0 bg-white rounded-[16px] border border-[#EAEAEA] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] p-[12px] flex flex-col justify-between">
      
      
      <div className="relative w-full h-[210px] shrink-0 rounded-[12px] overflow-hidden">
        <img
          src={image}
          alt={title || "Property image"}
          className="w-full h-full object-cover"
        />

        
        {badgeText && (
          <span className="absolute top-3 right-3 bg-[#991B1B] text-white text-[11px] font-medium px-3 py-1 rounded-[4px] shadow-sm">
            {badgeText}
          </span>
        )}
      </div>

      
      <div className="flex items-center gap-3 h-[52px] px-1">
        {logo && (
          <img
            src={logo}
            alt={developer || "Logo"}
            className="w-[36px] h-[36px] object-contain shrink-0"
          />
        )}
        {fullLogo ? (
          <img
            src={fullLogo}
            alt={developer || "Developer logo"}
            className="h-[32px] max-w-[160px] object-contain"
          />
        ) : (
          <div className="flex flex-col justify-center">
            <h3 className="text-[15px] font-bold text-[#1D1616] tracking-tight leading-tight">
              {developer || title}
            </h3>
            <p className="text-[11px] text-gray-500 font-normal mt-0.5">
              {subtitle || "DEVELOPMENTS"}
            </p>
          </div>
        )}
      </div>

      
      <button
        type="button"
        onClick={onDetailsClick}
        className="w-full h-[38px] border border-[#991B1B] rounded-[8px] text-[#991B1B] text-[13px] font-medium hover:bg-[#991B1B] hover:text-white transition-colors flex items-center justify-center shadow-sm"
      >
        {btitle}
      </button>

    </div>
  );
}