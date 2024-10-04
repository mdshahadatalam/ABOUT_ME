import React from 'react'
import Ashikur from '../assets/images/projectIImg/Ashikur.png'
import birthday from '../assets/images/projectIImg/birthday.png'
import ecobazar from '../assets/images/projectIImg/ecobazar.png'
import foot from '../assets/images/projectIImg/foot.png'
import node from '../assets/images/projectIImg/node.png'
import online from '../assets/images/projectIImg/online.png'
import simple from '../assets/images/projectIImg/simple.png'

export const Project = () => {
  return (
   <>
   

   <section id='HearderSec' className='AboutSec h-64'>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className='text-start font-serif pt-24 AboutMe'>My Projects</h1>
          <li className='font-serif'>Hi I'am Front-End Developer.</li>
          <li className='font-serif'>I love coding.</li>
          <li className='font-serif'>I code part of the day.</li>
        </div>
      </div>
    </div>
   </section>


   {/* project-Section  */}
   <section className='py-10 bg-[#c1c5c7]'>
    <div className="container">
      <div className="row justify-center align-items-center ProjectRes">
        <div className="col-md-4 ProjectSet">
          <div className=''>
            <a href="https://mdshahadatalam.github.io/Ashikur-Landing-page/"><img className='img-fluid  w-[373px] shadow-lg rounded-md' src={Ashikur} alt="image" /></a>
          </div>
           <a href="https://mdshahadatalam.github.io/Ashikur-Landing-page/">  <h3 className='text-md font-serif py-2 project  '>Ashikur-Page</h3> </a>        
          
        </div>
        <div className="col-md-4 ProjectSet">
          <div>
            <a href="https://note-book-umber.vercel.app/"><img className='img-fluid  w-[373px] shadow-lg rounded-md' src={node} alt="image" /></a>
          </div>
          <a href="https://note-book-umber.vercel.app/"> <h3 className='text-md font-serif py-2  project '>Node-Book</h3></a>
        </div>
        <div className="col-md-4 ProjectSet">
          <div>
           <a href="https://mdshahadatalam.github.io/class-16/"> <img className='img-fluid   w-[373px] shadow-lg rounded-md ' src={ecobazar} alt="image" /></a>
          </div>
         <a href="https://mdshahadatalam.github.io/class-16/">  <h3 className='text-md font-serif py-2 project  '>Ecobazar-Page</h3></a>
        </div>
      </div>



      <div className="row justify-center align-items-center ProjectRes pt-4">
        <div className="col-md-4 ProjectSet">
          <div className=''>
            <a href="https://mdshahadatalam.github.io/Birthday-countdown/"><img className='img-fluid  w-[373px] shadow-lg rounded-md' src={birthday} alt="image" /></a>
          </div>
           <a href="https://mdshahadatalam.github.io/Birthday-countdown/">  <h3 className='text-md font-serif py-2 project'>Birthday count</h3> </a>        
          
        </div>
        <div className="col-md-4 ProjectSet">
          <div>
            <a href="https://mdshahadatalam.github.io/simple-cart"><img className='img-fluid  w-[373px] shadow-lg rounded-md' src={simple} alt="image" /></a>
          </div>
          <a href="https://mdshahadatalam.github.io/simple-cart/"> <h3 className='text-md font-serif py-2  project '>Shopping Card</h3></a>
        </div>
        <div className="col-md-4 ProjectSet">
          <div>
            <a href="https://food-first-project.vercel.app/"><img className='img-fluid   w-[373px] shadow-lg rounded-md ' src={foot} alt="image" /></a>
          </div>
         <a href="https://food-first-project.vercel.app/">  <h3 className='text-md font-serif py-2 project  '>Donation page</h3></a>
        </div>
      </div>
    </div>
   </section>
   </>
  )
}
