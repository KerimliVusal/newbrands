import React from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slid1 from './slide1.webp';
import slid2 from './items2.jpg.webp';
import slid3 from './slide3.webp';
import slid5 from './slide5.webp';
import {Row,Col,Container} from 'react-bootstrap';
import Custom from './custom';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Trend=()=>{
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

return(<Container>
  <Row>
  
    <Col className='trendheader'>
    <AnimationOnScroll animateIn='animate__bounceInLeft'
  
  > <div><h1>Trending This Week</h1></div></AnimationOnScroll>
   <AnimationOnScroll animateIn='animate__bounceInRight'
  
  > <div><span>Men</span><span>Women</span><span>Baby</span><span>Fashion</span></div></AnimationOnScroll>
    </Col>
    <AnimationOnScroll animateIn='animate__bounceInUp'
  
  > <Col>
<Carousel responsive={responsive} 
       infinite={true} className="owl-carousel owl-theme skill-slider coruselimg trendimg" autoPlay={true} centerMode={true} arrows={false} >
  <div><img src={slid1}/></div>
  <div><img src={slid5}/></div>
  <div><img src={slid3}/></div>
  <div><img src={slid5}/></div>
</Carousel>
</Col></AnimationOnScroll>
</Row>
</Container>
);
}; export default Trend