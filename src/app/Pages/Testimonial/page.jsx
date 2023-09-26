'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';

const Page = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://agency.teamrabbil.com/api/TestimonialList")
            .then(res => res.json())
            .then(data=>setData(data))
    },[])
    return (
        <div className='px-[100px] mb-40'>
       <div className=' pb-20'>
          <h1 className='text-3xl font-bold my-16'>Testimonial</h1>
          <div className='flex align-middle'>

            <Link className='inline' href='/'>Home
            
            </Link>
            <span className='mt-1 mx-3'><HiArrowSmRight></HiArrowSmRight></span>
          <Link className='text-green-500' href='/Pages/Testimonial'>Testimonial</Link>
          </div>
            </div>
            
            <div className='mb-10 py-[80px]'>
                <p className='text-xl font-semibold text-green-500'>Testimonial List</p>
                <h3 className='font-bold text-3xl'>Better Agency/SEO Solution At <br /> Your Fingertips</h3>
            </div>
            
            {/* cart items */}
            <div className='grid sm:grid-cols-1 lg:grid-cols-3  gap-10'>
                {
                    data.map((singleData) => (
                        <div key={singleData.id} className="card w-fit bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10 ">
                                <img src={singleData?.image} alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p className='text-sm text-gray-600'>{ singleData?.msg}</p>
                                <h2 className="card-title font-bold">{singleData.name }</h2>
                                <p className='font-semibold '>{singleData?.designation }</p>
                            </div>
                        </div>
                    ))
        } 
            </div>

        </div>
    );
};

export default Page;