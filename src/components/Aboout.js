import React from 'react'
import { Link } from 'react-router-dom'

function About() {
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
        <div className='Hii'>
          <img src='cofee.webp' class="main-img"></img>
          <p className="lorem">Our mission since we started has stayed simple: introduce our customers to the estates we directly buy our great tasting coffee from, roast <br /> the beans with care, and make high quality coffee more accessible through our cafes and our website. The coffee we roast is the coffee we <br /> like to drink, and we hope you like it too.</p>
          <br />
          <li className='font'>At Blue Tokai Coffee Roasters, we follow a simple set of beliefs.</li>
          <li className='font'>TRANSPARENCY IS MUCH MORE THAN JUST WHERE WE GET OUR BEANS FROM.</li>
          <p className='lorem'>The first thing we did when we started our company was to highlight our award winning farms. This idea of transparency organically evolved <br /> to the way we worked in other areas too - our baristas are always present to discuss brewing tips, our customer service team are there to walk <br /> you through your coffee questions, and our roasting team to show you how they work.</p><br />
          <li className='font'>A CULTURE OF CONSTANT LEARNING IS THE KEY TO ALWAYS PUSHING COFFEE FORWARD.</li>
          <p className='lorem'>We are consistently researching, testing and implementing best practices throughout our business to raise the bar. Making refractometers <br /> essential for our cafe brewing, holding advanced sensory learnings for junior roasters, and experimenting with processing at the farm level are <br /> just some of the ways that our highly skilled team is constantly evolving the way Indian coffee is treated, experienced or communicated <br /> about.</p><br />
          <li className='font'>SOURCING THE BEST COFFEE BEANS DOES NOT GUARANTEE GOOD COFFEE.</li>
          <p className='lorem'>Although we have a dedicated sourcing team for green beans and have invested in establishing quality roasting parameters, we know that a lot <br /> more steps still have to fall into place to brew a good cup. This is why we have worked hard to create coffee training centres to impart leading <br /> procedures such as equipping baristas with assessing and reporting tools for precision brewing, and cupping every single batch that is roasted <br /> to ensure consistent quality.</p>
        </div>
        <section id="footer">
                <div class="footer">
                    <div class="footer-item">
                        <img src="pexels1.png" alt=""/>
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

export default About
