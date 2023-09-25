import React from 'react';

const WorkList = () => {
    return (
        <div className='bg-white px-[128px] py-[67px]'>
            <div>
                <p className='text-xl font-semibold text-green-500'>Work List</p>
                <h3 className='font-bold text-3xl'>We provide the Perfect Solution <br /> to your business growth</h3>
            </div>
            <div className='mt-10 grid sm:grid-cols-1 md:grid-cols-3 g:grid-cols-3'>
                <div>div1</div>
                <div>div2</div>
                <div>div3</div>
            </div>
        </div>
    );
};

export default WorkList;