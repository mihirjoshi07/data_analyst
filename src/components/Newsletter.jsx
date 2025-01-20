import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16  text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 md:text-left sm:text-center '>
                    <h1 className='md:text-4xl sm:text-2xl font-bold text-xl '>Want tips and tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder="Enter Email"  />
                        <button className='bg-[#00df9A] text-black rounded-md ml-4 my-2 px-14  py-3 font-medium'>Notify </button>
                        
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#00df9A]'>Privacy Policy</span></p>
                </div>

            </div>
        </div>
    )
}

export default Newsletter