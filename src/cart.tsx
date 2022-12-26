import {Col,Row,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {product} from './shop'
import { CartItemType } from './App';
type Props={
    cartItems:CartItemType;
}
const Cart:React.FC<any>=({cartItems ,removeFromCart,addToCart})=>{
    return(<Container>
        <Row lg={1} xs={1} sm={1}>
            <Col>
            {cartItems.length?
             cartItems.map((pro:any,index:number)=>
                <Row key={index} lg={3} xs={3} sm={3}> 
            <Col lg={4} xs={6} className='cart1 p-2'><div ><img src={pro.url} width='150px'/></div><div>{pro.name}</div></Col>
            <Col lg={3} xs={3} className='cart2 '><div className='cart3'><button  onClick={() => removeFromCart(pro.id)}>-</button><div>{pro.amount}</div><button onClick={() => addToCart(pro)}>+</button></div></Col>
            <Col lg={3} xs={3} className='cart2 '>{pro.price}$</Col>
             </Row>
):
<Col  className='ecart'><p className='emptycart'>Cart is Empty</p></Col>
}
</Col>
        </Row>
    </Container>
    );
};export default Cart