import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Navbar from './Navigation/Navbar.jsx'
import Contact from './Contact.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)

function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      </>
  )
}
