import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white">
            <nav>
            <header className="footer-title">Social</header> 
            <p>Some footer text about the <br />
              Agency. Just a little description to <br />
              help people understand you better</p>
    <div className="grid grid-flow-col gap-4">
      <Link href="/" className='text-green-500 text-3xl cursor-pointer'><FaFacebook></FaFacebook></Link>
      <Link href="/" className='cursor-pointer text-green-500 text-3xl'><FaLinkedinIn></FaLinkedinIn></Link>
      <Link href="/" className='text-green-500 cursor-pointer text-3xl'><FaInstagram></FaInstagram></Link>
      <Link href="/" className='text-green-500 text-3xl cursor-pointer'><FaTwitter></FaTwitter></Link>
            
            
            
            </div>
            <p className='mt-6'>Copyright Design Agency 2022</p>
  </nav>
 
 
  <nav>
    <header className="footer-title">Quick Links</header> 
    <Link href="/" className="link link-hover">Service</Link> 
    <Link href="/" className="link link-hover">Portfolio</Link> 
    <Link href="/" className="link link-hover">About Us</Link> 
    <Link href="/" className="link link-hover">Contact Us</Link>
          </nav> 
          <nav>
    <header className="footer-title ">Address</header> 
   <span>Design Agency Head Office. <br />
Airport Road <br />
United Arab Emirate</span>
  </nav> 
</footer>
        </div>
    );
};

export default Footer;