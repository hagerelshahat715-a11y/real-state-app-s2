import React, { useState } from 'react';
import Hero from "../../components/Hero";
import Contactushome from '../../assets/images/Contactus.png';
import { MapPin, Mail, Phone } from 'lucide-react';
import facebook from '../../assets/icons/fb1.svg';
import instagram from '../../assets/icons/instagram.svg';
import tiktok from '../../assets/icons/tik.svg';
import x from '../../assets/icons/x1.svg';

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    alert('Your message has been sent successfully!');
  };

  return (
    <>
      <div>
        <Hero
          bg={Contactushome}
          title={"Connected Globally. Available Locally."}
          desc={`With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory.`}
          icons={true}
        />
      </div>

      <section className="container mx-auto px-4 py-16 max-w-[1366px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white p-8 md:p-12 rounded-[24px]">
          
          
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1D1616]">
              Contact Information
            </h3>
            <p className="text-[#847D7D] text-sm leading-relaxed">
              Our team is available for private consultations and off-market inquiries. We operate with absolute discretion to ensure your real estate objectives are met with precision.
            </p>

            <div className="space-y-4 text-sm text-gray-600 pt-2">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#8E1616] shrink-0 mt-1" />
                <span className='text-[#8E1616]'>Minusio, Lake Maggiore, Switzerland - ref. LOC1771</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#8E1616] shrink-0" />
                <span className='text-[#8E1616]'>Grand.Atlas.Support@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#8E1616] shrink-0" />
                <span className='text-[#8E1616]'>01247859622</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#8E1616] shrink-0" />
                <span className='text-[#8E1616]'>035987124</span>
              </div>
            </div>

           
            <div className="pt-2">
              <p className="text-sm text-[#847D7D] mb-3">Follow us on social media</p>
              <div className="flex items-center gap-3">
                <div className="size-10 border border-[#8E1616] rounded-full flex items-center justify-center p-2 cursor-pointer hover:border-[#8E1616] transition-colors">
                  <img src={facebook} alt="facebook" className="w-full h-full object-contain" />
                </div>
                <div className="size-10 border border-[#8E1616] rounded-full flex items-center justify-center p-2 cursor-pointer hover:border-[#8E1616] transition-colors">
                  <img src={x} alt="x" className="w-full h-full object-contain" />
                </div>
                <div className="size-10 border border-[#8E1616] rounded-full flex items-center justify-center p-2 cursor-pointer hover:border-[#8E1616] transition-colors">
                  <img src={instagram} alt="instagram" className="w-full h-full object-contain" />
                </div>
                <div className="size-10 border border-[#8E1616] rounded-full flex items-center justify-center p-2 cursor-pointer hover:border-[#8E1616] transition-colors">
                  <img src={tiktok} alt="tiktok" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            
            <div className="pt-6 border-t border-[#EAEAEA] mt-2">
              <h4 className="font-bold text-[#1D1616] mb-3 text-sm">Working Hours</h4>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex justify-between"><span className='text-[#8E1616]'>Saturday:</span> <span>9:00 AM - 5:00 PM</span></div>
                <div className="flex justify-between"><span className='text-[#8E1616]'>Sunday:</span> <span>9:00 AM - 5:00 PM</span></div>
                <div className="flex justify-between"><span className='text-[#8E1616]'>Monday:</span> <span>9:00 AM - 5:00 PM</span></div>
                <div className="flex justify-between"><span className='text-[#8E1616]'>Tuesday:</span> <span>9:00 AM - 5:00 PM</span></div>
                <div className="flex justify-between"><span className='text-[#8E1616]'>Wednesday:</span> <span>9:00 AM - 5:00 PM</span></div>
              </div>
            </div>
          </div>

          {/* الفورم */}
          <div className="p-6 md:p-8 rounded-[20px] border border-[#EAEAEA]">
            <div className="flex flex-col mb-8">
              <h2 className="text-[26px] font-semibold font-['Playfair_Display'] text-[#000000] leading-none text-left">
                Send us a message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type='text' 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[42px] px-4 bg-gray-50/50 border border-[#EAEAEA] rounded-[8px] focus:outline-none focus:border-[#8E1616] text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type='email' 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[42px] px-4 bg-gray-50/50 border border-[#EAEAEA] rounded-[8px] focus:outline-none focus:border-[#8E1616] text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type='tel' 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-[42px] px-4 bg-gray-50/50 border border-[#EAEAEA] rounded-[8px] focus:outline-none focus:border-[#8E1616] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 bg-gray-50/50 border border-[#EAEAEA] rounded-[8px] focus:outline-none focus:border-[#8E1616] text-sm resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full h-[45px] bg-[#8E1616] hover:bg-[#701010] text-white font-medium rounded-[8px] transition-colors shadow-sm flex items-center justify-center text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}