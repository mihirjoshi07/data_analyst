import React from 'react'
import { ReactTyped } from 'react-typed'
const Hero = () => {
    return (
        <div className='text-white  '>
            <div className="max-w-[800px] mt-[-96px]  w-full h-screen  text-center mx-auto flex flex-col justify-center   ">
                <p className='md:text-3xl sm:text-2xl text-xl text-[#00df90] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                <div className='flex justify-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4 pr-1'>Fast, Flexible, Financing for</p>
                    {/* Use the Typed component correctly */}
                    <ReactTyped
                        className='md:text-4xl sm:text-3xl text-xl font-bold py-4 '
                        strings={['BTB', 'BTC', 'SAAS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:tex-2xl  text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SAAS platforms</p>
                <button className='my-6 mx-auto py-3 bg-[#00df90] w-[200px] rounded-md font-old text-black '>Get Started</button>
            </div>
        </div>
    )
}

export default Hero