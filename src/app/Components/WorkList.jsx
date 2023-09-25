'use client'
import React, { useEffect, useState } from 'react';
import icon from '../Components/assests/icon1.png'
const WorkList = () => {
    const [data, setData] = useState([])
    const title1=data[0]?.title
    const des1=data[0]?.des
    const title2=data[1]?.title
    const des2=data[1]?.des
    const title3=data[2]?.title
    const des3=data[1]?.des
    useEffect(() => {
        fetch('https://agency.teamrabbil.com/api/WorkList')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    },[])
    return (
        <div className='bg-white px-[128px] py-[67px]'>
            <div>
                <p className='text-xl font-semibold text-green-500'>Work List</p>
                <h3 className='font-bold text-3xl'>We provide the Perfect Solution <br /> to your business growth</h3>
            </div>


            <div className='mt-10 grid sm:grid-cols-1 md:grid-cols-3 g:grid-cols-3 gap-10'>

{/* card items */}
            <div className="shadow-xl w-fit h-fit p-8 bg-white rounded-xl flex flex-col justify-start items-start gap-12">
      <div className="flex flex-col justify-start items-start gap-6">
        <div className="p-8 bg-green-200 rounded-lg flex justify-center items-center gap-3">
          <img className="w-8 h-8" src="https://cdn.icon-icons.com/icons2/2941/PNG/512/activity_icon_183756.png" alt="Image" />
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
                            <div className="text-black text-3xl font-bold font-poppins">{title1}</div>
                            <div className="w-48 text-black text-xl font-normal font-avenir">{des1}</div>
        </div>
      </div>
      <div className="p-5 bg-gray-200 rounded-lg flex justify-start items-center gap-6">
        <div className="text-black text-xl font-normal font-avenir flex align-middle">Learn More <span><img className='w-6 h-5 mt-2' src="https://cdn.icon-icons.com/icons2/2090/PNG/512/arrow_right_icon_128385.png" alt="" /></span></div>
       
      </div>
                </div>
             
            <div className="shadow-xl w-fit h-fit p-8 bg-white rounded-xl flex flex-col justify-start items-start gap-12">
      <div className="flex flex-col justify-start items-start gap-6">
        <div className="p-8 bg-green-200 rounded-lg flex justify-center items-center gap-3">
          <img className="w-8 h-8" src="https://cdn.icon-icons.com/icons2/2944/PNG/512/heart_icon_184124.png" alt="Image" />
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
                            <div className="text-black text-3xl font-bold font-poppins">{ title2}</div>
                            <div className="w-48 text-black text-xl font-normal font-avenir">{des2}</div>
        </div>
      </div>
      <div className="p-5 bg-gray-200 rounded-lg flex justify-start items-center gap-6">
        <div className="text-black text-xl font-normal font-avenir flex align-middle">Learn More <span><img className='w-6 h-5 mt-2' src="https://cdn.icon-icons.com/icons2/2090/PNG/512/arrow_right_icon_128385.png" alt="" /></span></div>
       
      </div>
                </div>
             
            <div className="shadow-xl w-fit h-fit p-8 bg-white rounded-xl flex flex-col justify-start items-start gap-12">
      <div className="flex flex-col justify-start items-start gap-6">
        <div className="p-8 bg-green-200 rounded-lg flex justify-center items-center gap-3">
          <img className="w-8 h-8" src="https://cdn.icon-icons.com/icons2/2944/PNG/512/work_icon_184094.png" alt="Image" />
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
                            <div className="text-black text-3xl font-bold font-poppins">{title3 }</div>
                            <div className="w-48 text-black text-xl font-normal font-avenir">{des3 }</div>
        </div>
      </div>
      <div className="p-5 bg-gray-200 rounded-lg flex justify-start items-center gap-6">
        <div className="text-black text-xl font-normal font-avenir flex align-middle">Learn More <span><img className='w-6 h-5 mt-2' src="https://cdn.icon-icons.com/icons2/2090/PNG/512/arrow_right_icon_128385.png" alt="" /></span></div>
       
      </div>
                </div>
             
            </div>
        </div>
    );
};

export default WorkList;