import React from 'react';
import icon from '../Components/assests/icon1.png'
const WorkList = () => {
    return (
        <div className='bg-white px-[128px] py-[67px]'>
            <div>
                <p className='text-xl font-semibold text-green-500'>Work List</p>
                <h3 className='font-bold text-3xl'>We provide the Perfect Solution <br /> to your business growth</h3>
            </div>


            <div className='mt-10 grid sm:grid-cols-1 md:grid-cols-3 g:grid-cols-3 gap-10'>
{/* card items */}
            <div className="shadow-xl w-fit h-[450px] p-8 bg-white rounded-xl flex flex-col justify-start items-start gap-12">
      <div className="flex flex-col justify-start items-start gap-6">
        <div className="p-8 bg-green-200 rounded-lg flex justify-center items-center gap-3">
          <img className="w-8 h-8" src="https://cdn.icon-icons.com/icons2/2941/PNG/512/activity_icon_183756.png" alt="Image" />
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="text-black text-3xl font-bold font-poppins">Grow Your Business</div>
          <div className="w-48 text-black text-xl font-normal font-avenir">We help identify the best ways to improve your business</div>
        </div>
      </div>
      <div className="p-5 bg-gray-200 rounded-lg flex justify-start items-center gap-6">
        <div className="text-black text-xl font-normal font-avenir flex align-middle">Learn More <span><img className='w-6 h-5 mt-2' src="https://cdn.icon-icons.com/icons2/2090/PNG/512/arrow_right_icon_128385.png" alt="" /></span></div>
       
      </div>
                </div>
             
            <div className="shadow-xl w-fit h-fit p-8 bg-white rounded-xl flex flex-col justify-start items-start gap-12">
      <div className="flex flex-col justify-start items-start gap-6">
        <div className="p-8 bg-green-200 rounded-lg flex justify-center items-center gap-3">
          <img className="w-8 h-8" src="https://cdn.icon-icons.com/icons2/2941/PNG/512/activity_icon_183756.png" alt="Image" />
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="text-black text-3xl font-bold font-poppins">Grow Your Business</div>
          <div className="w-48 text-black text-xl font-normal font-avenir">We help identify the best ways to improve your business</div>
        </div>
      </div>
      <div className="p-5 bg-gray-200 rounded-lg flex justify-start items-center gap-6">
        <div className="text-black text-xl font-normal font-avenir flex align-middle">Learn More <span><img className='w-6 h-5 mt-2' src="https://cdn.icon-icons.com/icons2/2090/PNG/512/arrow_right_icon_128385.png" alt="" /></span></div>
       
      </div>
                </div>
             
            <div className="shadow-xl w-fit h-fit p-8 bg-white rounded-xl flex flex-col justify-start items-start gap-12">
      <div className="flex flex-col justify-start items-start gap-6">
        <div className="p-8 bg-green-200 rounded-lg flex justify-center items-center gap-3">
          <img className="w-8 h-8" src="https://cdn.icon-icons.com/icons2/2941/PNG/512/activity_icon_183756.png" alt="Image" />
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="text-black text-3xl font-bold font-poppins">Grow Your Business</div>
          <div className="w-48 text-black text-xl font-normal font-avenir">We help identify the best ways to improve your business</div>
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