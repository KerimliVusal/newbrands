import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './caplogo.webp';
import {FcSearch} from 'react-icons/fc'
import {IoPersonOutline} from 'react-icons/io5'
import {GiShoppingCart} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import { NavLink } from 'react-router-dom';


function Navba({setCart,cartItems}:any) {
  const loginWidth=()=>{
         let te=document.querySelector<HTMLElement>('.logincontainer')!;
         let de=document.querySelector<HTMLElement>('.login1')!;
      let dea=document.querySelector<HTMLElement>('.app')!;

          te.style.top='-50%'
          de.style.top='-30%'
          te.style.opacity='1'
          dea.style.opacity='0.5';

          
         
  }
  const closearch=()=>{
    let sear=document.querySelector<HTMLElement>('.inputsearch')!;
    let sea=document.querySelector<HTMLElement>('.app')!;
    sear.style.display='none'
    sea.style.opacity='1'
  }
  const opensearch=()=>{
    let sear=document.querySelector<HTMLElement>('.inputsearch')!;
    let se=document.querySelector<HTMLElement>('.app')!;

    sear.style.display='block'
    se.style.opacity='0.5'
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' id='men'>
      <Container className='homerow'>
        <Navbar.Brand ><img src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><NavLink to='/' className='navlink'>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/shop' className='navlink'>Shop</NavLink></Nav.Link>
            <NavDropdown title="Pages" id="collasible-nav-dropdown">
              <NavDropdown.Item ><NavLink to='/blog' className='navlink1'>Blog</NavLink></NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to='/cart' className='navlink1'>Cart</NavLink> 
              </NavDropdown.Item>
              <NavDropdown.Item ><NavLink  to='/detail' className='navlink1'>Product detail</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
               <NavLink to='/contact' className='navlink1'>Contact</NavLink> 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link ><FcSearch size={25} onClick={()=>opensearch()}></FcSearch></Nav.Link>
            <Nav.Link  >
              <IoPersonOutline size={25} onClick={()=>loginWidth()}></IoPersonOutline>
            </Nav.Link>
            <Nav.Link ><NavLink to='/cart' className='navlink1'><GiShoppingCart style={{color:'#eeeeed'}} size={27} onClick={()=>setCart(()=>true)}></GiShoppingCart><span className='cartcount'>{cartItems.length!==0?cartItems.length:''}</span></NavLink> </Nav.Link>
          </Nav>
        </Navbar.Collapse> 
        <div className='inputsearch'><input type='text' placeholder='search'/>  <MdClose size={29} onClick={()=>closearch()} ></MdClose> </div>
      </Container>
    </Navbar>
  );
}

export default Navba;