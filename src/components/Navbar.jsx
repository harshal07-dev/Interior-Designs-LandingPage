import React from 'react'
import { useState } from 'react'
import logo from "../assets/logo.webp"
import { IoMdClose  } from "react-icons/io";
import {LINKS}  from "../constants/index.js"
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
    const [navOpen , setNavOpen] = useState(false)
    const toggleMenu = () => {
        setNavOpen(!navOpen);
    }
  return (
    <nav className='border-b-2 '>
        <div className="max-w-7xl mx-auto flex py-8 justify-between items-center">
                <div className="pl-2">
                    <a href="#">
                        <img src={logo} alt="vastuspace" className='h-5' />
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className='text-2xl pr-2 focus:outline-none' aria-label={setNavOpen ? "Open menu" : "close menu"}>
                        {navOpen ? <IoMdClose /> :  <RiMenu3Fill/>}
                    </button>
                </div>
                <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
                    {LINKS.map((link, index) => (
                        <a href={link.link} key={index} className='uppercase text-md font-medium hover:scale-105 hover:font-bold'>{link.name}</a>
                    ))}
                </div>
        </div>
                {/* mobile navlink  */}
                <div className={`${navOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-2`}>
                    {LINKS.map((link, index) => (
                        <a href={link.link} key={index} className='uppercase 
                        text-lg font-medium block py-2 tracking-wide'>
                            {link.name}
                        </a>
                    ))}
                </div>
    </nav>
  )
}

export default Navbar