import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/images/logo.png'
import cercle from './assets/images/cercle.png'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faXmark  } from '@fortawesome/free-solid-svg-icons'



export const Nav = () => {

  const smallNav = useRef()
  const navb = useRef()

 const handleClick =()=>{
   smallNav.current.classList.add('mobileNav')
 }
 const ShowClick = ()=>{
  smallNav.current.classList.remove('mobileNav')
 }


 window.addEventListener('scroll',()=>{
  if(window.scrollY > 80){
    navb.current.classList.add('sty')
} else if (window.scrollY < 60){
  navb.current.classList.remove('sty')
}
 })
 


   
 return (
    <>  
 <div ref={navb}  className="navbar  bg-[#dce1e7] font-mono justify-center align-items-center ">
       <div className="navbar-start">
    <div className="dropdown">
      <div  tabIndex={0} role="button" onClick={ShowClick} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-slate-200 rounded-md w-48" ref={smallNav}>


      {/* <span className='IconsX'><FontAwesomeIcon icon={faXmark}/></span> */}
      <button onClick={handleClick} className='IconsX'><FontAwesomeIcon icon={faXmark}/></button>
      <div className='align-items-center d-flex'>
      <a href=""><img className='w-6' src={cercle} alt="" /></a> <span className='pl-2'>MD SHAHADAT ALAM</span>
      </div>
        
       <li><Link to={"/"} >HOME</Link  ></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li className='text-base py-2'><Link to={"/about"} >ABOUT</Link></li>
      {/* <li className='text-base py-2'><Link to={"/blogs"} >BLOGS</Link></li> */}
      <li className='text-base py-2'><Link to={"/projects"} >PROJECT</Link></li>
      <li className='text-base py-2'><Link to={"/contact"} >CONTACT</Link></li>
      </ul>
    </div>
    <a><img className='w-14 rounded-sm img-fluid celcleImg' src={cercle} alt="" /></a>
  </div>
  <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='text-base'><Link to={"/"} >HOME</Link  ></li>
      <li>
        <details>
          <summary className='text-base'>Explore</summary>
          <ul className="p-2">
            <li className='text-base'><Link to={'/images'} >Images</Link></li>
            <li className='text-base'><Link to={'/resume'} >Resume/cv</Link></li>
          </ul>
        </details>
      </li>
      <li className='text-base'><Link to={"/about"} >ABOUT</Link></li>
      {/* <li className='text-base'><Link to={"/blogs"} >BLOGS</Link></li> */}
      <li className='text-base'><Link to={"/projects"} >PROJECT</Link></li>
      <li className='text-base'><Link to={"/contact"} >CONTACT</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn btn">Button</a> */}
    {/* <a><img className='w-14 rounded-sm img-fluid ' src={cercle} alt="" /></a> */}
  </div>
</div>



    </>
  )
}
