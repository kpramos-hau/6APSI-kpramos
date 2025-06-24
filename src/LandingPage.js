import React, { useState } from 'react';
import './landing.css';

function LandingPage() {
 
  return (
    <div className='nav-bar'>
        <div className='nav-bar-items'>
            <h1>Random</h1>
            <ul>
                <li>GitHub</li>
                <li>Sources</li>
                <li>About</li>
            </ul>
        </div>
            <div className='nav-bar-login'>
                <button className='button-nav'>Login</button>
            </div>
    </div>
  );
}

export default LandingPage;
