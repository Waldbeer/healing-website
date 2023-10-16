import React from 'react';
import Tick from "../assets/check-mark.svg";
import Cross from "../assets/cross.svg";


const Offer = () => {
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 border-b border-gray-300 text-lg">Ganzkörper Reinigung</td>
                <td className="py-4 px-6 border-b border-gray-300"><img src={Tick} alt="Tick" className="w-6 h-6 mx-auto"/></td>
                <td className="py-4 px-6 border-b border-gray-300"><img src={Tick} alt="Tick" className="w-6 h-6 mx-auto"/></td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-300 text-lg">Energetische Heilung</td>
                <td className="py-4 px-6 border-b border-gray-300"><img src={Cross} alt="Tick" className="w-6 h-6 mx-auto"/></td>
                <td className="py-4 px-6 border-b border-gray-300"><img src={Tick} alt="Tick" className="w-6 h-6 mx-auto"/></td>
              </tr>
              {/* Add more rows as per your requirement */}
            </tbody>
          </table>
        </div>
      </div>
      
      
    </div>
  )
}

export default Offer;
