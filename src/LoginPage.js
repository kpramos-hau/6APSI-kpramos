import React, { useState } from 'react';
import './login.css';

function LoginPage() {
 
    return (
    <div className='login-page-image'>
      <div className='container'>
          <div className='login'>
              <h1 className='login-text'>Login</h1>
              <input className='textbox' type='text' placeholder='Username' autoComplete='off'></input>
              <input className='textbox' type='password' placeholder='Password' autoComplete='off' ></input>

            <div className='check'>
              <div className='remember'>
                <input type='checkbox'></input>
                <label htmlFor="remember" className='text'>Remember me</label>
                </div>
                <div>
                <strong><a id='forgot-password' href='#'>Forgot Password?</a></strong>
              </div>
            </div>
              <button className='buttons' type='submit'>Login</button>
              <p className='hero-text-2'>Don't have an account? <strong><a href='#'>Register Here.</a></strong></p>
          </div>
      </div>
    </div>
  );
}

export default LoginPage;
