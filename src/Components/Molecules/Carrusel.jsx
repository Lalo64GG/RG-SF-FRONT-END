import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,  
      };

  return (
    <Slider {...settings}>
      <div className=' flex justify-center items-center'>
        <h3>Slide 1</h3>
        <img className='w-full h-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRbZbkhT3GNPpYYrzDk36V-dhPcmB6MdccFbx9wDhig&s" alt="Slide 1" />
      </div>
      <div>
        <h3>Slide 2</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRbZbkhT3GNPpYYrzDk36V-dhPcmB6MdccFbx9wDhig&s" alt="Slide 2" />
      </div>
      <div>
        <h3>Slide 3</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRbZbkhT3GNPpYYrzDk36V-dhPcmB6MdccFbx9wDhig&s" alt="Slide 3" />
      </div>
    </Slider>
  );
};
