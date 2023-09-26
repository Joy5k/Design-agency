"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';

const Page = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://agency.teamrabbil.com/api/AllProject")
      .then(res => res.json())
      .then(data => {
        setData(data)
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
          <Link className='text-green-500' href='/Pages/ALLprojects'>Projects</Link>
          </div>
            </div>
            
            <div className='mb-10 py-[80px]'>
                <p className='text-xl font-semibold text-green-500'>All Projects</p>
                <h3 className='font-bold text-3xl'>We Provide BestWeb design <br /> services</h3>
        </div>

        {/* cart Items */}
        <div className='grid  grid-cols-1 lg:grid-cols-2 gap-8'>
          {
            data.map((project) => (
              <Link href={project?.live} key={project.id} className="card card-compact cursor-pointer w-fit bg-base-100 shadow-xl mb-5">
                <figure><Link href={project?.live}><img src={project?.image } alt="Shoes" /></Link></figure>
              <div className="card-body">
                  <h2 className="card-title">{ project?.title}</h2>
              </div>
            </Link>
            ))
      }
        </div>
        </div>
    );
};

export default Page;