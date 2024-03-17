import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import './App.css'

export function App() {
  const [count, setCount] = useState('');
  let captchaRef=useRef(null);
const navigate = useNavigate()
const [type, setType] = useState('password');
const [icon, setIcon] = useState(eyeOff);

 const check_Password = async (event) => {
  const captchaValue = captchaRef.current.getValue()
    event.preventDefault();

    if (!captchaValue) {
      //if catcha value is null, send a alert
      alert('Please verify the reCAPTCHA!')
    } 
    else {
      // else ,make form submission
    const username = event.target[0].value;
    const password = event.target[1].value;
    console.log(event);

  const response = await fetch(`http://localhost:3000/auth?username=${username}&password=${password}`, {
    method: 'GET',
 });
   const temp = await response.json();
    if(temp.count==='1')
    navigate('/home')
    else
    setCount(temp.count);

    
   
   
  };
  
     
    }
    const handleToggle = () => {
      if (type==='password'){
         setIcon(eye);
         setType('text')
      } else {
         setIcon(eyeOff)
         setType('password')
      }
   }
  
    

    
  
 
  return (
    
 
  
    <div className="align">
     
     
      <div className="form">  
      <h2>Welcome</h2>
        <form onSubmit={check_Password}>
          
           
            <input type="text" id="uname" placeholder='Email' />
            
 <span className="password"><input type={type} id="password" placeholder='Password' />
            <Icon  icon={icon} size={18} onClick={handleToggle}/></span>
  <div className="recaptcha">
  <ReCAPTCHA
    sitekey="6LcH83gpAAAAACWynyRs6NDhI8p6--OU_gO4Xe7o" ref={captchaRef} />
    </div>

            
          
          <input type="submit" id="submit"  value="SIGN IN" />
        </form>
        {count === '0' ? <p id="invalid">Invalid username or password</p>:<a href="" id="forgot">Forgot password</a>} 

      </div> 
     </div> 
    )
}

