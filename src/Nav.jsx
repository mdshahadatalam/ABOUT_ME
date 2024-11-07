import React, { useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import logo from './assets/images/logo.png'
// import cercle from './assets/images/cercle.png'
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//  import { faXmark  } from '@fortawesome/free-solid-svg-icons'
 import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { NavLink, useLocation } from 'react-router-dom';




export const Nav = () => {

  const location = useLocation()
  

  const smallNav = useRef()
  const navb = useRef()

//  const handleClick =()=>{
//    smallNav.current.classList.add('mobileNav')
//  }
//  const ShowClick = ()=>{
//   smallNav.current.classList.remove('mobileNav')
//  }


//  window.addEventListener('scroll',()=>{
//   if(window.scrollY > 80){
//     navb.current.classList.add('sty')
// } else if (window.scrollY < 60){
//   navb.current.classList.remove('sty')
// }
//  })
 


   
 return (
    <>  

  
    
 {/* <div ref={navb}  className="navbar  shadow-lg bg-[#dce1e7] font-mono justify-center align-items-center ">
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
        className="menu menu-sm dropdown-content bg-black text-white rounded-md w-48" ref={smallNav}>
      <button onClick={handleClick} className='IconsX'><FontAwesomeIcon icon={faXmark}/></button>
      <div className='align-items-center d-flex'>
      <a href=""><img className='w-6' src={cercle} alt="" /></a> <span className='pl-2'>MD SHAHADAT ALAM</span>
      </div>
        
       <li><Link to={"/"} >HOME</Link  ></li>
      <li>
        <details>
          <summary className='text-base'>Explore</summary>
          <ul className="p-2">
          <li className='text-base'><Link to={'/images'} >Images</Link></li>
          <li className='text-base'><Link to={'/resume'} >Resume/cv</Link></li>
          </ul>
        </details>
      </li>
      <li className='text-base py-2'><Link to={"/about"} >ABOUT</Link></li>
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
       <li className='text-base'><Link to={"/projects"} >PROJECT</Link></li>
      <li className='text-base'><Link to={"/contact"} >CONTACT</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  </div>
  </div> */}
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container">
    {/* <a className="navbar-brand" href="#"><img src={logo} alt="" /></a> */}
    <button className="navbar-toggler" 
    type="button"
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample">
      {/* <span className="navbar-toggler-icon"></span> */}
      <span><HiMiniBars3BottomRight /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">

      <NavLink to={'/'}  className={`${location.pathname == '/' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link text-xl font-serif" href="#">Home</a>
        </li>
      </NavLink>

    

        <NavLink to={'/about'}  className={`${location.pathname == '/about' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item ">
          <a className="nav-link text-xl font-serif" href="#">About</a>
        </li>
      </NavLink>
        
        

    <NavLink to={'/projects'}  className={`${location.pathname == '/projects' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link text-xl font-serif" href="#">Projects</a>
        </li>
      </NavLink>


      <NavLink to={'/resume'}  className={`${location.pathname == '/resume' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link text-xl font-serif" href="#">Resume</a>
        </li>
      </NavLink>



       <NavLink to={'/contact'}   className={`${location.pathname == '/contact' ? " border-1 border-dark border-bottom" : ""} edit`}>
       <li className="nav-item">
          <a className="nav-link text-xl font-serif" href="#">Contact</a>
        </li>
       </NavLink>
        
      </ul>

      <ul className='m-0 d-flex'>
      </ul>
     
    </div>
  </div>
</nav>


{/* offcanbase  */}


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"> 
      {/* <img src={logo} className='img-fluid' alt="" />  */}
      </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <div class="dropdown mt-3">
      
    <ul className="navbar-nav m-auto mb-2 mb-lg-0">

<NavLink to={'/'}  className={`${location.pathname == '/' ? "text-danger" : ""} edit`} >
<li data-bs-dismiss="offcanvas" className="nav-item">
    <a  className="nav-link text-xl font-serif" href="#">Home</a>
  </li>
</NavLink>



  <NavLink to={'/about'}  className={`${location.pathname == '/about' ? "text-danger" : ""} edit`} >
<li data-bs-dismiss="offcanvas" className="nav-item ">
    <a className="nav-link text-xl font-serif" href="#">About</a>
  </li>
</NavLink>
  
  

<NavLink to={'/projects'}  className={`${location.pathname == '/projects' ? "text-danger" : ""} edit`} >
<li data-bs-dismiss="offcanvas" className="nav-item">
    <a className="nav-link text-xl font-serif" href="#">Projects</a>
  </li>
</NavLink>


<NavLink to={'/resume'}  className={`${location.pathname == '/resume' ? "text-danger" : ""} edit`} >
<li data-bs-dismiss="offcanvas" className="nav-item">
    <a className="nav-link text-xl font-serif" href="#">Resume</a>
  </li>
</NavLink>



 <NavLink to={'/contact'}   className={`${location.pathname == '/contact' ? "text-danger" : ""} edit`}>
 <li data-bs-dismiss="offcanvas" className="nav-item">
    <a className="nav-link text-xl font-serif" href="#">Contact</a>
  </li>
 </NavLink>
  
</ul>
    </div>
  </div>
</div>

  



    </>
  )
}
