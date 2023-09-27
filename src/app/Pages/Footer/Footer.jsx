import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white">
            <nav>
            <Link href="/"  className="btn btn-ghost normal-case text-xl font-bold"><span className='-mr-2'>Design</span><span className='text-red-500'>Agency</span></Link>
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
    <Link href="/"  className='hover:text-[#20B15A] hover:border-[#20B15A]'>Home</Link>
       <Link  href="/Pages/service" className='hover:text-[#20B15A] hover:border-[#20B15A]'>Service</Link>
       <Link href="/Pages/team"  className='hover:text-[#20B15A] hover:border-[#20B15A]'>Team</Link>
       <Link href="/Pages/Allprojects"  className='hover:text-[#20B15A] hover:border-[#20B15A]'>Projects</Link>
       <Link href="/Pages/Testimonial"  className='hover:text-[#20B15A] hover:border-[#20B15A]'>Testimonial</Link>
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