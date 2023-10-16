import React from 'react';

const VideoField = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 w-full">
      {/* Divider */}
      <div className="w-4/5 h-1 rounded-full bg-[#BE98E3] mb-4"></div>
      
      {/* Header Text */}
      <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 font-bold">
        Sind Sie von Schmerzen geplagt? Verändern Sie Ihr Leben!
      </h2>
      
      {/* Video Container */}
      <div className="video-container relative w-full h-64 rounded-lg overflow-hidden mb-2 bg-fuchsia-300"> {/* Added rounded-lg for more pronounced rounding */}
        <iframe 
          className="absolute top-0 left-0 w-full h-full rounded-lg" 
          src="https://www.youtube.com/embed/eWLVBP3VrO4" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  )
}

export default VideoField;


