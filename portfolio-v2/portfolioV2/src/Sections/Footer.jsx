import React from 'react'
import { AiFillInstagram} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='slide-up scroll-mt-24 pb-2 pt-20 sm:pt-30 flex flex-col items-center'>
         <div className='flex gap-5 pb-5 xl:hidden'>
            <a href="https://www.instagram.com/_arenrobert/">
              <AiFillInstagram color='white' size='1.75rem'/>
            </a>
            <a href="https://www.facebook.com/clarencerobert.montano/">
              <FaFacebookF color='white' size='1.75rem'/>
            </a>
            <a href="https://www.linkedin.com/in/clarence-robert-montaño-721207230">
              <FaLinkedinIn color='white' size='1.75rem'/>
            </a>
            <a href="https://github.com/Nralc">
              <FaGithub color='white' size='1.75rem'/>
            </a>
        </div>
        <h1 className='text-center text-sky-300'>Made by Clarence Robert Montano</h1>
    </div>
  )
}

export default Footer