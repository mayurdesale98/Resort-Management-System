import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Gallery.css';
export default function Gallery() {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7066/image/image/AllImageData')
      .then(response => {
        setGallery(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching room data:', error);
      });
  }, []);

  return (

    <div className='container' id='gallery'>
      <div className='row'>
        {gallery.map((image, index) => (
          <div className='col-md-4' key={index}>
            <div className='image-container'>
              <img src={image.img} alt={`Image ${index}`} className='img-fluid' />
            </div>
          </div>
        ))}
      </div>
    </div>
      
  )}