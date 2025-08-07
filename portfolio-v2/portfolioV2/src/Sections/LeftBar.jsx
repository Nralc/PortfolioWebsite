import React from 'react'
import { AiFillInstagram} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const LeftBar = () => {
  const socIcons = ['AiFillInstagram', 'FaFacebookF', 'FaLinkedinIn', 'FaGithub'];
  return (
    <div className='slide-up scroll-mt-24 hidden xl:flex xl:flex-col xl:items-center xl:gap-10 xl:fixed bottom-0'>
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
            <div className='border-l-2 border-white h-30'></div>
    </div>
  )
}

export default LeftBar