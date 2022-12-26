import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import latest1 from './latest1.webp';
import latest2 from './latest2.webp';
import latest3 from './latest3.webp';
import servis1 from './services1.svg'
import servis2 from './services2.svg'
import servis3 from './services3.svg'
import servis4 from './services4.svg'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './App.css';
 const Latest=()=>{
    return(<Container fluid className='my-5'>
         <AnimationOnScroll animateIn="animate__bounceInUp"> <Row className='m-5'><Col><h2>Latest News</h2></Col></Row></AnimationOnScroll>
        <Row   className='latestrow m-5' lg={3} xs={1} sm={1}>
            <Col>
            <Row lg={1} xs={1}>
            <AnimationOnScroll animateIn="animate__bounceIn"> <Col><img src={latest1}/></Col></AnimationOnScroll>
                <Col>
                <p>Fashion Tips</p>
                <h3>What Curling Irons Are The Best Ones</h3>
                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                <p className='latest1'>Read more</p>
                </Col>
           </Row>
          </Col>

            <Col>  <Row lg={1} sm={1} xs={1}>
            <AnimationOnScroll animateIn="animate__bounceIn"> <Col><img src={latest2}/></Col></AnimationOnScroll>
                <Col>
                <p>Fashion Tips</p>
                <h3>Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes</h3>
                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                <p className='latest1'>Read more</p>
                </Col>
           </Row></Col>

            <Col>  <Row lg={1} sm={1} xs={1} >
            <AnimationOnScroll animateIn="animate__bounceIn">  <Col><img src={latest3}/></Col></AnimationOnScroll>
                <Col>
                <p>Fashion Tips</p>
                <h3>What Curling Irons Are The Best Ones</h3>
                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                <p className='latest1'>Read more</p>
                </Col>
           </Row></Col>

        </Row>
        <Row lg={4} className='py-5' xs={1} sm={2}>
         <AnimationOnScroll animateIn='animate__bounceInUp'>  <Col className='servis'><img src={servis1}/><h4>Fast & Free Delivery</h4><p>Free delivery on all orders</p></Col></AnimationOnScroll> 
         <AnimationOnScroll animateIn='animate__bounceInUp'>   <Col className='servis'><img src={servis2}/><h4>Secure Payment</h4><p>Free delivery on all orders</p></Col></AnimationOnScroll> 
         <AnimationOnScroll animateIn='animate__bounceInUp'>    <Col className='servis'><img src={servis3}/><h4>Money Back Guarantee</h4><p>Free delivery on all orders</p></Col></AnimationOnScroll> 
         <AnimationOnScroll animateIn='animate__bounceInUp'>    <Col className='servis'><img src={servis4}/><h4>Online Support</h4><p>Free delivery on all orders</p></Col></AnimationOnScroll> 
        </Row>
        </Container>

    );
}; export default Latest