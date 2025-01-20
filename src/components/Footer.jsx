import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='py-16 max-w-[1240px] mx-auto px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ' >
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]' >REACT.</h1>
                <p className='pt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    molestiae delectus culpa hic assumenda.
                </p>

                <ul className="flex justify-between md:max-w-[75%] pt-5">
                   
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookSquare size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitterSquare size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                            <FaDribbbleSquare size={30} />
                        </a>
                    </li >
                </ul>

            </div>

            <div className='lg:col-span-2 flex justify-between mt-5'>
                <div>
                    <h6 className='font-bold text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer