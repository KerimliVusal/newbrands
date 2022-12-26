import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import peter from './peter.webp'
import {Col,Row,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import like1 from './liked1.webp';
import like2 from './liked2.webp';
import like3 from './liked3.webp';
import like4 from './liked4.webp';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';



function Custom() {
  

  return (<Container fluid className='petermellim1 mt-5' >
     <Row>
     <AnimationOnScroll animateIn="animate__bounceInUp"  ><Col className='petermellim' lg={9}>
      <Carousel>
      <Carousel.Item>
      <h3>Customer Testominal</h3>
          <p>Nulla vitae elit libero, 
            a pharetra augue mollis interdum.Nulla vit elit libero, 
            a pharetra augue mollis augue mollis interdum augue mollis interdum.</p>
            <p className='peterimg'><span><img src={peter}/> </span>Peter Anderson</p>
       
      </Carousel.Item>
      <Carousel.Item>
      <h3>Customer Testominal</h3>
          <p>Nulla vitae elit libero, 
            a pharetra augue mollis interdum. Nulla vitae elit libero, 
            a pharetra Nulla  elit  henry vitae elit libero augue llis interdum.</p>
            <p className='peterimg'><span><img src={peter}/> </span>Peter Anderson</p>

       
      </Carousel.Item>
    </Carousel>
      
      </Col></AnimationOnScroll>
    </Row>
  </Container>
  );
}

export default Custom