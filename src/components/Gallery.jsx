import { useState, useEffect } from 'react';
import axios from '../utils/Axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get('/products');
      console.log(response.data);
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <h2>Gallery</h2>
      <button onClick={getImages}>Load Images</button>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img.image} alt="Gallery" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;