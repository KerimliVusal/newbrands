import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import detail from './detail.webp'
import './App.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {BsShare} from 'react-icons/bs'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
 const Detail=()=>{
    return(<Container fluid>
        <Row   className='detail1' >
           <Col><h2>Product Details</h2>
           <p>Home | Product Details</p>
           </Col>
        </Row>

        <Row   className='detail2 m-5 p-5' lg={2} sm={1} xs={1}>
           <Col lg={5} ><img src={detail} style={{backgroundPosition:'center center' ,backgroundSize:'cover',width:'80%'}}/></Col>
           <Col lg={7}><h1>The Rage of Dragons</h1>
           <p>By Evan Winter</p>
           <h2>$50.00</h2>
           <p><Stack spacing={1}>
      <Rating name="half-rating" defaultValue={4.5} precision={0.5} />(120 Review)
    </Stack></p>
           <button className='detailbuton'>Add to Cart</button> <span className='detailicon1'><BsShare size={25} className='detailicon'></BsShare></span>
           </Col>
        </Row>
        <Row lg={1} className='m-5 p-5'>
        <AnimationOnScroll animateIn="animate__bounceInLeft">  <Col><div className='detailspan'><span className='detail5'>Description</span><span className='detail5'>Author</span><span className='detail5'>Commets</span><span className='detail5'>Review</span></div></Col></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceInUp"> <Col><p className='detail3 '>
            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and

It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.


                </p>
                
                </Col></AnimationOnScroll>
        </Row>
        </Container>

    );
}; export default Detail

