import React from 'react';
import YoutubeIcon from "../assets/yticon.svg";
import AGBIcon from "../assets/agbicon.svg";
import OfferIcon from "../assets/offer.svg";
import ArrowUpicon from "../assets/uparrow.svg";

const Footer = () => {
  return (
    <div className="w-full bg-gray-600 pt-8 pb-4 text-[#F0F1F2]">
      
      {/* YouTube Icon */}
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl mb-2 font-bold text-center">Mein YouTube Kanal</h2>
        <a href="https://www.youtube.com/@naturundenergie/" target="_blank" rel="noopener noreferrer">
          <img src={YoutubeIcon} alt="YouTube" className="w-8 h-8 mr-2 hover:opacity-75"/>
        </a>
      </div>
      
      {/* Bottom Section */}
      <div className="flex justify-between items-center px-8 text-lg">
        {/* Center Section */}
        <div className="flex flex-grow justify-center items-center space-x-4">
          {/* <a href="/path-to-your/agb.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-75">
            <img src={AGBIcon} alt="AGB" className="w-6 h-6"/>
            <span>AGB</span>
  </a> */}
          <div className="bg-[#F0F1F2] w-0.5 h-[fit-content] rounded-full my-1"></div> {/* Vertical Divider */}
          <a href="#angebot" className="flex items-center space-x-2 hover:opacity-75">
            <img src={OfferIcon} alt="Angebot" className="w-6 h-6"/>
            <span>Angebot</span>
          </a>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <a href="#top" className="hover:opacity-75">
            <img src={ArrowUpicon} alt="Top" className="w-6 h-6"/>
            <span>Top</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;


``

