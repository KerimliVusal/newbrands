import {Col,Row,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import like1 from './liked1.webp';
import like2 from './liked2.webp';
import like3 from './liked3.webp';
import like4 from './liked4.webp';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Like() {
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



return(
    <Container fluid>
      <AnimationOnScroll animateIn="animate__bounceInLeft"> <Row><Col className='m-5'><h2>You May Like </h2></Col></Row></AnimationOnScroll> 
        <AnimationOnScroll animateIn="animate__bounceInUp">
        <Row>
    <Col >
    <Carousel responsive={responsive} 
       infinite={true} className="owl-carousel owl-theme skill-slider coruselimg trendimg" autoPlay={true} centerMode={true} arrows={false} >
  <div className="body-selection-item"><div className="body-selection-item-image"><img src={like1}  /></div><p className='casmer'>Chasmer Tank +Bag</p> <p> 98$ <span className='casmer1'>120$</span></p></div>
  <div className="body-selection-item"><div className="body-selection-item-image"><img src={like2}/></div><p className='casmer'>Chasmer Tank +Bag</p> <p> 98$ <span className='casmer1'>120$</span></p></div>
  <div className="body-selection-item"><div className="body-selection-item-image"><img src={like3}/></div><p className='casmer'>Chasmer Tank +Bag</p> <p> 98$ <span className='casmer1'>120$</span></p></div>
  <div className="body-selection-item"><div className="body-selection-item-image"><img src={like4}/></div><p className='casmer'>Chasmer Tank +Bag</p> <p> 98$ <span className='casmer1'>120$</span></p></div>

</Carousel>
        </Col>
        </Row></AnimationOnScroll>
    </Container>
)
}; export default Like


