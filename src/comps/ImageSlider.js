import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

function ImageSlaider() {
    const images = [
        "images/1.jpg", 
        "images/2.jpg",
        "images/3.jpg"
      ];
    
      const [currentImage, setCurrentImage] = useState(images[0]);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentImage(prevImage => {
            const nextIndex = (images.indexOf(prevImage) + 1) % images.length;
            return images[nextIndex];
          });
        }, 3000);
    
        return () => clearInterval(timer);
      }, []);
    
      return <img className="landing-image" src={currentImage} alt="Landing" />;
}

export default ImageSlaider