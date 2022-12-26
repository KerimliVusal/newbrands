import {Col,Row,Container,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsHeadphones} from 'react-icons/bs';
import {MdOutlineLocalPostOffice} from 'react-icons/md';
import {AiOutlineHome} from 'react-icons/ai';
import React from "react";
import Button from 'react-bootstrap/Button';
import GoogleMapReact from 'google-map-react';

const Contact=()=>{
   const AnyReactComponent = ({ text }:any) => <div>{text}</div>;
      const defaultProps = {
        center: {
          lat: 43.000000,
          lng: -75.000000,
        },
        zoom: 11
      };
    return(<>
         <Container fluid>
            <Row lg={1} className="contactus  "><Col><h3>Contact Us</h3></Col></Row>
            <Row>
                <Col className="m-5">
                <div style={{ height: '300px', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={45.955413}
          lng={42.337844}
          text="Map"
        />
      </GoogleMapReact>
    </div>
                </Col>
            </Row>
            <Row className='m-3' lg={3} xs={1} sm={1}>
                <Col className="mt-1">
                <Row lg={1} xs={1} sm={1} className="contactinput1">
                 <Col><div className="contactinput5"><div><AiOutlineHome size={20} color={'blue'}></AiOutlineHome></div><h5>California United States <p>Santa monica bullevard</p></h5></div><div></div></Col>   
                 <Col><div className="contactinput5"><div><BsHeadphones size={20} color={'blue'}></BsHeadphones></div><h5>00 (440) 9865 562 <p>Mon to Fri 9am to 6pm</p></h5></div><div></div></Col>  
                 <Col><div className="contactinput5"><div><MdOutlineLocalPostOffice size={20} color={'blue'}></MdOutlineLocalPostOffice></div><h5>support@colorlib.com <p>Send  query anytime... !</p></h5></div><div></div></Col>  
            </Row></Col>
                <Col>
                <Row className="contactinput">
                 <Col><input type="text" placeholder="Enter name"/></Col>   
                 <Col><input type="email" placeholder="Enter email"/></Col>  
                 <Col><input type="text" placeholder="Enter subject"/></Col> 
                 
            </Row>
                </Col>
                <Col className="mt-2 contacttextarea" ><textarea  placeholder='Enter message' />
                <div className="mt-4 contactbutton"><button>Send message</button></div>
                </Col>
            </Row>
         </Container>
         </>
    );
}; export default Contact