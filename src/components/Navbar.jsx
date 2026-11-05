import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // أيقونات القائمة والإغلاق

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

 
  const linkStyle = (path) => `font-bold text-[20px] transition-colors duration-200 pb-1 ${
    isActive(path) 
      ? 'text-[#8E1616] border-b-2 border-[#8E1616]' 
      : 'text-[#847D7D] hover:text-[#8E1616]'
  }`;

  return (
    <nav className="sticky top-0 z-50 bg-white text-gray-800 shadow-md px-4 md:px-8 py-4 flex items-center justify-between w-full h-[105px]">
      
      
      <div className="flex items-center">
        <Link to="/">
          <img
            src="src/assets/images/Logo.png"
            alt="Grand Atlas Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer"
          />
        </Link>
      </div>

     
      <ul className="hidden md:flex gap-[40px] xl:gap-[60px] list-none m-0 p-0 items-center">
        <li>
          <Link to="/" className={linkStyle('/')} style={{ fontFamily: "'Lato', sans-serif" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Units" className={linkStyle('/Units')} style={{ fontFamily: "'Lato', sans-serif" }}>
            Units
          </Link>
        </li>
        <li>
          <Link to="/Zones" className={linkStyle('/Zones')} style={{ fontFamily: "'Lato', sans-serif" }}>
            Zones
          </Link>
        </li>
        <li>
          <Link to="/Developers" className={linkStyle('/Developers')} style={{ fontFamily: "'Lato', sans-serif" }}>
            Developers
          </Link>
        </li>
        <li>
          <Link to="/contactus" className={linkStyle('/contactus')} style={{ fontFamily: "'Lato', sans-serif" }}>
            Contact Us
          </Link>
        </li>
      </ul>

     
      <div className="hidden md:block">
        <Link
          to="/register"
          style={{
            background: 'linear-gradient(135deg, #8E1616 0%, #C34B4B 100%)',
            fontFamily: "'Lato', sans-serif",
          }}
          className="text-white px-[28px] py-[8px] rounded-[5px] text-[18px] font-bold transition-all duration-300 shadow-sm inline-block hover:opacity-90"
        >
          Register
        </Link>
      </div>

      
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-[#8E1616] focus:outline-none p-2">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

     
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden flex justify-end">
          <div className="w-[280px] h-full bg-white shadow-2xl flex flex-col p-6 space-y-6 transform transition-transform duration-300 ease-in-out">
            
           
            <div className="flex justify-between items-center border-b pb-4">
              <span className="font-bold text-xl text-[#8E1616]" style={{ fontFamily: "'Lato', sans-serif" }}>Menu</span>
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <X size={26} className="text-[#8E1616]" />
              </button>
            </div>

            
            <ul className="flex flex-col gap-6 list-none m-0 p-0">
              <li>
                <Link to="/" onClick={toggleMenu} className={linkStyle('/')} style={{ fontFamily: "'Lato', sans-serif" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Units" onClick={toggleMenu} className={linkStyle('/Units')} style={{ fontFamily: "'Lato', sans-serif" }}>
                  Units
                </Link>
              </li>
              <li>
                <Link to="/Zones" onClick={toggleMenu} className={linkStyle('/Zones')} style={{ fontFamily: "'Lato', sans-serif" }}>
                  Zones
                </Link>
              </li>
              <li>
                <Link to="/Developers" onClick={toggleMenu} className={linkStyle('/Developers')} style={{ fontFamily: "'Lato', sans-serif" }}>
                  Developers
                </Link>
              </li>
              <li>
                <Link to="/contactus" onClick={toggleMenu} className={linkStyle('/contactus')} style={{ fontFamily: "'Lato', sans-serif" }}>
                  Contact Us
                </Link>
              </li>
            </ul>

            
            <div className="pt-4 border-t mt-auto">
              <Link
                to="/register"
                onClick={toggleMenu}
                style={{
                  background: 'linear-gradient(135deg, #8E1616 0%, #C34B4B 100%)',
                  fontFamily: "'Lato', sans-serif",
                }}
                className="w-full block text-center text-white py-3 rounded-[5px] text-[18px] font-bold shadow-sm hover:opacity-90 transition-all"
              >
                Register
              </Link>
            </div>

          </div>
        </div>
      )}

    </nav>
  );
}