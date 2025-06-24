import React, { useState } from 'react';
import './login.css';

function LoginPage() {
 
  return (
    <div className='main-container'>
      <div className='container'>
        <h1>Login</h1>
        <input
        className='textbox'
          type="text"
          placeholder="Username"
        
        /><br />
        <input
          className='textbox'
          type="password"
          placeholder="Password"

        /><br />
        <button className='login-button' >Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
