import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Link to='/about'>
            <button>
                About
            </button>
        </Link>
      </div>
    </>
  )
}

export default Home