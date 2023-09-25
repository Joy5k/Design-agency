"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import google from '../../../public/google.png'
const Hero = () => {
    
    const [data, setData] = useState([])
    const img1=data?.image1
    const img2=data?.image2
    const img3=data?.image3
    const img4 = data?.image4
    const description=data?.description
    const title = data?.title;
    useEffect(() => {
        fetch('https://agency.teamrabbil.com/api/HeroList')
            .then(res => res.json())
            .then(data => {
                console.log(data, 'Data');
                setData(data);
            })
    },[])
    return (
        <div>
            <section className='relative bg-green-100 mb-10'>
                <div className='relative pt-12 lg:pt-20 pb-20 z-10'>
                    <div className='container mx-auto px-4'>
                        <div className='flex flex-wrap -mx-4'>
                            <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center'>
                                <div className='w-full text-center lg:text-left'>
                                    <div className='max-w-md mx-auto lg:mx-0'>
                                        <h2 className='mb-3 text-4xl lg:text-5xl font-bold font-heading'>{title}
                                        </h2>
                                    </div>
                                    <div className='max-w-sm mx-auto lg:mx-0'>
                                        <p className='mb-6 text-gray-400 leading-loose'>{description }
                                        </p>
                                        <div>
                                            <Link className='inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200' href='#'>Get Started</Link>
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2 px-4'>
                                <div className='flex flex-wrap lg:mb-4 lg:ml-6'>
                                   
                                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none' src={img1} alt='' />
                                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none' src= {img2} alt=''/>
                                </div>
                                <div className='flex flex-wrap lg:mb-4 lg:mr-6'>
                                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover lg:rounded-6xl' src={img3}   alt=''/>
                                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover lg:rounded-xl' src={img4} alt='Image'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4 bg-white p-8 h-[120px] relative grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 px-auto align-middle justify-center">
                    <img className="ml-8 w-24 h-7" src="https://bit.ly/462iNQV" alt="" />
                    <img className=" w-24 h-7" src="https://rewind.com/wp-content/uploads/2021/03/trello-logo-gradient-blue@2x-e1616511446344-300x84.png" alt="" />
                  
                    
                    <img className=" w-24 h-7" src="https://s29.q4cdn.com/881027206/files/design/monday-logo-x2.png" alt="" />
                    
                    <img className=" w-24 h-7" src="https://i0.wp.com/get.site/wp-content/uploads/2021/10/notion-logo.png?ssl=1" alt="" />

                    <img className=" w-24 h-7" src="https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg" alt="" />
                    
                </div>
            </section>
        </div>
    );
};

export default Hero;