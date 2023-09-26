"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';

const Page = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://agency.teamrabbil.com/api/AllService")
      .then(res => res.json())
      .then(data => {
        setData(data)
      ;
      })
  },[])
  return (
    <div className='px-[100px] '>
          <div className=' pb-20'>
          <h1 className='text-3xl font-bold my-16'>Services</h1>
          <div className='flex align-middle'>

            <Link className='inline' href='/'>Home
            
            </Link>
            <span className='mt-1 mx-3'><HiArrowSmRight></HiArrowSmRight></span>
          <Link className='text-green-500' href='/Pages/services'>Services</Link>
          </div>
        </div>

        <div className='mb-10 py-[80px]'>
                <p className='text-xl font-semibold text-green-500'>Our All Services</p>
                <h3 className='font-bold text-3xl'>We Provide BestWeb design <br /> services</h3>
        </div>

        {/* cart Items start */}

        <div>
          <div>

        
            <div  className='grid grid-cols-2 gap-8  mt-5'>
            {
                data.map((services) => (
                  <div key={services.id} className='shadow-lg  rounded-2xl bg-white w-[535px] h-[500px]'>
                  <div>
                      <h2 className='text-2xl font-semibold mb-2'>{services.title }</h2>
                      <p className='text-gray-500'>{services.des } </p>
            </div>
                  
    <div  className='w-full px-4'>
      <div className='flex flex-wrap'>
        <img
          className='w-[310px] h-[150px]  p-2 object-cover rounded-4xl '
          src={services?.image1}
          alt=''
        />
        <img
          className='w-[150px] h-[150px] md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none'
          src={services?.image2}
          alt=''
        />
      </div>
      <div className='flex flex-wrap lg:mb-4 lg:mr-6'>
        <img
          className='w-1/2 h-[260px] p-2 object-cover lg:rounded-6xl'
          src={services?.image3}
          alt=''
        />
        <img
          className='w-1/2 h-[260px]  p-2 object-cover lg:rounded-xl'
          src={services?.image4}
          alt='Image'
        />
      </div>
    </div>
                </div>
    
  ))
}

            </div>
          </div> 
      </div>
        </div>
    );
};

export default Page;