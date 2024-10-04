import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import laptop from '../assets/images/laptop.jpg'
import scan from '../assets/images/scan.jpg'

export const Footer = () => {

 const ShowScan = useRef();

 const CrossScan = ()=>{
  ShowScan.current.classList.add('crossScan')
 }

 const DltScan =()=>{
    ShowScan.current.classList.remove('crossScan')
 }

  return (
    <>
   

   <section  ref={ShowScan} className='scan'>
    <div className='scanBt'>
    <button onClick={DltScan} className='scanIcon'><FontAwesomeIcon icon={faXmark}/></button>
    </div>
    <img className='w-64 rounded-md shadow-md' src={scan} alt="" />
          
   </section>

    <section className='bg-black text-white py-5'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 py-2  d-flex justify-between">
                    <div>
                    <h1 className='lets'>Let's Talk!</h1>
                    </div>
                    <div>

                        <div className=' strat w-20 h-20 bg-[#808080] justify-center align-items-center text-center d-flex shadow-md  '>
                            <button onClick={CrossScan} ><p className='text-black text-sm font-serif strat'>STRAT A PROJECTS</p></button>
                        </div>
                    </div>
                </div>
                </div>
                <hr />

                <div className="row py-2 ">
                    <div className="col-lg-2">
                        <span className='text-xl font-serif'><FontAwesomeIcon icon={faGlobe} /> Creast </span>
                    </div>
                    <div className="col-lg-2 font-serif">
                        <h2 className='text-2xl py-2'>Pages</h2>
                        <p className='footerText text-[#808080] '><Link to={"/"} >Home</Link  ></p>
                        <p className='footerText text-[#808080] '><Link to={"/about"} >About</Link></p> 
                        <p className='footerText text-[#808080] '> <Link to={"/blogs"} >Blogs</Link> </p>
                        <p className='footerText text-[#808080] '> <Link to={"/projects"} >Project</Link> </p>
                        <p className='footerText text-[#808080] '> <Link to={"/contact"} >Contact</Link> </p> 
                        
                    </div>
                    <div className="col-lg-2 font-serif pb-2 ">
                      <h2 className='text-2xl py-2'>Social</h2>
                      <p className='socialText text-[#808080] '><a href="https://www.facebook.com/mdshahadat.alam.35380">Facebook</a></p>
                      <p className='socialText text-[#808080] '><a href="https://github.com/mdshahadatalam">Github</a></p>
                      <p className='socialText text-[#808080] '><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">Linkedin</a></p>
                      <p className='socialText text-[#808080] '><a href="https://www.instagram.com/____md_shahadat_alam____?igsh=MXZleWQ2M3NjY3ZuYQ==">Instagram</a></p>
                    </div>
                    <div className="col-lg-6 d-flex justify-center">
                        <img className='h-64 img-fluid' src={laptop} alt="laptop images" />
                    </div>
                </div>
                <hr />


                <div className="row py-3 font-serif justify-center align-items-center">
                    <div className="col-lg-3">
                        <h3 className='text-[#808080] pb-2'>Address</h3>
                        <p>Bangladesh,Chittagong</p>

                    </div>
                    <div className="col-lg-3">
                        <h3 className='text-[#808080] pb-2'>Email</h3>
                        <p>mdshahadatalam25@gmail.com</p>
                    </div>
                    <div className="col-lg-2">
                        <h3 className='text-[#808080] pb-2'>Phone</h3>
                        <p>01917380230</p>
                        <span>or</span>
                        <p>01323630337</p>
                    </div>
                    <div className="col-lg-4">
                    <p>&copy;2024||MDSHAHADAT ALAM</p>
                    </div>
                </div>


        </div>
    </section>
    
    </>
  )
}
