import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contect() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        company: '',
        email: '',
        jobRole: '',
        goals: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (id, e) => {
        // console.log("hii", e.target.name, e.target.value);
        setFormData({ ...formData, [id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = {};

        if (!formData.fname) {
            newErrors.fname = "First Name is required";
            isValid = false;
        }

        if (!formData.lname) {
            newErrors.lname = "Last Name is required";
            isValid = false;
        }

        if (!formData.company) {
            newErrors.company = "Company Domain is required";
            isValid = false;
        }

        if (!formData.email) {
            newErrors.email = "Email Address is required";
            isValid = false;
        }

        if (!formData.jobRole) {
            newErrors.jobRole = "Job Role is required";
            isValid = false;
        }

        if (!formData.goals) {
            newErrors.goals = "Goals description is required";
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            // Handle form submission
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div>
            <div className="container">
                <nav>
                    <div class="nav__logo">
                        <img src="./Untitled-1.gif" alt="logo" />
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
                                <Link to="/login">Login</Link>
                            </li>
                            <li class="link">
                                <Link to="/sign">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='main-contect'>
                    <h3 className="text-white">Contact Us</h3><br />
                    <p>Let's talk about <br /> your project</p><br />
                    <h6>Drop us a line through the form below and we'll get back to you</h6><br />
                    <form onSubmit={handleSubmit}>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="inputEmail4" placeholder="First name*" value={formData.fname} onChange={(e) => handleChange('fname', e)} />
                                <div className="error">{errors.fname}</div>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="inputPassword4" placeholder="Last name*" value={formData.lname} onChange={(e) => handleChange('lname', e)} />
                                <div id="lnameError" class="error">{errors.lname}</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email Address*" value={formData.email} onChange={(e) => handleChange('email', e)} />
                                <div id="emailError" class="error">{errors.email}</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <div class="form-group ">
                                    <select id="jobRole" class="form-control" value={formData.jobRole} onChange={(e) => handleChange('jobRole', e)}>
                                        <option selected>Select Job Role*</option>
                                        <option>Account Collector</option>
                                        <option>Account Executive</option>
                                        <option>Account Manager</option>
                                        <option>Account Representative</option>
                                        <option>Accountant</option>
                                        <option>Accounting Analyst</option>
                                        <option>Accounting Director</option>
                                        <option>Accounts Payable/Receivable Clerk</option>
                                        <option>Actor</option>
                                        <option>Actuary</option>
                                        <option>Addiction Counselor</option>
                                        <option>Administrative Analyst</option>
                                        <option>Administrative Assistant</option>
                                        <option>Administrative Manager</option>
                                        <option>Application Developer</option>
                                        <option>Architect</option>
                                        <option>Archivist</option>
                                        <option>Area Sales Manager</option>
                                        <option>Artificial Intelligence Engineer</option>
                                        <option>Assistant Engineer</option>
                                        <option>Assistant Golf Professional</option>
                                        <option>Assistant Manager</option>
                                        <option>Associate</option>
                                        <option>Astronomer</option>
                                    </select>
                                    <div id="jobRoleError" class="error">{errors.jobRole}</div>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="company" placeholder="Company Domain*" value={formData.company} onChange={(e) => handleChange('company', e)} />
                                <div id="lnameError" class="error">{errors.company}</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <textarea class="form-control" id="goals" rows="3" value={formData.goals} onChange={(e) => handleChange('goals', e)} placeholder='Please tell us a bit about your goals, what are you hoping to achieve with Survicate?*'></textarea>
                                <div id="goalsError" class="error">{errors.goals}</div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">SEND</button>
                    </form>
                </div>
                <section id="footer">
                    <div class="footer">
                        <div class="footer-item">
                            <img src="pexels1.png" alt="" />
                            <p id="footer-text">Children's homework does not promote children's lives. Morbi sollicitudin eleifend rhoncus. Mauris or fans are always worried about mass cartoons.</p>
                            <button>Purchase Theme</button>
                        </div>
                        <div class="footer-item">
                            <h1>EXPLORE</h1>
                            <div class="link-main">
                                <div class="link">
                                    <a href="/" id="home" target='_top'>Home</a>
                                    <a href="/" target="_top">About</a>
                                    <a href="/" target="_top">Products</a>
                                </div>
                                <div class="link">
                                    <a href="/" target="_top">Blog</a>
                                    <a href="/" target="_top">Gallery</a>
                                    <a href="/" target="_top">Contacts</a>
                                </div>
                            </div>
                        </div>
                        <div class="footer-item">
                            <h1>CONTACT US</h1>
                            <p class="footer-text">44 Danvers, NY City, USA, 70-102</p>
                            <p class="footer-text">+10800-33-800; +10500-55-900</p>
                            <p class="footer-text2">mycoffee@mycoffeeshop.us</p>
                            <p class="footer-text2">mycoffeeshop</p>
                        </div>
                    </div>
                    <div class="footer-last">
                        <p id="footer-last-text">Like-themes <span> © All Rights Reserved - 2017</span> </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contect;
