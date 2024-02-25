import React from 'react';
import '../Footer.css';

export default function Footer() {
  return (
   
    <div className='Footer'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 col-lg-5 col-12 ft-1'>
    <div className="footer-section">
            <h3><span>About</span> Us</h3>
            <p className='text-start'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam voluptate error doloremque, ratione molestiae magnam reprehenderit perferendis. Provident, eius blanditiis optio tempora nam quia totam corrupti assumenda error dicta.
            </p>
            <div className='footer-icons'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
    </div>
    <div className='col-md-6 col-lg-3 col-12 ft-2'>
      <h5>Quick Links</h5>
      <ul>
      <li className='nav-item'><a href="/home">Home</a></li>
              <li className='nav-item'><a href="/aboutus">About Us</a></li>
              <li className='nav-item'><a href="/gallery">Gallery</a></li>
              <li className='nav-item'><a href="/rooms">rooms</a></li>
              <li className='nav-item'><a href="/contactus">Contact Us</a></li>   
      </ul>
    </div>
    <div className='col-md-6 col-lg-4 col-12 ft-3'>
    <h5>Contact Info</h5>
    <p><i className="fa-sharp fa-solid fa-paper-plane"></i> 87/3, Urmodi Backwaters, A/P Ntral, Tal: Satara, Maharashtra.</p>
    <p><i className="fa-solid fa-envelope"></i> yashrajrestro@gmail.com</p>
    <p><i className="fa-sharp fa-solid fa-phone-volume"></i> +91 9865975452</p>
    </div>
    </div>
    </div>
  </div>
  );
}
