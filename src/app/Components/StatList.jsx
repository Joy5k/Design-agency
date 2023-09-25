'use client'
import React, { useEffect, useState } from 'react';

const StatList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://agency.teamrabbil.com/api/StatList")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    },[])
    return (
        <div className='px-[128px] py-[67px]'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div className="card bg-base-100 shadow-xl w-[250px] h-[250px]">
                <figure className="p-7 bg-green-100 w-[100px] h-[100px] mx-auto rounded-lg">
              <img src="https://cdn.icon-icons.com/icons2/154/PNG/512/men_22005.png" alt="Shoes" className="rounded-xl" />
                     </figure>
                <div className="card-body items-center text-center">
                    <p className='font-serif text-3xl'>{ data?.followers}</p>
                    <h3 className='font-bold'>followers</h3>
                         </div>
                </div>
                <div className="card bg-base-100 shadow-xl w-[250px] h-[250px]">
                <figure className="p-7 bg-green-100 w-[100px] h-[100px] mx-auto rounded-lg">
              <img src="https://cdn.icon-icons.com/icons2/1392/PNG/512/like_96682.png" alt="Shoes" className="rounded-xl" />
                     </figure>
                <div className="card-body items-center text-center">
                    <p className='font-serif text-3xl'>{ data?.solved}</p>
                    <h3 className='font-bold'>Solved</h3>
                         </div>
                </div>
                <div className="card bg-base-100 shadow-xl w-[250px] h-[250px]">
                <figure className="p-7 bg-green-100 w-[100px] h-[100px] mx-auto rounded-lg">
              <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/emoji_smile_icon_160172.png" alt="Shoes" className="rounded-xl" />
                     </figure>
                <div className="card-body items-center text-center">
                    <p className='font-serif text-3xl'>{ data?.customers}</p>
                    <h3 className='font-bold'>Happy Customers</h3>
                         </div>
                </div>
                <div className="card bg-base-100 shadow-xl w-[250px] h-[250px]">
                <figure className="p-7 bg-green-100 w-[100px] h-[100px] mx-auto rounded-lg">
              <img src="https://cdn.icon-icons.com/icons2/3863/PNG/512/scan_barcode_icon_241032.png" alt="Shoes" className="rounded-xl" />
                     </figure>
                <div className="card-body items-center text-center">
                    <p className='font-serif text-3xl'>{ data?.projects}</p>
                    <h3 className='font-bold'>Projects</h3>
                         </div>
                </div>
                

           </div>
        </div>
    );
};

export default StatList;