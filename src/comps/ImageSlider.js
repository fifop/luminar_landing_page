import React, { useState, useEffect, useMemo } from 'react';
import './ImageSlider.css';

function ImageSlaider() {
    const images = useMemo(()=>[
        "images/u0001.jpg", 
        "images/u0002.jpg",
        "images/u0003.jpg"
      ],[])
    
      const [currentImage, setCurrentImage] = useState(images[0]);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentImage(prevImage => {
            const nextIndex = (images.indexOf(prevImage) + 1) % images.length;
            return images[nextIndex];
          });
        }, 3000);
    
        return () => clearInterval(timer);
      }, [images]);
    
      return <img className="landing-image" src={currentImage} alt="Landing" />;
}

export default ImageSlaider