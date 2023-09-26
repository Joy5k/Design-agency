import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/" >Home</Link></li>
       
        <li><Link href="/" >Team</Link></li>
        <li><Link href="/" >Service</Link></li>
        <li><Link href="/" >Projects</Link></li>
        <li><Link href="/" >Testimonial</Link></li>
      </ul>
    </div>
    <Link href="/"  className="btn btn-ghost normal-case text-xl font-bold"><span className='-mr-2'>Design</span><span className='text-red-500'>Agency</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:text-[#20B15A] hover:bg-transparent  hover:border-[#20B15A] hover:font-semi-bold '><Link href="/"  className='hover:text-[#20B15A] hover:border-[#20B15A]'>Home</Link></li>
       <li><Link  href="/Pages/service" className='hover:text-[#20B15A] hover:border-[#20B15A]'>Service</Link></li>
       <li><Link href="/Pages/team"  className='hover:text-[#20B15A] hover:border-[#20B15A]'>Team</Link></li>
       <li><Link href="/Pages/Allprojects"  className='hover:text-[#20B15A] hover:border-[#20B15A]'>Projects</Link></li>
       <li><Link href="/Pages/Testimonial"  className='hover:text-[#20B15A] hover:border-[#20B15A]'>Testimonial</Link></li>
     </ul>
  </div>
  <div className="navbar-end">
    <Link href="/"  className="btn border border-[#20B15A] hover:bg-[#20B15A] hover:text-white">Login</Link>
    <Link href="/"  className="btn ml-2 bg-[#20B15A] text-white hover:bg-white hover:text-[#20B15A] hover:border-[#20B15A]">Registration</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;