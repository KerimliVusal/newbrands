import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import sl1 from './items1.jpg.webp';
import sl2 from './items2.jpg.webp';
import sl3 from './items3.jpg.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './App.css';
 const Slide2=()=>{
    return(<Container ><AnimationOnScroll animateIn='animate__bounceInUp'
  
    >
        <Row  xs={1} sm={1} lg={3} className='slide2img m-5' >
            <Col  className="body-selection-item my-2"  ><div className="body-selection-item-image"><img src={sl1} width='100%' /></div></Col>
            <Col   className="body-selection-item my-2"><div className="body-selection-item-image"><img src={sl2} width='100%'/></div></Col>
            <Col   className="body-selection-item my-2"><div className="body-selection-item-image"><img src={sl3} width='100%' /></div></Col>
        </Row></AnimationOnScroll>
        </Container>

    );
}; export default Slide2