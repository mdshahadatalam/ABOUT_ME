import React from 'react'
import { Nav } from './Nav'
import { Outlet } from 'react-router-dom'
import { Arrow } from './Components/Arrow'
import { Footer } from './Components/Footer'


export const RootLayouts = () => {
  return (
    <>
    
    <Nav/>
    <Arrow/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
