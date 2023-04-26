import React from "react";
import "../footer.css";
import da_logo from "../data/Logo.png"

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span className="header-logo">
            <img src={da_logo} alt="pic" height={100}/>
          </span>
        </h3>

        <p className="footer-links">
          <a href="/" className="link-1">
            Home
          </a>

          <a href="/AboutUs">About</a>

          <a href="/Login">Login</a>

          <a href="/ContactUs">Contact</a>
        </p>

        <p className="footer-company-name">DAIICT Corp © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <p>
            <span>DAIICT-campus, Reliance Cross Rd</span>Gandhinagar, Gujarat
            382007
          </p>
        </div>

        <div>
          <br />
          <p>+91.5555555555</p>
        </div>

        <div>
          <p>
            <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Our website provides information of professional acheivement and contact of
          faculties of multiple universities.
        </p>

        <div className="footer-icons">
          <a href="facebook.com" className="footer-logo">
            <img src="https://i.ibb.co/ZxC8NCp/Facebook.png" alt="pic" />
          </a>
          <a href="instagram.com" className="footer-logo">
            <img src="https://i.ibb.co/4VXznmP/Instagram.png" alt="pic" />
          </a>
          <a href="#linkedin" className="footer-logo">
            <img src="https://i.ibb.co/tzsnHYJ/LinkedIn.png" alt="pic" />
          </a>
          <a href="#twitter" className="footer-logo">
            <img src="https://i.ibb.co/nb69Q63/Twitter.png" alt="pic" />
          </a>
        </div>
      </div>
    </footer>
  );
}