import React from 'react';

const Subscription = () => {
    return (
        <div className='text-center items-center my-10'>
            <div className=''>
            <p className='text-green-500 text-sm text-center mb-4 font-bold'>SUBSCRIBE</p> 
                <h3 className='text-3xl	font-bold	'>Subscribe to get the latest <br /> news about us</h3>
                <span className='text-gray-500'>Please drop your email below to get daily update about what we do</span>
                <div className="form-control">
 
                </div>

                <div className="input-group items-center mx-auto text-center mt-10">
                    <div className='p-1 px-3 mx-auto align-middle flex justify-center '>
                    <input type="email" placeholder="Enter Your email" className="input input-bordered rounded-r-none" />
                        <button className="btn bg-[#F55F1D] rounded-r-full w-36 p-1">
    SUBSCRIBE
    </button>
</div>
  </div>
            </div>
            
        </div>
    );
};

export default Subscription;