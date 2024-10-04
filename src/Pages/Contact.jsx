import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
   <>
   <section id='HearderSec' className='AboutSec h-64'>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className='text-start font-serif pt-24 AboutMe'>Contact Me</h1>
          <li className='font-serif'>Hi I'am Front-End Developer.</li>
          <li className='font-serif'>I love coding.</li>
          <li className='font-serif'>I code part of the day.</li>
        </div>
      </div>
    </div>
   </section>


   {/* contact-section  */}

   <section className='py-14'>
    <div className="container">
     <div className="row">
      <div className="col-lg-4">
        <div className="row cursor-pointer">
          <div className="row-lg-4">
            <div className='d-flex align-items-center pt-4'>
              <span className='contactIcon'><FontAwesomeIcon icon={faLocationDot} /></span>
              <div className='ps-2'>
                <h3 className='text-3xl font-serif'>Address</h3>
                <p className=' font-serif text-[#595858] '>Chittagong,Chittagong Division</p>
              </div>
            </div>
          </div>
          <div className="row-lg-4">
            <div className='d-flex align-items-center pt-4'>
            <span className='contactEmail'><FontAwesomeIcon icon={faEnvelope} /></span>
            <div className='ps-2'>
                <h3 className='text-3xl font-serif'>Email</h3>
                <p className=' font-serif text-[#595858] '>mdshahadatalam25@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="row-lg-4">
            <div className='d-flex align-items-center pt-4'>
            <span className='contactPhone'><FontAwesomeIcon icon={faPhoneVolume} /></span>

            <div className='ps-2'>
                <h3 className='text-3xl font-serif'>Phone</h3>
                <p className=' font-serif text-[#595858] '>01323630337</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <form action="">

          
       <label className="relative w-[80%] mt-3">
           <input type="text" name="name" id="name" className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
               />
              <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                 Your name
              </span>
       </label>

       <label className="relative w-[80%] mt-3">
           <input type="email" name="email" id="email" className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
               />
              <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                 Your Email
              </span>
       </label>

       <label className="relative w-[80%] mt-3">
           <input type="number" name="number" id="number" className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
               />
              <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                 Your Phone
              </span>
       </label>
       <label className="relative w-[80%] mt-3">
           <input type="text" name="Subject" id="subject" className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
               />
              <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                 Your Subject
              </span>
       </label>
                
          {/* <input className='InFrom' type="text" name="name" id="" placeholder='Your Name' />
          <input className='InFrom' type="email" name="email" id="" placeholder='Your Email' /> <br />
          <input className='InFrom' type="number" name="phone" id="" placeholder='Your Phone' />
          <input className='InFrom' type="text" name="subject" id="" placeholder='Your subject' /> */}
          
             <label className="relative w-[80%] mt-3 ">
               <textarea
                 name="name"
                 id="name"
                 className="peer border-[#e5eaf2] border rounded-md outline-none px-4 min-h-[200px] py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                       />
                    <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                              Write something about here
                    </span>
                </label>
         

          <div>
          

          
      <button
           className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
      <span
          className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg className="w-5 h-5 text-green-400" fill="none" stroke="#3B9DF8" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
    </span>
         <span
        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="#fff" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Send Me</span>
      </button>
              
          </div>
          </form>
      </div>
     </div>
    </div>
   </section>

   </>
  )
}
