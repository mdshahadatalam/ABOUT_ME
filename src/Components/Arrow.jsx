import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


export const Arrow = () => {

 const ArrowSmallShow = useRef()

 window.addEventListener('scroll',()=>{
    if(window.scrollY >80){
       ArrowSmallShow.current.classList.add('ShowArrow')
    } else if(window.scrollY < 80){
        ArrowSmallShow.current.classList.remove('ShowArrow')  
    }
 })

  return (
    <>
    <div ref={ArrowSmallShow} className='ArrowDrop '>
    <a href="#HearderSec"><FontAwesomeIcon icon={faChevronUp} /></a>
    </div>
    </>
  )
}
