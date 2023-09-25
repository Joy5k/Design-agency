'use client'

import React, { useEffect, useState } from 'react';

const FeaturedProject = () => {
    const [data, setData] = useState([])
    const limitedData = data.slice(0, 4); // Limiting to the first 4 items

    useEffect(() => {
        fetch("https://agency.teamrabbil.com/api/FeaturedProject")
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data);
            })
    },[])
    return (
        <div className='px-[113px] py-[60px] bg-green-100'>
            <p className='text-green-500 font-semibold'>Featured Project</p>
            <h3 className='text-3xl font-semibold'>We provide the Perfect Solution <br />to your business growth</h3>


            <div className='grid grid-cols-2 gap-10 mt-[72px]'> 
                <div className='relative h-fit mt-2'>
                    <img className='rounded-lg' src={data[0]?.image} alt="" />
            <p className='text-sm text-gray-500 mt-5'>App Design - June 20, 2022</p>
                    <p className='text-xl font-bold -mb-0 absolute'>App Redesign</p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                {
  limitedData.map((project) => (
    <div key={project.id} className="card w-fit bg-transparent p-2 shadow-sm" >
      <figure><img src={project.image} alt="Shoes" /></figure>
      <p className='text-sm text-gray-500 mt-1'>App Design - June 20, 2022</p>
      <div className="mt-2 text-start">
        <p className='text-start'>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  ))
}
 
{/*                 
    <div className="card w-fit bg-base-100 shadow-sm">
                        <figure><img src={ data[0]?.image} alt="Shoes" /></figure>
    <p className='text-sm text-gray-500 mt-1'>App Design - June 20, 2022</p>
  <div className="mt-2 text-start">
    <p className='text-start'>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
                    </div> */}
 
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;