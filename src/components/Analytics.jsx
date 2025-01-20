import React from 'react'
import Laptop from "../../public/laptop.jpg"
const Analytics = () => {
    return (
        <div className='py-16 text-black w-full bg-white px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center' >
                    <p className='text-[#00DF9A] font-bold '>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-xl  font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </p>
                    <button className='my-6 mx-auto md:mx-0 py-3 bg-[#000300] w-[200px]   rounded-md font-bold text-[#00DF9A] '>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics