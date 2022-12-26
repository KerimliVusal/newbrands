import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import React from "react";
import {TfiShoppingCart} from 'react-icons/tfi';
import {AiFillHeart} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import sli5 from './product8.png.webp';
import sli7 from './product7.png.webp';
import sli4 from './product4.png.webp';
import sli3 from './liked1.webp';
import sli11 from './liked2.webp';
import sli10 from './liked3.webp';
import sli2 from './liked4.webp';
import sli1 from './slide5.webp';
import sli12 from './slide3.webp';
import sli6 from './product1.png.webp';
import sli9 from './product3.png.webp';
import sli8 from './product5.png.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { CartItemType } from './App';
import Cart from './cart';

export const product:any=[
  {id:1,
  url:sli1,
 name:'Cashmere Tank + Bag',
cost:'98$ 120$',
title:'Watch',
size:'XS',
price:90,
amount:1
},
{id:2,
  url:sli2,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 title:'Acessories',
 size:'S',
 price:70,
amount:1



},
{id:3,
  url:sli3,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 title:'Men',
 size:'M',
 price:40,
amount:1



},
{id:4,
  url:sli4,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 title:'Women',
 size:'Xl',
 price:76,
amount:1



},
{id:5,
  url:sli5,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 title:'Tend',
 size:'XXl',
 price:30,
amount:1



},
{id:6,
  url:sli6,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 title:'Winter collection',
 price:48,
amount:1


},
{id:7,
  url:sli7,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 price:76,
amount:1

},
{id:8,
  url:sli8,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 price:95,
amount:1

},
{id:9,
  url:sli9,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 price:'66$',
amount:1

},
{id:10,
  url:sli10,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 price:45,
amount:1

},
{id:11,
  url:sli11,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 price:75,
amount:1

},
{id:12,
  url:sli12,
  name:'Cashmere Tank + Bag',
 cost:'98$ 120$',
 price:57,
amount:1

},
]
type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};


 const Shop: React.FC<Props>=({ cartItems, addToCart, removeFromCart })=>{

    const calculateTotal = (items: CartItemType[]) =>
      items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
   

const marks = [
  {
    value: 10,
    label: '100$',
  },
  {
    value: 150,
    label: '200$',
  },
  {
    value: 300,
    label: '400$',
  },
  {
    value: 500,
    label: '500$',
  },
];

function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
    
   

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option:any) => option.title,
        
      });
    
    return(<Container fluid>
        <Row className='shopentrance p-5'><Col ><h2>Shop</h2>
        <p>Home | Shop</p></Col></Row>
        <Row lg={2} xs={1} sm={1} className='m-5'>
            <Col lg={3} className='mt-5'>
                <Row lg={1} xs={1} sm={1}>
            <Col>
            <Autocomplete
      id="filter-demo"
      options={product}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Product filter"  />}
    /></Col>
   
   <Col className='my-4'>
   <Autocomplete
      id="filter-demo"
      options={product}
      getOptionLabel={(option) => option.name}
      filterOptions={filterOptions}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Filter by Type" />}
    />
   </Col>
   <Col className='my-4'>
   <Autocomplete
      id="filter-demo"
      options={product}
      getOptionLabel={(option) => option.size}
      filterOptions={filterOptions}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Filter by Size" />}
    />
   
   </Col>
   <Col className='my-4'>
    <p style={{color:'#616161'}}>Filter by Color</p>
    <p style={{color:'#616161'}}>Search for color</p>
       <div> <input type='color' value='#f6f500' className='inputcolor'/></div>
    <div className='inputcolor12'>
        <p style={{color:'#616161',marginTop:'10px'}}>Default colors</p>
    <input type='radio'  className='inputcolor1'/>
    <input type='radio'  className='inputcolor2'/>
    <input type='radio'  className='inputcolor3'/>
    <input type='radio'  className='inputcolor4'/>
    <input type='radio'  className='inputcolor5'/>
    </div>
   </Col>
   <Col>
   <p style={{color:'#616161'}}>Filter By price</p>
   <Box sx={{ width: 200 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={200}
        valueLabelFormat={valueLabelFormat}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        min={0}
        max={500}
      />
    </Box>
   </Col>
            
           </Row>
           </Col>
          
            
            <Col lg={9}>
        <Row  xs={1} sm={1} lg={3} className='slide2img m-5' >
            { product.map((shop:any,index:number)=>
            <Col  className="body-selection-item my-2" key={index} ><div className="body-selection-item-image"><img src={shop.url} width='100%' height='100%'/><div className='shopicon'><span className='shopiconspan'><AiFillHeart size={25}></AiFillHeart></span><span className='shopiconspan'><TfiShoppingCart size={25} onClick={() => addToCart(shop)}></TfiShoppingCart></span><span className='shopiconspan'><BsSearch size={25}></BsSearch></span></div></div></Col>
       
        ) }     
         </Row>
        </Col>
      
        </Row>
        </Container>

    )
}; export default Shop