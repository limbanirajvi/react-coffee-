import React from "react";
import { Link, } from "react-router-dom"

function Navbar() {
  return (
    <div className="container">
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
      <div class="destination__container">
        <div class="socials">
          <span>
            <i class="fa-brands fa-square-x-twitter"></i>
          </span>
          <span>
            <i class="fa-brands fa-square-facebook"></i>

          </span>
          <span>
            <i class="fa-brands fa-square-instagram"></i>
          </span>
          <span>
            <i class="fa-brands fa-youtube"></i>
          </span>
        </div>
        <div class="content">
          <h1>
            EXPLORE
            <br />
            DREAM
            <br />
            <span>DESTINATION</span>
          </h1>
          <p>
            It encourages exploration of unfamiliar territories, embracing
            diverse cultures and landscapes, while pursuing the desired
            destination that captivates the heart and ignites a sense of wonder.
          </p>
          <button class="btn" className="btn">BOOK NOW</button>
        </div>
        <div class="destination__grid">
          <div class="destination__card ">
            <img src="/pexels2.jpg" alt="destination" />
            <div class="card__content">
              <h4>10 Must-Visit Hidden Gems</h4>
              <p>
                Discover off-the-beaten-path locations and hidden gems within
                dream destinations, taking you beyond the typical tourist spots.
              </p>
              <button class="btn" className="btn">Read More</button>
            </div>
          </div>
          <div class="destination__card ">
            <img src="/pexels2.jpg" alt="destination" />
            <div class="card__content">
              <h4>Immersive Cultural Experiences</h4>
              <p>
                Dive deep into the vibrant cultures of dream destinations,
                showcasing the rituals, traditions, and local customs that make
                these places truly unique.
              </p>
              <button class="btn" className="btn">Read More</button>
            </div>
          </div>
          <div class="destination__card ">
            <img src="/pexels2.jpg" alt="destination" />
            <div class="card__content">
              <h4>From Dreams to Reality</h4>
              <p>
                Explore expert tips, and hidden gems, ensuring every moment of
                your trip is optimized, and make the most of time in your
                long-awaited dream location.
              </p>
              <button class="btn" className="btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
