// Gallery.js

import React from 'react';

const Gallery = () => {
  const images = [
    // Replace these URLs with actual image URLs from https://picsum.photos/
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/301',
    // Add more image URLs here
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          style={{ width: '200px', height: '200px', margin: '10px', cursor: 'pointer' }}
          onClick={() => alert(`Clicked on Image ${index + 1}`)} // Basic alert on image click
        />
      ))}
    </div>
  );
};

export default Gallery;
