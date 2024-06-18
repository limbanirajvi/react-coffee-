import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (field, event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const storedData = JSON.parse(localStorage.getItem('formData'));

      if (storedData && storedData.email === formData.email && storedData.password === formData.password) {
        console.log('User logged in successfully');
        navigate('/product');
      } else {
        newErrors.password = 'User not found or incorrect password';
      }
    } else {
      console.log('Form has errors, cannot submit.');
    }
  };

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
        <div class="search">
          <input type="tex" placeholder="Search" />
          <span>
            <i class="ri-search-line"></i>
          </span>
        </div>
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
        <div class="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} id="Myform">
            <div className="user-box">
              <label>Your Email*</label><br />
              <input type="email" name="" value={formData.email} onChange={(e) => handleChange('email', e)} />
              <div className="error">{errors.email}</div>
            </div>
            <div className="user-box">
              <label>Password*</label><br />
              <input type="password" name="" required="" value={formData.password} onChange={(e) => handleChange('password', e)} />
              <div className="error">{errors.password}</div>
            </div>
            <button type="submit" className="lorem1">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
