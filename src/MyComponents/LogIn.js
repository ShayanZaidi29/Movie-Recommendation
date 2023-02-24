import React,{useState} from 'react';
import "./LogIn.css";

const LogIn = () =>{

  const[popupStyle,showPopUp] = useState("hide")
  const popups = () =>{
    showPopUp("login-popup")
    setTimeout(() => showPopUp("hide"), 3000);
  }
  return(
    <div className='cover'>
      <h1>Login</h1>
      <input type="text" placeholder='Username'/>
      <input type="password" placeholder='Password'/>
      <div className='login-btn' onClick={popups}>LogIn</div>
      <p className='text'>or Login using</p>
      <div className='alt-login'>
        <div className='facebook' id='fb'></div>
        <div className='google' id='g'></div>
        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>
      </div>
    </div>
  )
} 

export default LogIn