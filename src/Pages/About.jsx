import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faGamepad, faLaptopCode, faSchool, faXmark } from '@fortawesome/free-solid-svg-icons'
import whatapp from '../assets/images/whatapp.jpg'
import { faCss3, faFigma, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import my from '../assets/images/my.jpg'
import html from '../assets/images/html.webp'
import css from '../assets/images/css.jpeg'
import tailcss from '../assets/images/tailcss.jpg'
import boot from '../assets/images/boot.png'
import js from '../assets/images/js.webp'
import react from '../assets/images/react.png'
import high from '../assets/images/education/h.png.png'
import cmt  from '../assets/images/education/cm.png.png'
import com from '../assets/images/education/c.png.png'

import Aos from 'aos'
import 'aos/dist/aos.css'



export const About = () => {

  useEffect( ()=>{
    Aos.init();
  })


  const BigImg = useRef()

 const ImgBigClick = ()=>{
  BigImg.current.classList.add('Extra')
 }

 const RemoveClick =()=>{
  BigImg.current.classList.remove('Extra')
 }


 const showMy = useRef();
 const open = (e)=>{
  showMy.current.classList.add('active')
 }

 const DeletSec = ()=>{
  showMy.current.classList.remove('active')
 }


  return (
    <>

   {/* aboutMe  */}
   <section id='HearderSec' className='AboutSec h-64'>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className='text-start font-serif pt-24 AboutMe'>About Me</h1>
          <li className='font-serif'>Hi I'am Front-End Developer.</li>
          <li className='font-serif'>I love coding.</li>
          <li className='font-serif'>I code part of the day.</li>
        </div>
      </div>
    </div>
   </section>



   <aside ref={showMy}  className="container">
      <div className='possi'>
      <button onClick={DeletSec} className='IconsY'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <img onClick={open} className='h-96 cursor-pointer' src= {my} alt="images" />
    </aside>

  {/* personalInformation  */}
  <section className='py-5 bg-[#e3dad7] '>
    <div className="container">
      <div className="row">
        <div className="col-lg-5 d-flex justify-center">
         <img  className='img-fluid h-96 myImg shadow-md rounded-md cursor-pointer' onClick={open}  src={my} alt="" />
        </div>
        <div className="col-lg-7">
          <p className='text-xl font-serif text-[#808080] text-justify pt-2' >I’m a  UI/UXX Designer and Developer. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
      
          <div className="row pt-5">
            <div className="col-lg-6">
             <p className='text-xl font-serif text-[#808080] py-2 '>Name : <span className='text-black'>Md Shahadat Alam</span> </p>
             <p className='text-xl font-serif text-[#808080] py-2 '>Experience : <span className='text-black'>1 Years</span></p> 
             <p className='text-xl font-serif text-[#808080] py-2 '>Phone : <span className='text-black'>01323630337</span></p> 
             
            </div>
            <div className="col-lg-6">
            <p className='text-xl font-serif text-[#808080] py-2 '>Langages : <span className='text-black'>English,Hindi</span> </p> 
            <p className='text-xl font-serif text-[#808080] py-2 '>Email : <span className='text-black'>mdshahadatalam25@gmail.com</span></p> 
            
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>




    <section ref={BigImg} className='whatappImg  container'>

      <div className='whatPossi'>
         <button onClick={RemoveClick} className='iconsWhat'><FontAwesomeIcon icon={faXmark}/></button>
     </div>
       <img className='h-96 shadow-md rounded-md' src={whatapp} alt="images" />
   </section>

<section  className='bg-[#c5bfbf] text-black py-5'>
 <div className="container">
   <ul className='align-items-center'> 
     <li className='py-4 font-serif text-end' data-aos="fade-right" data-aos-duration="1000"> <span className='dot'><FontAwesomeIcon icon={faCircle} /></span> GE IN TOUCH WITH ME</li>
     </ul>
   <div className="row justify-center align-items-center">
     <div className="col-lg-6 d-flex justify-center">
       <img onClick={ImgBigClick} className='h-96 shadow-md rounded-md img-fluid' data-aos="zoom-in" data-aos-duration="1000" src={whatapp} alt="" />
     </div>
     <div className="col-lg-6">
      <p className='text-justify font-serif py-3 cursor-pointer'
       data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">I am very interested & passionate about everything related to digital & web design.Over 1 years of experience in the design industry I have worked a lot with agencies and passionate people who want to solve problems through beautiful design.</p>

      <hr />

      <div className='d-flex justify-between py-2'
       data-aos="fade-up"
     data-aos-duration="2000">
             <div>
                  <h3 className='font-serif text-xl font-bold'>30+</h3>
                  <p className='font-serif'>Projects</p>
             </div>

             <div>
                 <h3 className='font-serif text-xl font-bold' >1+</h3>
                 <p className='font-serif' >Years of Experience</p>
             </div>
      </div>

     </div>
   </div>
 </div>
</section>

{/* skills section */}

<section className='py-14'>
  <div className="container cursor-pointer ">
  <h1 className='text-3xl font-serif text-center py-3' data-aos="zoom-in">Skills</h1>
    <div className="row justify-center align-items-center">
      <div className="col-lg-2 shadow-md rounded-md"
       data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

        <div className='text-center justify-center d-flex '>
          <img  className='img-fluid w-14 shadow-md rounded-md py-2 skillImg' src={html} alt="" />
        </div>
        <h3  className='text-center py-2 font-serif skillImg'>HTML5</h3>
      </div>

      <div className="col-lg-2 shadow-md rounded-md "
       data-aos="fade-up"
     data-aos-duration="2000">
        <div className=' justify-center d-flex'>
        <img className='img-fluid w-14 shadow-md rounded-md py-2 skillImg' src={css} alt="" />
        </div>
        <h3 className='text-center py-2 font-serif skillImg'>CSS3</h3>
      </div>
      <div className="col-lg-2 shadow-md rounded-md " 
       data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className='justify-center d-flex'>
        <img className='img-fluid w-14 shadow-md rounded-md py-[12px] skillImg' src={tailcss} alt="" />
        </div>
        <h3 className='text-center py-2 font-serif skillImg'> TAILWIND CSS</h3>

      </div>
      <div className="col-lg-2 shadow-md rounded-md "
      data-aos="fade-up"
      data-aos-duration="2000">
        <div className='justify-center d-flex'>
        <img className='img-fluid w-14 shadow-md rounded-md py-2 skillImg' src={boot} alt="" />
        </div>
        <h3 className='text-center py-3 font-serif skillImg'> BOOTSTRAP</h3>

      </div>
      <div className="col-lg-2 shadow-md rounded-md "
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
       <div className='justify-center d-flex'>
       <img  className='img-fluid w-14 shadow-md rounded-md py-[10px] skillImg'src={js} alt="" />
       </div>
        <h3 className='text-center py-2 font-serif skillImg'>JAVASCRIPT</h3>

      </div>
      <div className="col-lg-2 shadow-md rounded-md " 
      data-aos="fade-up"
      data-aos-duration="2000">
        <div className='justify-center d-flex'>
        <img className='img-fluid w-14 shadow-md rounded-md py-2 skillImg' src={react} alt="" />
        </div>
        <h3 className='text-center py-2 font-serif skillImg'>REACT.JS</h3>

      </div>
    </div>
  </div>
</section>

{/* skillRang  */}

<section className='py-12'>
  <div className="container">
    <h1 className='text-2xl font-serif text-center' data-aos="zoom-in">Skills Rang</h1>
    <div className="row">
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-2"  data-aos="zoom-in" data-aos-duration="1000">
        <div>
          <h4 className='text-md font-serif'>HTML5</h4>
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: '95%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              95%
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-2"  data-aos="zoom-in" data-aos-duration="1000">
        <div>
          <h4 className='text-md font-serif'>CSS3</h4>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: '95%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              95%
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-2"  data-aos="zoom-in" data-aos-duration="1000">
        <div>
          <h4 className='text-md font-serif'>TAILWIND CSS</h4>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: '95%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>
      </div>
    </div>
 

    <div className="row pt-2 pb-2">
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-2"  data-aos="zoom-in" data-aos-duration="1000">
        <div>
          <h4 className='text-md font-serif'>BOOTSTRAP</h4>
          <div className="progress">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: '95%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              95%
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-2"  data-aos="zoom-in" data-aos-duration="1000">
        <div>
          <h4 className='text-md font-serif'>JAVASCRIPT</h4>
          <div className="progress">
            <div
              className="progress-bar bg-gray-500"
              role="progressbar"
              style={{ width: '95%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-2"  data-aos="zoom-in" data-aos-duration="1000">
        <div>
          <h4 className='text-md font-serif'>REACT.JS</h4>
          <div className="progress">
            <div
              className="progress-bar bg-slate-950 "
              role="progressbar"
              style={{ width: '95%'}}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


 {/* EducationDetails-Offline */}
 <section className='py-8 pb-20 bg-[#eaedef] '>
  <div className="container">
    <h2 className='text-3xl text-center font-serif py-5' data-aos="zoom-in"  data-aos-duration="1500" >Education Statues</h2>
    <div className="row justify-center align-items-center">
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" data-aos="fade-right" data-aos-duration="1500">

        <a href=" https://locator.eduportalbd.com/institutes/?ins=104477">     
        <div className='education  rounded-md shadow-md  bg-[#cdd5df]'>
          <div className='d-flex justify-center'>
            <span className='school'><FontAwesomeIcon icon={faSchool} /></span>
          </div>
          <div>
            <h4 className='text-center font-serif py-2 text-xl'>Charlokhsya Union High school</h4>
          </div>
        </div>
        </a>

      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-duration="1500">

        <a href="https://chattogram.polytech.gov.bd/">
        <div className='education  rounded-md shadow-md bg-[#cdd5df]'>
          <div className='d-flex justify-center ' >
            <img className='img-fluid w-24 py-3' src={com} alt="images" />
          </div>
          <h4 className='text-center font-serif py-[10px] text-xl'>Chittagong Polytechnic Institute</h4>
        </div>
        </a>

      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" data-aos="fade-left" data-aos-duration="1500">

        <a href="https://chattogram.polytech.gov.bd/site/page/5ff5ce47-e0f8-4019-89c6-6f2b5e598e8d/-">
        <div  className='education   rounded-md shadow-md  bg-[#cdd5df] '>
          <div className='d-flex justify-center'>
            <img className='img-fluid w-24 py-[10px] ' src={cmt} alt="images" />
          </div>
          <h4 className='text-center font-serif py-[14px] text-xl'>Diploma-computer Science and Technology</h4>
        </div>
        </a>

      </div>
    </div>
  </div>
</section>
  


    </>
  )
}
