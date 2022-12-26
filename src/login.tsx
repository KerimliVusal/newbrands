import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {MdClose} from 'react-icons/md'

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other"
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}
const Login1=()=>{
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    const close=()=>{
        let clo=document.querySelector<HTMLElement>('.logincontainer')!;
        let det=document.querySelector<HTMLElement>('.login1')!;
        let dea=document.querySelector<HTMLElement>('.app')!;
        det.style.top='-150%'
         clo.style.top='-150%'
         clo.style.opacity='1'
         dea.style.opacity='1'

        

    }
    return(
        <Container className='logincontainer' fluid>
            <Row lg={1} className='loginrow'>
            
            <Col lg={5} className='login1 p -5 my-5'><span className='closebtn'><MdClose className='closebtn1' onClick={()=>close()}></MdClose></span>
                <h2>Login</h2>
            <p style={{textAlign:'center'}}>Enter Login details to get access</p>
            <div className='login3'>
            <p>Username Or Email Address</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Enter email' {...register("firstName")} required/>
            </form>
            </div>
            <div className='login3'>
            <p>Password</p>
            <input type='password' placeholder='Enter passwrod' required/>
            </div>
            
           <div className='login4'><div className='loginbox'> <input type='checkbox' /><h6>Keep Me Logged In</h6></div> <p>Forgot password?</p></div>
           <div className='login5'>
            <p >Dont Have an Account? <span>Sign up here</span></p>
            <button onClick={()=>onSubmit}>Login</button></div>
            </Col>
        
        
            
        </Row>
        </Container>
    );
};
export default Login1