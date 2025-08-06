import React from 'react'

const Contact = () => {
  return (
    <div className='w-full py-10 flex flex-col items-center sm:py-30 text-[1.5rem] sm:max-w-[60rem] sm:mx-auto'>
        <h1 className='text-sky-300 text-center text-[2rem] sm:text-[3rem] font-bold pb-5'>Connect With Me</h1>
        <p className='text-white text-center'>
            <span className='text-sky-300 font-bold'>Available for Hire.</span> I'm actively seeking opportunities in <span className='text-sky-300 font-bold'>data science</span> and <span className='text-sky-300 font-bold'>software development</span>. Whether it's a <span className='text-sky-300 font-bold'>freelance project</span>, or <span className='text-sky-300 font-bold'>full-time role</span>, I'm ready to contribute, collaborate, and grow. If you're looking for someone with skills in backend systems, UI/UX design, and data-driven decision-making—<span className='text-sky-300 font-bold'>let’s connect.</span></p>
        <a href="mailto:montano.clarencerobert@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Clarence%2C%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out...">
            <button className='text-[1.2rem] rounded-xl border border-sky-300 border-[.15rem] p-3 mt-10 text-sky-300 hover:cursor-pointer hover:bg-sky-300 hover:text-black sm:text-[1.5rem]'>
                Send Message
            </button>
        </a>
    </div>
  )
}

export default Contact