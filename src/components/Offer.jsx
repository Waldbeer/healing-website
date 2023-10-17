import React from 'react';
import Tick from "../assets/check-mark.svg";
import Cross from "../assets/cross.svg";

const Offer = () => {
  // Define rows separately to avoid any unforeseen issues within the JSX.
  const renderRow = (service, basic, premium, price) => (
    <tr>
      <td className="py-4 px-3 border-b border-gray-300 text-lg">{service}</td>
      <td className="py-4 px-3 border-b border-gray-300">
        {basic ? <img src={Tick} alt="Tick" className="w-6 h-6 mx-auto"/> : <img src={Cross} alt="Cross" className="w-6 h-6 mx-auto"/>}
      </td>
      <td className="py-4 px-3 border-b border-gray-300">
        {premium ? <img src={Tick} alt="Tick" className="w-6 h-6 mx-auto"/> : <img src={Cross} alt="Cross" className="w-6 h-6 mx-auto"/>}
      </td>
      <td className="py-4 px-3 border-b border-gray-300 text-lg flex justify-center">{price}€</td>
    </tr>
  );

  return (
    <div className="w-full p-8 bg-gray-100 text-gray-800">
      {/* Divider */}
      <div className="w-4/5 h-1 mx-auto rounded-full bg-[#BE98E3] mb-4"></div>
      
      {/* Header Text */}
      <h1 className="text-center text-3xl font-bold mb-8">Mein Angebot</h1>
      
      {/* Table */}
      <div className="w-full overflow-hidden rounded-lg shadow-md mb-4">
        <div className="w-full overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300"></th>
                <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Basis Paket</th>
                <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Premium</th>
                <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Preis</th>
              </tr>
            </thead>
            <tbody>
              {renderRow('Ganzkörper Reinigung', true, true, '49')}
              {renderRow('Energetische Heilung', false, true, '79')}
              {/* Add more rows by calling renderRow with appropriate arguments */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Offer;


