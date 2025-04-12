import constructionGif from './assets/Under_construction_animated.gif'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a target="_blank">
          <img src={constructionGif} className="logo" alt="Keystone Ski Resort Logo" />
        </a>
      </div>
      <h1>Sorry! This page is under construction right now.</h1>
      <div className="card">
      </div>
    </>
  )
}

export default App
