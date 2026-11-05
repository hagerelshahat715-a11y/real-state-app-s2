import React from 'react';
import Title from '../components/Title';
import aboutImage from '../assets/images/about.png';

export default function About() {
  return (
    <section className="w-full px-6 md:px-12 py-16">
      <Title title="About Grand Atlas" showCards={false} />

      
      <div className="max-w-[1260px] mx-auto flex flex-col md:flex-row items-start gap-[70px] mt-10">
        
       
        <div className="w-full md:w-1/2">
          <img
            src={aboutImage}
            alt="Grand Atlas Luxury Villa"
            className="w-[573px] h-[567px] object-cover border-[5px] border-[#8E1616] rounded-t-[100px]"
          />
        </div>

        
        <div className="w-full md:w-1/2 flex flex-col justify-between h-[687px]">
          <p className="text-[#554E4F] text-[18px] lg:text-[20px] font-['Lato'] font-normal leading-[1.6]">
            We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,  
We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
          </p>

          <button className="bg-[#8E1616] text-white px-8 py-3 rounded-lg flex items-center gap-2 w-fit hover:bg-[#a31a1a] transition-all">
            <span>Know More</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}