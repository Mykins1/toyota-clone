import React from 'react'
import Image from 'next/image'
import logo from "../../../public/images/logo.svg"
import { ChevronDown } from 'lucide-react'
const Navbar = () => {
    return (
        <header className='flex w-full items-center md:justify-around'>
            <div className='logo'>
                <Image src={logo} alt="Toyota Logo" />
            </div>

            <div></div>

            <div className='flex nav-links my-4'>
                <ul className='flex gap-4'>
                    <li className='flex gap-2'>
                        <a className='font-bold'>Vehicles</a>
                       <ChevronDown />
                    </li>
                    <li className='flex gap-2'>
                       <a className='font-bold'>Shopping</a>
                        <ChevronDown />
                    </li>
                    <li className='flex gap-2'>
                        <a className='font-bold'>Owners</a>
                         <ChevronDown />
                    </li>
                    <li></li>
                </ul>
            </div>
            
        </header>
    )
}

export default Navbar
