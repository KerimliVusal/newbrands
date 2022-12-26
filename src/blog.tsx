import {Col,Row,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import bl1 from './single_blog_1.jpg.webp'
import bl2 from './single_blog_2.jpg.webp'
import bl3 from './single_blog_3.jpg.webp'
import bl4 from './single_blog_4.jpg.webp'
import bl5 from './single_blog_5.jpg.webp'
import { FaComment, FaPersonBooth } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import {FaRegComment} from 'react-icons/fa'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import post1 from './post_1.jpg.webp'
import post2 from './post_2.jpg.webp'
import post3 from './post_3.jpg.webp'
import post4 from './post_4.jpg.webp'
import inst1 from './post_5.jpg.webp'
import inst2 from './post_6.jpg.webp'
import inst3 from './post_7.jpg.webp'
import inst4 from './post_8.jpg.webp'
import inst5 from './post_9.jpg.webp'
import inst6 from './post_10.jpg.webp'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Blog=()=>{
    return(<Container fluid>
        <Row lg={1} xs={1} sm={1}>
            <Col className='blogentry'>
            <h2>Blog</h2>
            <p>Home / Blog</p>
            </Col>
            <Col className='blogcol1'>
            <Row lg={2} className='m-5' xs={1} sm={1}>
             <Col lg={8} className='blo '>
             <Row lg={1} xs={1} sm={1}>
                <Col className=''><img src={bl1}/></Col>
                <Col><h5>Google inks pact for new 35-storey office</h5>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <p><BsPerson></BsPerson> Travel, Lifestyle | <FaRegComment></FaRegComment> 03 Comments</p>
                </Col>
             </Row>
             <Row lg={1} xs={1} sm={1} >
             <AnimationOnScroll animateIn="animate__bounceInUp"  >
                <Col  ><img src={bl2} /></Col>
                </AnimationOnScroll>
                <Col><h5 >Google inks pact for new 35-storey office</h5>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <p><BsPerson></BsPerson> Travel, Lifestyle | <FaRegComment></FaRegComment> 03 Comments</p>
                </Col>
             </Row>
             <AnimationOnScroll animateIn="fadeInLeft"  >
             <Row lg={1} xs={1} sm={1}>
                <Col><img src={bl3}/></Col>
                <Col><h5>Google inks pact for new 35-storey office</h5>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <p><BsPerson></BsPerson> Travel, Lifestyle | <FaRegComment></FaRegComment> 03 Comments</p>
                </Col>
             </Row> </AnimationOnScroll>
             <Row lg={1} xs={1} sm={1}>
                <Col><img src={bl4}/></Col>
                <Col><h5>Google inks pact for new 35-storey office</h5>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <p><BsPerson></BsPerson> Travel, Lifestyle | <FaRegComment></FaRegComment> 03 Comments</p>
                </Col>
             </Row>             <AnimationOnScroll animateIn="animate__bounceInUp"   >

             <Row lg={1} xs={1} sm={1}>
                <Col><img src={bl5}/></Col>
                <Col><h5>Google inks pact for new 35-storey office</h5>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <p><BsPerson></BsPerson> Travel, Lifestyle | <FaRegComment></FaRegComment> 03 Comments</p>
                </Col>
             </Row></AnimationOnScroll>
             <Row lg={1} xs={1} sm={1} >
                <Col className='pagin my-3 ' lg={4} xs={8} sm={8}>
                <Stack spacing={2}>
      <Pagination count={3} variant="outlined" shape="rounded" />
    </Stack>
                </Col>
             </Row>
             </Col> 



             <Col lg={4} className='blogc5 '>      <AnimationOnScroll animateIn="animate__bounceInUp"  >

             <Row lg={1} className='blogcrow1' xs={1} sm={1}>
                <Col className='blogc2 p-5'><div className='blogc3'><input type='text' placeholder='Search Keyword'/><button className='blogc4'>Search</button></div></Col>
             </Row>
             <Row lg={1} xs={1} sm={1} className='bloc1 mt-5 pt-5'><Col><h4>Category</h4></Col>
             <Col className='mt-3'><p>Resaurant food(37)</p>  </Col>
             <Col><p>Travel news(10)</p></Col>
             <Col><p>Modern technology(03)</p></Col>
             <Col><p>Product(11)</p></Col>
             <Col><p>Inspiration21</p></Col>
             <Col><p>Health Care (21)09</p></Col>
             
             </Row>       </AnimationOnScroll>

             <AnimationOnScroll animateIn="animate__bounceInUp"   >
             <Row lg={1} xs={1} sm={1} className='bloc3 mt-5'><Col className='mt-3 p-2'><h4>Recent Posts</h4></Col>
             <Col className='bloc2 mt-4'><img src={post1}/><p>From life was you fish...
<p>January 12, 2022</p></p>  </Col>
<Col className='bloc2'><img src={post2}/><p>The Amazing Hubble
<p>January 12, 2022</p></p>  </Col>
<Col className='bloc2'><img src={post3}/><p>Astronomy Or Astrology
<p>January 12, 2022</p></p>  </Col>
<Col className='bloc2'><img src={post4}/><p>Asteroids telescope
<p>January 12, 2022</p></p>  </Col>   

            
            
             
             </Row></AnimationOnScroll>
             <Row lg={1} xs={1} sm={1} className='blocinsta mt-5 pt-5'>
                <Col><h4>Instagram Feeds</h4></Col>
                <Col className='mt-4'>
                <Row lg={3} className='m-2 p-2'>
                    <Col className='p-2'><img src={inst1}/></Col>
                    <Col className='p-2'><img src={inst2}/></Col>
                    <Col className='p-2'><img src={inst3}/></Col>
                    <Col className='p-2'><img src={inst4}/></Col>
                    <Col className='p-2'><img src={inst5}/></Col>
                    <Col className='p-2'><img src={inst6}/></Col>
                </Row>
                </Col>
               
             </Row>
             <Row lg={1} xs={1} sm={1} className='newsrow mt-5'>
                <Col className='newsleterh4 mt-4 pt-3'><h4>Newsletter</h4></Col>
                <Col className='newsleterinput mt-5'><input type='text'/></Col>
                <Col><button className='newsleterbtn mt-4'>Subscribe</button></Col>
             </Row>
             </Col>   
        </Row>
            </Col>
        </Row>
    </Container>)
};export default Blog