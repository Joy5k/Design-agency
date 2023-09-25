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
        <li><a>Home</a></li>
       
        <li><a>Team</a></li>
        <li><a>Service</a></li>
        <li><a>Projects</a></li>
        <li><a>Testimonial</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl font-bold"><span className='-mr-2'>Design</span><span className='text-red-500'>Agency</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:text-[#20B15A] hover:bg-transparent  hover:border-[#20B15A] hover:font-semi-bold '><a className='hover:text-[#20B15A] hover:border-[#20B15A]'>Home</a></li>
       <li><a className='hover:text-[#20B15A] hover:border-[#20B15A]'>Service</a></li>
       <li><a className='hover:text-[#20B15A] hover:border-[#20B15A]'>Team</a></li>
       <li><a className='hover:text-[#20B15A] hover:border-[#20B15A]'>Projects</a></li>
       <li><a className='hover:text-[#20B15A] hover:border-[#20B15A]'>Testimonial</a></li>
     </ul>
  </div>
  <div className="navbar-end">
    <a className="btn border border-[#20B15A] hover:bg-[#20B15A] hover:text-white">Login</a>
    <a className="btn ml-2 bg-[#20B15A] text-white hover:bg-white hover:text-[#20B15A] hover:border-[#20B15A]">Registration</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;