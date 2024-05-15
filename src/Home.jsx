import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import MyThree from './Three'

function Home() {

  return (
    <>
      <div className="card">
        <Link to='/about'>
            <button>
                About
            </button>
        </Link>
        <MyThree className="card"></MyThree>
      </div>
    </>
  )
}

export default Home