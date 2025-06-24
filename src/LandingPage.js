// import React, { useState } from 'react';
import './landing.css';
import hero from './hero.jpg'

import { useNavigate } from 'react-router-dom';

function LandingPage() {
   const navigate = useNavigate();

   const handleLogin = () => {
    navigate('/LoginPage');
  };
    
  return (
    <div >
        <div className='nav-bar'>
            <div className='nav-bar-items'>
                <h1>Random</h1>
                <ul>
                    {/* will add links if needed, this stays as plaintext for now */}
                    <li>GitHub</li> 
                    <li>Sources</li>
                    <li>About</li>
                </ul>
            </div>
                <div className='nav-bar-login'>
                    <button className='button-nav' type='submit' onClick={handleLogin}>Login</button>
                </div>
        </div>
        <div className='main-content'>
            <div className='left-hero-text'>
                <h1 className='hero-text'>Oh, hi there!</h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque delectus sequi. Eaque, deleniti accusamus. Ipsam, illum! Similique mollitia, ab voluptas eius nostrum velit, unde error minima, quod nemo recusandae.</p>
                <button className='main-content-button'>Register</button>  {/* this button does not work */}
            </div>
            <div className='right-hero-image'>
                <img src={hero} width={500} className='hero-image'></img>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
