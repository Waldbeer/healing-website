import React, { useState } from "react";
import logo from "../assets/Naturheilkunde.png";




function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLinkClick = (index) => {
    setActiveIndex(index); // This will reset the styling to the default.
  };

  const navLinks = [
    { name: "Nelli Schorn" }, // No 'ref' since it doesn't lead anywhere
    { name: "Behandlung", ref: "healing" },
    { name: "Angebot", ref: "offer" },
  ];

  return (
    <div className="navbar flex items-center justify-between p-2 sm:p-6 md:space-x-20 md:p-6 lg:space-x-40 xl:space-x-60">
      <div className="ml-2 sm:ml-4 md:ml-6">
        <img width="60" className="logo sm:w-75 md:w-150" src={logo} alt="logo" />
      </div>
      <nav className="flex flex-grow ml-auto mr-auto sm:ml-12 md:mr-6">
        <ul className="navbar-list flex items-center sm:space-x-5 md:space-x-8 lg:space-x-12 xl:space-x-16">
          {navLinks.map((link, index) => {
            let buttonClasses = `flex items-center justify-center relative overflow-hidden border-2 border-white rounded-md text-sm sm:text-lg md:text-xl lg:text-2xl`;
            buttonClasses += " hover:bg-fuchsia-600 hover:text-white"; // Hover style

            return (
              <li key={index} className={buttonClasses} 
                onMouseDown={(e) => {
                  // This will scale down the button and add a shadow to create a "pressed" effect
                  const btn = e.currentTarget;
                  btn.style.transform = 'scale(0.95)';
                  btn.style.boxShadow = '0 5px 10px rgba(0,0,0,0.2)';
                }}
                onMouseUp={(e) => {
                  // This will revert the style back once the click is released
                  const btn = e.currentTarget;
                  btn.style.transform = '';
                  btn.style.boxShadow = '';
                }}
                onMouseLeave={(e) => {
                  // In case the mouse leaves the button while pressed
                  const btn = e.currentTarget;
                  btn.style.transform = '';
                  btn.style.boxShadow = '';
                }}
              >
                {link.ref ? (
                  <a href={`#${link.ref}`} className="p-2 sm:p-4 md:p-6 whitespace-nowrap">
                    {link.name}
                  </a>
                ) : (
                  <div role="button" className="p-2 sm:p-4 md:p-6 whitespace-nowrap" tabIndex={0}>
                    {link.name}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;





