import React from 'react'

const Experience = () => {
  return (
    <div className='w-full py-10 sm:py-30 sm:max-w-[60rem] sm:mx-auto'>
        <div className='text-sky-300 font-bold text-[.8rem] sm:grid sm:grid-cols-[1fr_2fr] sm:text-center'>
            <h1 className='text-[1.5rem] pb-5 underline decoration-wavy decoration-yellow-500 underline-offset-8'>EXPERIENCE</h1>
            <div className='text-[1.3rem] flex flex-col gap-10'>
                
                <div className='sm:grid sm:grid-cols-[2fr_5fr] backdrop-blur-xl bg-white/2 p-10 rounded-2xl shadow-lg'>
                    <h1 className='text-left font-thin text-sky-100'>Mar 2025 – May 2025</h1>
                    <div>
                        <h1 className='text-left pb-5'>UI/UX - Web Development Intern <span>@ Baybayin Hub PH</span></h1>
                        <p className='text-justify font-thin text-sky-100'>
                            Designed and developed a full-stack queuing system for a coffee shop business, 
                            resolving UI/UX bugs and backend logic errors in real-time using PHP and MySQL. 
                            Collaborated with stakeholders and documented key changes to ensure client-facing consistency. 
                            Managed multiple WordPress sites, applying support workflows to streamline updates and resolve site deployment issues. 
                        </p>
                    </div>
                </div>

                <div className='sm:grid sm:grid-cols-[2fr_5fr] backdrop-blur-xl bg-white/2 p-10 rounded-2xl shadow-lg'>
                    <h1 className='text-left font-thin text-sky-100'> Aug 2024 – Feb 2025 </h1>
                    <div>
                        <h1 className='text-left pb-5'>Lead Mobile Developer <span>@ LPU-Batangas</span></h1>
                        <p className='text-justify font-thin text-sky-100'>
                            Built and maintained the LearnWise Android app from the ground up, featuring flashcards, Pomodoro timers, forums, and customizable profiles using Firebase. 
                            Developed a web-based admin dashboard (CSS, HTML, JS, Chart JS) with CRUD functionality and data visualization for content and user management. 
                            Handled end-to-end debugging, performance optimization, and version control while coordinating with UI/UX team to ensure a smooth user 
                            experience.
                        </p>
                    </div>
                </div>

                <div className='sm:grid sm:grid-cols-[2fr_5fr] backdrop-blur-xl bg-white/2 p-10 rounded-2xl shadow-lg'>
                    <h1 className='text-left font-thin text-sky-100'>Aug 2023 – Dec 2023</h1>
                    <div>
                        <h1 className='text-left pb-5'>Secretary <span>@ LPU Batangas CCAS Student Council</span></h1>
                        <p className='text-justify font-thin text-sky-100'>
                            Managed and organized council documents, reports, and meeting minutes with accuracy 
                            Coordinated logistics and communication for university-wide events, ensuring smooth student engagement 
                            Facilitated collaborative planning with council officers and department heads to implement campus initiatives 
                        </p>
                    </div>
                </div>

                <div className='sm:grid sm:grid-cols-[2fr_5fr] backdrop-blur-xl bg-white/2 p-10 rounded-2xl shadow-lg'>
                    <h1 className='text-left font-thin text-sky-100'>Feb 2021</h1>
                    <div>
                        <h1 className='text-left pb-5'>Data Analytics Intern <span>@ Yazaki Torres Manufacturing Incorporated</span></h1>
                        <p className='text-justify font-thin text-sky-100'>
                            Triaged large datasets to surface actionable insights using Excel and Tableau, supporting business decisions 
                            Investigated data anomalies and applied validation techniques to maintain data integrity 
                            Presented findings using storytelling, enabling clear understanding across technical and non-technical teams 
                        </p>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Experience