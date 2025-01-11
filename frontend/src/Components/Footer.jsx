import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <img src={assets.logo} className="mb-5 w-32" alt="" />
                <p className='w-full sm:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos eveniet inventore consequatur dicta totam cumque fugit officiis ad pariatur nesciunt soluta numquam, blanditiis eligendi delectus at. Hic, animi quibusdam.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Priavcy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get in Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-1212-456-980</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>copyrights 2024 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer