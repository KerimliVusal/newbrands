import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {Row,Col,Container} from 'react-bootstrap';
import slid1 from './back7.webp'
import slid2 from './back6.webp'
import slid3 from './back3.webp'
import back15 from './back15.webp';
 // You can also use <link> for styles
// ..



const Testominal= () => {
  
    return (<Container fluid className='home' >
      <Row lg={2} xs={1} sm={1} >
        <Col lg={5} style={{'backgroundImage': `url(${back15})` ,backgroundSize:'cover',backgroundPosition:'center center'}} className='homecol'> 
         <div className='hometxt'> <h2 className='hometxt2'>Fashion Sale </h2>
          <h1 className='hometxt1'>Minimmal Menz Style</h1>
          <p className='hometxt3'>Lorem ipsum dolor sint et dolores debitis quam autem libero adipisci voluptatum, sapiente optio saepe, ratione esse delectus, obcaecati temporibus qui ipsum officia.</p>
          </div>
        <button>Shop now</button>
        </Col>
      <Col lg={7} className=' fascol p-0 m-0'  >
        <div className='fasdiv'><button className='fasbuton'>New Fashion</button></div>
    <div className="slide-container backimage">
        <Zoom scale={0.4} autoplay={true} duration={1500} arrows={false} >
         <img src={slid1} style={{backgroundSize:'cover',width:'100%',height:'100%',backgroundPosition:'center center'}} />
         <img src={slid2} style={{backgroundSize:'cover',width:'100%',height:'100%',backgroundPosition:'center center'}}/>
         <img src={slid3} style={{backgroundSize:'cover',width:'100%',height:'100%',opacity:'0.7',backgroundPosition:'center center'}}/>
        </Zoom>
      </div>
      </Col>
      </Row>
      </Container>
    )
};export default Testominal