import './App.css'
import pdf1 from './assets/Lot 4 Keystone Base 1.pdf'
import pdf2 from './assets/Lot 4 Keystone with Lot 4 Keystone Base 1 Shown.pdf'

function App() {

  return (
    <>
      <div className="column">
        <h1>OUR GOAL</h1>
        <p>Our goal is to reduce the amount of tax that property owners in keystone pay by dissolving the Keystone Neighbourhood Company, also known as KNC. KNC extracts fees from Keystone owners while
          providing little in return. </p>
      </div>
      <object data={pdf1+"?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
      <object data={pdf2+"?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
    </>
  )
}

export default App
