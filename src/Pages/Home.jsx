import React, { useEffect, useRef } from 'react'
import my from '../assets/images/my.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faGamepad, faLaptopCode, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFigma, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Lottie from "lottie-react";
import whatapp from '../assets/images/whatapp.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'



export const Home = () => {

  useEffect( ()=>{
    Aos.init();
  })
   
 const showMy = useRef();
 const open = (e)=>{
  showMy.current.classList.add('active')
 }

 const DeletSec = ()=>{
  showMy.current.classList.remove('active')
 }



 const BigImg = useRef()

 const ImgBigClick = ()=>{
  BigImg.current.classList.add('Extra')
 }

 const RemoveClick =()=>{
  BigImg.current.classList.remove('Extra')
 }
 

  return (
    <>

    {/* header-section  */}


   
    <aside ref={showMy}  className="container">
      <div className='possi'>
      <button onClick={DeletSec} className='IconsY'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <img onClick={open} className='h-96 cursor-pointer' src= {my} alt="images" />
    </aside>
   


    <section id='HearderSec' className='py-4 bg-[#dce1e7] '>
      <div className="container">
        <div className="row justify-center align-items-center">
          <div className="col-lg-6 fisrtHeader">
            <h1 className='text-4xl cursor-pointer headSc' data-aos="zoom-in" data-aos-duration="1500">👋Hi I'am <span className='font-serif'>Front-End</span> Developer</h1>
            <p className='py-4 font-mono text-justify cursor-pointer' data-aos="zoom-in" data-aos-duration="1500">Iam a <b className='font-serif pro'> Professinal Front-End Developer.</b> This website Contains Design Works that I have Produced ove the past few years.Finavaricus types of design projects suchasiogo design brochure designs.product designs. website design and manymore</p>
          </div>
          <div className="col-lg-6 justify-center align-items-center d-flex ">
            <img className='img-fluid h-96 myImg shadow-md rounded-md cursor-pointer' data-aos="zoom-out" data-aos-duration="1500" onClick={open} src={my} alt="" />
          </div>
        </div>

       <div className='justify-between d-flex pt-4'>
        <div>
        <p>&copy;2024</p>
        </div>

        <div className='d-flex'>
          
          <div><a className='px-2 contact' href="https://www.facebook.com/mdshahadat.alam.35380"><FontAwesomeIcon icon={faFacebook} /></a></div>
          <div><a className='px-2 contact' href="https://github.com/mdshahadatalam"><FontAwesomeIcon icon={faGithub} /></a></div>
          <div><a className='px-2 contact' href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><FontAwesomeIcon icon={faLinkedin} /></a></div>
          <div><a className='px-2 contact' href="https://www.instagram.com/____md_shahadat_alam____?igsh=MXZleWQ2M3NjY3ZuYQ=="><FontAwesomeIcon icon={faInstagram} /></a></div>
          </div>
       </div>

      </div>
    </section>

    {/* whatIDo */}
   
    <section className='py-10 bg-[#c1baba] '>
      <div className="container">
        <h2 className='text-4xl font-bold text-center pb-5' data-aos="fade-up-right" data-aos-duration="1500">What I Do ?</h2>
        <div className="row">
          <div className="col-lg-4 pt-2">
            <div className='Box px-6 shadow-lg rounded bg-white text-black ' data-aos="fade-right" data-aos-duration="1000">
              <span className='text-2xl pt-2 pb-4 d-inline-block'><FontAwesomeIcon icon={faLaptopCode} /></span>
              <h3 className='font-serif font-bold text-1xl'>UX/UI Design</h3>
              <p className='text-justify py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati veritatis at amet mollitia nisi eos vitae eveniet expedita totam.</p>
            </div>
          </div>
          <div className="col-lg-4 pt-2">
          <div className='Box px-6 shadow-lg bg-white text-black rounded ' data-aos="zoom-in" data-aos-duration="1000">
              <span className='text-2xl pt-2 pb-4 d-inline-block'><FontAwesomeIcon icon={faGamepad} /></span>
              <h3 className='font-serif font-bold text-1xl'>Visual Gaming</h3>
              <p className='text-justify py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati veritatis at amet mollitia nisi eos vitae eveniet expedita totam.</p>
            </div>
          </div>
          <div className="col-lg-4 pt-2">
          <div className='Box px-6 shadow-lg bg-white text-black rounded '  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <span className='text-2xl pt-2 pb-4 d-inline-block'><FontAwesomeIcon icon={faFigma} /></span>
              <h3 className='font-serif font-bold text-1xl'>Figma</h3>
              <p className='text-justify py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati veritatis at amet mollitia nisi eos vitae eveniet expedita totam.</p>
            </div>
          </div>
        </div>
      </div>  
    </section>

 {/* get in tuch */}


 {/* <section ref={BigImg} className='whatappImg  container'>

 <div className='whatPossi'>
      <button onClick={RemoveClick} className='iconsWhat'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
  <img className='h-96 shadow-md rounded-md' src={whatapp} alt="images" />
 </section>

<section className='bg-[#c5bfbf] text-black py-5'>
  <div className="container">
    <ul> 
      <li className='py-4 font-serif text-end'> <span className='dot'><FontAwesomeIcon icon={faCircle} /></span> GE IN TOUCH WITH ME</li>
      </ul>
    <div className="row justify-center align-items-center">
      <div className="col-lg-6 d-flex justify-center">
        <img onClick={ImgBigClick} className='h-96 shadow-md rounded-md' src={whatapp} alt="" />
      </div>
      <div className="col-lg-6">
       <p className='text-justify font-serif py-3 cursor-pointer'>I am very interested & passionate about everything related to digital & web design.Over 1 years of experience in the design industry I have worked a lot with agencies and passionate people who want to solve problems through beautiful design.</p>

       <hr />

       <div className='d-flex justify-between py-2'>
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
 </section> */}


   

    </>
  )
}
