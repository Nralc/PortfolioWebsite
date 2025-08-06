import React from 'react'
import { AiFillInstagram} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const LeftBar = () => {
  return (
    <div className='hidden sm:flex sm:flex-col sm:items-center sm:gap-10 sm:fixed bottom-0'>
            <AiFillInstagram color='white' size='1.75rem'/>
            <FaFacebookF color='white' size='1.75rem'/>
            <FaLinkedinIn color='white' size='1.75rem'/>
            <FaGithub color='white' size='1.75rem' />
            <div className='border-l-2 border-white h-30'></div>
    </div>
  )
}

export default LeftBar