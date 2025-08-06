import React from 'react'
import { ChevronRight } from "lucide-react";

const Stack = () => {
  return (
    <div className='w-full py-10 sm:py-30 sm:max-w-[60rem] sm:mx-auto'>
        <div className='text-sky-300 font-bold text-[.8rem] sm:grid sm:grid-cols-[1fr_2fr] sm:text-center'>
            <h1 className='text-[1.5rem] pb-5 underline decoration-wavy decoration-yellow-500 underline-offset-8'>SKILLS</h1>
            <div className='grid grid-cols-2 gap-10 sm:grid-cols-4 sm:text-start'>
                <div>
                    <h1 className='text-[1.5rem] text-sky-300 pb-3'>Frontend</h1>
                    <ul className='text-[1.3rem] font-thin text-sky-100 flex flex-col gap-5'>
                        <li className='flex items-center gap-2'><ChevronRight size="20px" color="#c5a32b" />HTML</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />CSS</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />JS</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />React</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Tailwind</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Vite</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />WordPress</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Responsive Design</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[1.5rem] text-sky-300 pb-3'>Backend</h1>
                    <ul className='text-[1.3rem] font-thin text-sky-100 flex flex-col gap-5'>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Python</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Java</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />PHP</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />C++</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Firebase Auth</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Real-Time Synch</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />API Integration</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[1.5rem] text-sky-300 pb-3'>Database & Others</h1>
                    <ul className='text-[1.3rem] font-thin text-sky-100 flex flex-col gap-5'>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />SQL</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />MySQL</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Firebase (NoSQL)</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Excel</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Tableau</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[1.5rem] text-sky-300 pb-3'>Concepts</h1>
                    <ul className='text-[1.3rem] font-thin text-sky-100 flex flex-col gap-5'>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Agile Dev</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Secure Coding</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Debugging</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Troubleshoot</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Documentation</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Cloud Infrastructure</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />PL/SQL Basics</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Client-Server</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />CRUD</li>
                        <li className='flex items-center gap-2'><ChevronRight size="1.2rem" color="#c5a32b" />Modularity</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stack