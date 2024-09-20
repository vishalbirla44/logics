import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [landscapeImages, setLandscapeImages] = useState([]);
  const [portraitImages, setPortraitImages] = useState([]);

  // Function to fetch landscape images
  const fetchLandscapeImages = async () => {
    try {
      const response = await fetch('YOUR_API_URL'); // Replace with your API URL
      const data = await response.json();
      const landscapes = data.filter(image => image.orientation === 'landscape');
      setLandscapeImages(landscapes);
    } catch (error) {
      console.error('Error fetching landscape images:', error);
    }
  };

  // Function to fetch portrait images
  const fetchPortraitImages = async () => {
    try {
      const response = await fetch('YOUR_API_URL'); // Replace with your API URL
      const data = await response.json();
      const portraits = data.filter(image => image.orientation === 'portrait');
      setPortraitImages(portraits);
    } catch (error) {
      console.error('Error fetching portrait images:', error);
    }
  };

  useEffect(() => {
    fetchLandscapeImages();
    fetchPortraitImages();
  }, []);

  return (
    <div>
      <h2>Landscape Images</h2>
      <div className="landscape-gallery">
        {landscapeImages.map((img) => (
          <img key={img.id} src={img.url} alt={img.description} />
        ))}
      </div>

      <h2>Portrait Images</h2>
      <div className="portrait-gallery">
        {portraitImages.map((img) => (
          <img key={img.id} src={img.url} alt={img.description} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
