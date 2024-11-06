import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import fevicon from './assets/images/fevicon.png'
import { Nav } from './Nav'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
// import { Project } from './Pages/project'
// import { Contact } from './Pages/contact'
import { RootLayouts } from './RootLayouts'
import { Images } from './Pages/Images'
import { Cv } from './Pages/Cv'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Project } from './Pages/Project';
import { Contact } from './Pages/Contact';
import 'react-toastify/dist/ReactToastify.css';




function App() {


const router = createBrowserRouter( createRoutesFromElements(
  <Route>
    <Route  element={<RootLayouts/>} >
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={ <Project/>} />
      <Route path='/contact' element={ < Contact/> } />
      <Route path='/images' element={<Images/>} />
      <Route path='/resume' element={<Cv/>} />

    </Route>
  </Route>
))
 

  return (
    <>
      <RouterProvider  router={router} />
    </>
  )
}

export default App
