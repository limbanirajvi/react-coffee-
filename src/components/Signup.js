import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error when user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password and confirm password must match!';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem('formData', JSON.stringify(formData));

      console.log('Form submitted:', formData);
      navigate('/login');
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
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <label>Email:-</label><br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <div className="error">{errors.email}</div>
          </div>
          <div className="user-box">
            <label>Password:-</label><br />
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            <div className="error">{errors.password}</div>
          </div>
          <div className="user-box">
            <label>Confirm Password:-</label><br />
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            <div className="error">{errors.confirmPassword}</div>
          </div>
          <button type="submit" className="lorem1">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
