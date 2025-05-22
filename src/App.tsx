import constructionGif from './assets/Under_construction_animated.gif'
import './App.css'

function App() {

  return (
    <>
      <div className="column">
        <a target="_blank">
          <img src={constructionGif} className="logo" alt="Keystone Ski Resort Logo" />
        </a>
        <h1>OUR GOAL</h1>
        <p>Our goal is to reduce the amount of tax that property owners in keystone pay by dissolving the Keystone Neighbourhood Company, also known as KNC. KNC extracts fees from Keystone owners while
          providing little in return. </p>
      </div>
    </>
  )
}

export default App
