import React from 'react';

const Healing = () => {
  // Define the messages to be displayed.
  const messages = [
    "Entdecke die Kunst der Heilung und Reinigung!",
    "Durch die Harmonisierung deiner Chakren, erlangst du eine ausgewogene Balance, die Körper und Geist revitalisiert.",
    "Starte deinen Weg zur inneren Ruhe!",
    "In nur 5 Behandlungen holen Sie sich Lebensqualität zurück!"
  ];

  return (
    <div id="healing" className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 w-full text-[#4B5C52]">
      {/* Top Divider */}
      <div className="w-4/5 h-1 rounded-full bg-[#BE98E3] mb-4"></div>
      
      {/* Render the messages. */}
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          <p 
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-center ${index % 2 !== 0 ? 'bg-gray-200 rounded-lg p-3' : ''}`}
          >
            {message}
          </p>
          {/* Divider (if not the last element) */}
          {index < messages.length - 1 && (
            <div className="w-3/5 h-0.5 rounded-full bg-[#4B5C52] mb-4"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Healing;






