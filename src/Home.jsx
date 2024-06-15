import { useState } from 'react'
import reactLogo from './assets/react.svg'
import imgUrl from '/headshot.jpg'
import './App.css'
import { Link } from 'react-router-dom'
import MyThree from './Three'

function Home() {

  return (
    <>
    <div className="splitscreen">
      <div className="left container img center">
        <img src="/headshot.jpg" alt="" />
      </div>
      <div className="right paragraph">
        <h1> A Little About Me</h1>
        <p className="center">
          Hello! I'm Kels! I'm an aspiring software developer from Colorado. I studied computer science with
          a focus on machine learning and artifical intelligence at Colorado State University. I'm looking to break into the software industry
          through an entry level position where I can get hands on experience and learn on the job.
        </p>
      </div>
    </div>
    <span>
      <Link to='/about'>
        <button>
          About
        </button>
      </Link>
    </span>
    </>
  )
}

export default Home