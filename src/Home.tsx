import {Row, Col, Container} from 'react-bootstrap';
import Custom from './custom';
import Like from './like';
import Slide2 from './slide2';
import Slider from './slider';
import Testominal from './testominal';
import Trend from './trend';
import Latest from './latest';
import Login1  from './login';
import Footer from './footer';
import {RxDoubleArrowUp} from 'react-icons/rx'




const Home=()=>{
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let mybutton = document.querySelector<HTMLElement>(".scrolbtn")!;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
     
      
    return(<div >
    <Login1/>
    <div className='app'>
    <Testominal/>
    <Slide2/>
    <Trend/>
    <Custom/>
    <Like/>
    <Latest/>
    <Footer/>
    <button onClick={()=>topFunction()} className='scrolbtn'><RxDoubleArrowUp className='scrolicon'></RxDoubleArrowUp></button>
    </div> </div>
    );
};
export default Home