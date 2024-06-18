import React from 'react'
import { Link } from 'react-router-dom'


function Gallery() {
    return (
        <div>
            <div class="container">
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
                <section id="gallery">
                    <div class="gallery-main">
                        <div class="gallery-box">
                            <img src="image1.jpeg" alt="" />
                            <h2>Coffee & performance</h2>
                        </div>
                        <div class="gallery-box">
                            <img src="image2.webp" alt="" />
                            <h2>Coffee & performance</h2>
                        </div>
                        <div class="gallery-box">
                            <img src="image3.jpg" alt="" />
                            <h2>Coffee & performance</h2>
                        </div>
                    </div>
                    <div class="gallery-main">
                        <div class="gallery-box">
                            <img src="image4.jpg" alt="" />
                            <h2>Coffee & performance</h2>
                        </div>
                        <div class="gallery-box">
                            <img src="image5.jpg" alt="" />
                            <h2>Coffee & performance</h2>
                        </div>
                        <div class="gallery-box">
                            <img src="image6.jpg" alt="" />
                            <h2>Coffee & performance</h2>
                        </div>
                    </div>
                </section>

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

export default Gallery