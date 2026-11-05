import React from 'react';
import Hero from '../../components/Hero';
import herohome from '../../assets/images/herohome.png';

import BenchmarksSection from '../../components/BenchmarksSection';
import About from '../../components/About';
import MasterpiecesSection from '../../components/MasterpiecesSection';
import Locations from '../../components/Locations';
import PropertyCard from '../../components/PropertyCard';

import img1 from '../../assets/images/Frame 2.png';
import img2 from '../../assets/images/Frame 2 (1).png';
import img3 from '../../assets/images/Frame 2 (2).png';

import palmHillsLogo from '../../assets/images/home2.png'; 
import hayahLogo from '../../assets/images/home1.png';

export default function Home() {
  return (
    <div>
      <Hero
        bg={herohome}
        title="Redefining the Horizon of Modern Luxury Living"
        desc="We believe a home should be a sanctuary of innovation and an extension of your personal brand."
        btn={true}
        icons={true}
      />

      <BenchmarksSection />

      <About />

      <MasterpiecesSection />

      <Locations />

      <section className="w-full pt-3 px-6 pb-[145px] overflow-hidden">

        <h2 className="text-center text-[28px] font-bold text-black">
          Future Landmarks
        </h2>

        <div className="w-[192px] h-[4px] bg-[#C94343] rounded-full mx-auto mt-2 mb-8"></div>

        <div className="flex flex-wrap justify-center items-center gap-4">

          
          <PropertyCard
            image={img1}
            title="Palm Hills"
            developer="Palm Hills"
            badgeText="New Cairo"
            fullLogo={palmHillsLogo}
            btitle={"view details"}
          />

          
          <PropertyCard
            image={img2}
            developer="Hayah City"
            subtitle="Hayah Development"
            badgeText="New Cairo"
            logo={hayahLogo}
            btitle={"view details"}
          />

          
          <PropertyCard
            image={img3}
            title="New Cairo"
            developer="Palm Hills"
            badgeText="New Cairo"
            fullLogo={palmHillsLogo}
            btitle={"view details"}
          />

        </div>

        <div className="flex justify-center items-center gap-2 mt-7">
          <span className="w-12 h-[9px] rounded-full bg-[#991B1B]"></span>
          <span className="w-[13px] h-[13px] rounded-full bg-[#D9D9D9]"></span>
          <span className="w-[13px] h-[13px] rounded-full bg-[#D9D9D9]"></span>
        </div>

      </section>
    </div>
  );
}