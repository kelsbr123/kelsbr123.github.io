import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Navbar from './Navigation/Navbar.jsx'
import Contact from './Contact.jsx'
import styles from './Navigation/Navbar.module.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element = {<Projects/>}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
      </Routes>
      </>
  )
}

export default App
