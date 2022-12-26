import Carousel from 'react-bootstrap/Carousel';
import slide1 from './back7.webp'
import slide2 from './back6.webp'
import slide3 from './back3.webp'
import React from 'react';
import './App.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
    {
      url: slide1,
      caption: 'Slide 1'
    },
    {
      url: slide2,
      caption: 'Slide 2'
    },
    {
      url: slide3,
      caption: 'Slide 3'
    },
  ];

function Slider() {
  return ( <div className="slide-container">
  <Slide arrows={false}>
   {slideImages.map((slideImage, index)=> (
      <div className="each-slide" key={index}>
        <div style={{'backgroundImage': `url(${slideImage.url})`, height:'100vh', backgroundSize:'cover'}}>
        </div>
      </div>
    ))} 
  </Slide>
</div>
    );
  
};

export default Slider;