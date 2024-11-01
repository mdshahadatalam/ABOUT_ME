import React, { useRef } from 'react'
import whatapp2 from '../assets/images/myImages/whatapp2.jpg'
import farewel from '../assets/images/myImages/farewel.jpg'
import farewel2 from '../assets/images/myImages/farewel 2.jpg'
import farewel3 from '../assets/images/myImages/farewel3.jpg'
import farewel4 from '../assets/images/myImages/farewel4.jpg'
import farewel5 from '../assets/images/myImages/farewel5.jpg'
import whatapp6 from '../assets/images/myImages/whatapp6.jpg'
import whatapp7 from '../assets/images/myImages/whatapp7.jpg'
import whatapp8 from '../assets/images/myImages/whatapp8.jpg'
import whatapp9 from '../assets/images/myImages/whatapp9.jpg'
import tra from '../assets/images/myImages/tra.jpg'
import my from '../assets/images/my.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'



export const Images = () => {



  const farewelShow = useRef()
  const whatApped2 = useRef()
  const farewelMy = useRef()
  const farewel3My =  useRef()
  const farewelAll = useRef()

  const whatAppDlt9MyPic = useRef()
  const whatAppMy8 = useRef()
  const whatApp7My = useRef()



  const opened = ()=>{
  farewelShow.current.classList.add('active')
  }

  const farewelDlt = ()=>{
    farewelShow.current.classList.remove('active')
  }

  const opened2 = ()=>{
    whatApped2.current.classList.add('active')
  }

  const whatAppDlt =()=>{
    whatApped2.current.classList.remove('active')
  }

  const opened3 = ()=>{
    farewelMy.current.classList.add('active')
  }
  const farewelMyDlt = ()=>{
    farewelMy.current.classList.remove('active')
  }

  const opened4 = ()=>{
    farewel3My.current.classList.add('active')
  }

  const farewelDiftaDlt = ()=>{
    farewel3My.current.classList.remove('active')
  }


  const opened5 =()=>{
    farewelAll.current.classList.add('active')
  }
  const farewelAllDlt =  ()=>{
    farewelAll.current.classList.remove('active')
  }

  const whatapp9My =()=>{
    whatAppDlt9MyPic.current.classList.add('active')
  }
  const WhatAppMyPicDlt = ()=>{
    whatAppDlt9MyPic.current.classList.remove('active')
  }

  const whatapp8My2 = ()=>{
    whatAppMy8.current.classList.add('active')
  }
  const WhatAppMyPicDlt8 = ()=>{
    whatAppMy8.current.classList.remove('active')
  }
  const whatapp7MyPic =()=>{
    whatApp7My.current.classList.add('active')
  }
  const WhatAppMyPicDlt7 = ()=>{
    whatApp7My.current.classList.remove('active')
  }



  return (
    <>

   <section  id='HearderSec' className='AboutSec h-64'>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className='text-start font-serif pt-24 AboutMe'>Me And My friends</h1>
          {/* <li className='font-serif'>Hi I'am Front-End Developer.</li>
          <li className='font-serif'>I love coding.</li>
          <li className='font-serif'>I code part of the day.</li> */}
        </div>
      </div>
    </div>
   </section>


   <aside ref={farewelShow} className="container">
      <div className='possi'>
      <button  onClick={farewelDlt} className='IconsY'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <img  className='h-96 cursor-pointer' src= {farewel2} alt="images" />
    </aside>

    <aside ref={whatApped2}  className="container">
      <div className='possi'>
      <button  onClick={whatAppDlt} className='iconsfarewel'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <img  className='h-96 cursor-pointer' src= {whatapp2} alt="images" />
    </aside>

    <aside ref={farewelMy}  className="container">
      <div className='possi'>
      <button  onClick={farewelMyDlt} className='iconsWhatApp'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <img  className='h-96 cursor-pointer' src= {farewel} alt="images" />
    </aside>

    <aside ref={farewel3My}  className="container">
      <div className='possi'>
      <button  onClick={farewelDiftaDlt} className='iconsDipta'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <img  className='h-96 cursor-pointer' src= {farewel3} alt="images" />
    </aside>


    <aside  ref={farewelAll} className="container">
      <div className='possi'>
      <button  onClick={farewelAllDlt} className='iconsFarewel5'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <img  className='h-96 cursor-pointer' src= {farewel5} alt="images" />
    </aside>


    <div className="grid grid-cols-4 gap-2">
      <img
         onClick={opened}
        src={farewel2}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
      onClick={opened2}
        src={whatapp2}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
      onClick={opened3}
        src={farewel}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
      onClick={ opened4}

        src={farewel3}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
      onClick={ opened5}

        src={farewel5}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>




    <aside  ref={whatAppDlt9MyPic} className="container">
      <div className='possi'>
      <button  onClick={WhatAppMyPicDlt} className='whatAppMyPic'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <img  className='h-96 cursor-pointer' src= {whatapp9} alt="images" />
    </aside>
    

    
    <aside ref={whatAppMy8}  className="container">
      <div className='possi'>
      <button  onClick={WhatAppMyPicDlt8} className='whatAppMyPic8'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <img  className='h-96 cursor-pointer' src= {whatapp8} alt="images" />
    </aside>

    <aside ref={whatApp7My}  className="container">
      <div className='possi'>
      <button  onClick={WhatAppMyPicDlt7} className='whatAppMyPic7'><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <img  className='h-96 cursor-pointer' src= {whatapp7} alt="images" />
    </aside>
    

    <div className="grid grid-cols-3 gap-2">
      <img
      onClick={whatapp9My}
        src={whatapp9}
        alt=""
        className="row-span-2 col-span-2 w-full h-full object-cover"
      />
      <img
        src={whatapp8}
        alt=""
        className="w-full h-full object-cover col-span-1"
      />
      <img
        src={whatapp7}
        alt=""
        className="w-full h-full object-cover col-span-1"
      />
      {/* <img
        src={my}
        alt=""
        className="w-full h-full object-cover col-span-3"
      /> */}
    </div>

                    
    </>
  )
}
