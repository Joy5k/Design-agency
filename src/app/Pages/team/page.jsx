'use client'
import React, { useEffect, useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import Link from 'next/link';

const Page = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://agency.teamrabbil.com/api/TeamList')
            .then(res => res.json())
            .then(data => {
              setData(data);
              console.log(data,'team list');
            })
    },[])
    return (
      <div className='px-[105px] py-67px bg-white mb-36'>
        <div className=' pb-20 pt-5 w'>
          <h1 className='text-3xl font-bold my-16'>Team</h1>
          <div className='flex align-middle'>

            <Link className='inline' href='/'>Home
            
            </Link>
            <span className='mt-1 mx-3'><HiArrowSmRight></HiArrowSmRight></span>
          <Link className='text-green-500' href='/'>Team</Link>
          </div>
        </div>
                <div className='mb-10'>
                <p className='text-xl font-semibold text-green-500'>Our Team Member</p>
                <h3 className='font-bold text-3xl'>Check our awesome team <br /> members</h3>
            </div>
        {/* cart items */}
        
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {
  data.map((team) => (
    <div key={team.id} className="card w-fit bg-transparent p-2 shadow-sm" >
      <figure><img src={team.image} alt="Shoes" /></figure>
      <div className= 'w-[150px] mx-auto -mt-12 mb-10 bg-slate-200 p-1 rounded-3xl flex justify-evenly'>
        <Link href={team?.facebook} className='cursor-pointer hover:bg-blue-600 hover:text-blue-50 p-2 hover:rounded-full'><FaFacebookF></FaFacebookF></Link>
<Link href={team?.twitter}  className='cursor-pointer hover:bg-sky-400 hover:text-blue-50 p-2 hover:rounded-full'><BsTwitter></BsTwitter></Link>
<Link href={team?.instagram}  className='cursor-pointer hover:bg-red-600 hover:text-blue-50 p-2 hover:rounded-full'><BsInstagram></BsInstagram></Link>
      </div>

      <div className="mt-2 text-start">
        <p className='text-start text-2xl font-semibold'>{ team?.name}</p>
        <p className='text-start'>{team?.bio }</p>
      </div>
    </div>
  ))
}
        </div> 







        </div>
    );
};

export default Page;