import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useState } from 'react'
const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center  h-24 max-w-[1240px] mx-auto px-4 text-white  '>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]' >REACT.</h1>
            <ul className='hidden  md:flex '>
                <li className='p-4 '><a href="">Home</a></li>
                <li className='p-4' ><a href="">Company</a></li>
                <li className='p-4'><a href="">Resources</a></li>
                <li className='p-4'><a href="">About</a></li>
                <li className='p-4'><a href="">Contact</a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

            </div>

            <div className={!nav ? '  ease-in-out duration-500 fixed left-0 top-0 w-[60%] border-r border-r-gray-700 h-full bg-[#000300] md:hidden' : 'fixed left-[-100%] '}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4' >REACT.</h1>
                <ul className=' uppercase p-4 '>
                    <li className='p-4 border-b'>Home</li>
                    <li className='p-4 border-b' >Company</li>
                    <li className='p-4 border-b'>Resources</li>
                    <li className='p-4 border-b'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar