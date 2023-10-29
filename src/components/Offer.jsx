import React from 'react';
import Tick from "../assets/check-mark.svg";
import Cross from "../assets/cross.svg";

const Offer = () => {
  // Define service rows without price
  const renderRow = (service, basic, premium) => (
    <tr>
      <td className="py-4 px-3 border-b border-gray-300 text-lg">{service}</td>
      <td className="py-4 px-3 border-b border-gray-300">
        {basic ? <img src={Tick} alt="Tick" className="w-6 h-6 mx-auto"/> : <img src={Cross} alt="Cross" className="w-6 h-6 mx-auto"/>}
      </td>
      <td className="py-4 px-3 border-b border-gray-300">
        {premium ? <img src={Tick} alt="Tick" className="w-6 h-6 mx-auto"/> : <img src={Cross} alt="Cross" className="w-6 h-6 mx-auto"/>}
      </td>
    </tr>
  );

  // New constant to render the price row
  const renderPriceRow = (priceBasic, pricePremium) => (
    <tr>
      <td className="py-4 px-3 border-b border-gray-300 text-lg">Preis</td>
      <td className="py-4 px-3 border-b border-gray-300 text-center text-lg">{priceBasic}€</td>
      <td className="py-4 px-3 border-b border-gray-300 text-center text-lg">{pricePremium}€</td>
    </tr>
  );

  return (
    <div className="w-full p-2 sm:p-4 lg:p-8 bg-gray-100 text-gray-800"> {/* Further reduced padding for smaller screens */}
      {/* Divider */}
      <div className="w-3/4 h-1 mx-auto rounded-full bg-[#BE98E3] mb-4"></div>
      
      {/* Header Text */}
      <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-8">Mein Angebot</h1> {/* Smaller text and margin for smaller screens */}
      
      {/* Table */}
      <div className="w-full overflow-hidden rounded-lg shadow-md mb-4">
        <div className="w-full overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="py-2 px-2 sm:py-3 sm:px-4 lg:py-4 lg:px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300"></th> {/* Further reduced padding */}
                <th className="py-2 px-2 sm:py-3 sm:px-4 lg:py-4 lg:px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Basis Paket</th> {/* Further reduced padding */}
                <th className="py-2 px-2 sm:py-3 sm:px-4 lg:py-4 lg:px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Premium</th> {/* Further reduced padding */}
              </tr>
            </thead>
            <tbody>
              {renderRow('Ganzkörper Reinigung', true, true)}
              {renderRow('Energetische Heilung', false, true)}
              {renderPriceRow('59', '79')}
              {/* Add more service rows by calling renderRow with appropriate arguments */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Offer;

