import { Col, Container, Row } from "react-bootstrap"
import {RxInstagramLogo} from 'react-icons/rx'
import {FaFacebook} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import logo from './caplogo.webp'

const Footer=()=>{
    return(
        <Container fluid className='footer mt-5'>
            <Row className='footer1 m-2' lg={3} sm={1} xs={1}>
                <Col><h4>Subscribe Newsletter</h4><p>Subscribe newsletter to get 5% on all products.</p></Col>
                <Col><input type='text' placeholder="Enter your email"/> <button>Subscribe</button></Col>
                <Col><span className='icon'><FaFacebook className='facebok'></FaFacebook></span><span className='icon'><RxInstagramLogo className='facebok'></RxInstagramLogo></span><span className='icon'> <BsYoutube className='facebok'></BsYoutube></span></Col>
            </Row>
            <Row className='footer3' lg={5} xs={1} sm={2}>
                <Col><img src={logo} width='150px'/></Col>
                <Col >
                <h4>
                 Shop Men</h4><p>Clothing Fashion</p>
                 <p>Winter</p><p>Summer</p><p>Formal</p><p>Causal</p></Col>
                <Col> <h4>
                 Shop Women</h4><p>Clothing Fashion</p>
                 <p>Winter</p><p>Summer</p><p>Formal</p><p>Causal</p></Col>
                <Col> <h4>
                 Baby Fashion</h4><p>Clothing Fashion</p>
                 <p>Winter</p><p>Summer</p><p>Formal</p><p>Causal</p></Col>
                <Col> <h4>
                 Quick links</h4><p>Track Your Order</p>
                 <p>About</p><p>Carrier</p><p>Contact</p><p>Support</p></Col>
            </Row>
            <Row lg={1}>
                <Col className='footer4'><p>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p></Col>
            </Row>
        </Container>
    )
}; export default Footer