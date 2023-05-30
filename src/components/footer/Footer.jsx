import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from  'react-icons/fa'
import {ImTwitter} from 'react-icons/im'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Musodiq</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook"><FaFacebookF/></a>
        <a href="https://instagram"><FaInstagram/></a>
        <a href="https://twitter.com/home"><ImTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Musodiq</small>
      </div>
    </footer>
  )
}

export default Footer