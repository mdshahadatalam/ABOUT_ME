import React from 'react'

export const Cv = () => {
  return (
    <>
    <section id='HearderSec' className='AboutSec h-64'>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className='text-start font-serif pt-24 AboutMe'>My Resume</h1>
          {/* <li className='font-serif'>Hi I'am Front-End Developer.</li>
          <li className='font-serif'>I love coding.</li>
          <li className='font-serif'>I code part of the day.</li> */}
        </div>
      </div>
    </div>
   </section>


   <div className='justify-center d-flex py-20 bg-[#808080]'>
    
<button
    className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-serif  tracking-tighter text-black bg-gray-300 rounded-lg group">
  <span
      className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
  <span
      className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-300"></span>
  <span className="relative text-text group-hover:text-white">Download Cv</span>
</button>
              
   </div>
    </>
  )
}
