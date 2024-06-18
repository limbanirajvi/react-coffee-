import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Product() {
  return (
    <>
      <nav>
        <div class="nav__logo">
          <img src='./Untitled-1.gif' alt="logo" />
        </div>
        <ul class="nav__links">
          <li class="link">
            <Link to="/">Home</Link>
          </li>
          <li class="link">
            <Link to="/About">About</Link>
          </li>
          <li class="link">
            <Link to="/Contect">Contect</Link>
          </li>
          <li class="link">
            <Link to="/Gallery">Gallery</Link>
          </li>
        </ul>
        
        <div class="login">

          <ul class="nav__links">
            <li class="link">
              <Link to="/login">Login </Link>
            </li>
            <li class="link">
              <Link to="/sign">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <h1 class="text-white text-center">YOUR SUCESSFULLY</h1>
      </div>
    </>
  )
}

export default Product