import React from 'react'
import { AiFillInstagram} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='slide-up scroll-mt-24 pb-2 pt-20 sm:pt-30 flex flex-col items-center'>
         <div className='flex gap-5 pb-5 sm:hidden'>
            <AiFillInstagram color='white' size='1.4rem'/>
            <FaFacebookF color='white' size='1.4rem'/>
            <FaLinkedinIn color='white' size='1.4rem'/>
            <FaGithub color='white' size='1.4rem' />
        </div>
        <h1 className='text-center text-sky-300'>Made by Clarence Robert Montano</h1>
    </div>
  )
}

export default Footer