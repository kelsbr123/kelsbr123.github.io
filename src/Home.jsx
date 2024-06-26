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
        <img src="/headshot.jpg" alt="Headshot of Kels Barrett-Rivkin standing in front of mountain background" />
      </div>
      <div className="right paragraph">
        <h1> A Little About Me</h1>
        <p className="center">
          Hello! I'm Kels! I'm an aspiring software developer from Colorado. I studied computer science with
          a focus on machine learning and artifical intelligence at Colorado State University
        </p>
      </div>
    </div>
    </>
  )
}

export default Home