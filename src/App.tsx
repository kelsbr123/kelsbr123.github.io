import './App.css'
import lot4 from './assets/Lot 4 Keystone Base 1.pdf'
import lot4_2 from './assets/Lot 4 Keystone with Lot 4 Keystone Base 1 Shown.pdf'
import declaration from "./assets/Declaration's Allocation of 1,000 Votes to Resort Parcel Owner.pdf"
import scan from "./assets/Filename-482907.pdf"
import voting_matrix from "./assets/Voting Matrix Update as of 10.15.2024.pdf"
import financials from "./assets/2023-KNC-Audited-Financials-pages 5 to 6.pdf"
import common_interest from "./assets/2024 Colorado Common Interest Ownership Act 38-33.3-000-35 - Allocation of Interests Not to Discriminate in Favor of Declarant.pdf"

function App() {

  return (
    <>
      <div className="column">
        <div className='row'>
          <h1>DISCLAIMER</h1>
          <p>The creators of this content do not endorse any violation of KNC regulations or state or federal law.
            The creators of this content have made every effort to be accurate and truthful in its presentation.</p>
        </div>
        <div className='row'>
          <h1>Goal</h1>
          <p>Our goal is to reduce the amount of tax that property owners in Keystone pay by dissolving or changing the Keystone Neighbourhood Company, also known as KNC. KNC extracts fees from KNC owners while
            providing far too little in return. Now with the incorporation of Keystone, KNC is not necessary.</p>
        </div>
        <div className='row'>
          <h2>Declaration appears to grant 1000 votes to vail resorts because they own a beaver pond with wetlands</h2>
          <object data={declaration + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Resort parcel shows beaver pond on county records being owned by vail summit resorts inc.</h2>
          <object data={scan + "?#zoom=27"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>County's GIS shows resort parcel - is likely almost wholely undevelopable</h2>
          <object data={lot4 + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>County's GIS shows lot 4 with view of surrounding area</h2>
          <object data={lot4_2 + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Homeowners own 66% of units but voting matrix shows reaching 67% threshold for change is impossible</h2>
          <object data={voting_matrix + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Yet state law prohibits allocation of Interests that Discriminate in favor of declarant</h2>
          <object data={common_interest + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Real estate revenues are app. 73% of total revenues and paid mostly by homeowners.
            Events and Warren station bring in app. $0.8 million but lose app. $1.9 million (according to 2023 reports)</h2>
          <object data={financials + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Register for the zoom call here</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSoXFbCaIpfKurFmIsCnWxcc5OzykgeErznt-jZPseHCLtoQ/viewform?embedded=true" width="1000" height="600">Loading…</iframe>
        </div>
      </div>
    </>
  )
}

export default App
