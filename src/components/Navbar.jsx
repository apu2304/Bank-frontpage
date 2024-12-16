import React from 'react'
import { useState } from 'react'
import {close, logo,menu } from '../assets'
import {navLinks} from '../constanse/Index'
import { use } from 'react'
export default function Navbar() {
  const [toogle, setToggle] = useState(false)
  return (
    <div>
      <nav className='w-full flex py-6 justify-between items-center navbar'>
         <img src={logo} alt="Logo"  className='w-[124px] h-[32px]'/>
         <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
           {navLinks.map((nav,index) => (
            <li key={nav.id} className={`font-poppins font-normal 
            cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} text-white mr-10`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
           ))}
         </ul>
         <div className="sm:hidden flex flex-1 justify-end items-center mt-0">
         <img src={toogle ? close : menu} alt="menu" className='w-[28px] h[28px] object-contain'
         onClick={() => setToggle((prev) => !prev)}/>
         <div className={`${toogle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-center items-center flex-1'>
          {navLinks.map((nav,index) => (
            <li key={nav.id} className={`font-poppins font-medium 
            cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-white mr-10`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
           ))}
          </ul>
         </div>

      </div>
      </nav>
    </div>
  )
}
