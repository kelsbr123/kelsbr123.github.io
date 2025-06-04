import './App.css'
import lot_four from "./assets/Lot 4 Keystone Base 1.pdf"
import lot_four_two from "./assets/Lot 4 Keystone with Lot 4 Keystone Base 1 Shown.pdf"
import declaration from "./assets/Declaration's Allocation of 1,000 Votes to Resort Parcel Owner.pdf"
import scan from "./assets/Filename-482907.pdf"
import voting_matrix from "./assets/Voting Matrix Update as of 10.15.2024.pdf"
import financials from "./assets/2023-KNC-Audited-Financials-pages 5 to 6.pdf"
import common_interest from "./assets/2024 Colorado Common Interest Ownership Act 38-33.3-000-35 - Allocation of Interests Not to Discriminate in Favor of Declarant.pdf"
import double_taxation_letter from "./assets/Keystone Accomodats KNC's Double Taxation of KNC Homeowners.pdf"
import empty_housing_letter from "./assets/Keystone Taxes Homeowners for Emp Housing but Doesn't Push Vail Resorts.pdf"
import mathews_letter from "./assets/Mathews Makes Clear that Town is Leading Economic Development.pdf"
import knc_economic_goals from "./assets/Mayor and KNC Confer on Economic Goals without Including Any of Us (the actual providers of revenue!).pdf"
import mayor_design_review_board from "./assets/Mayor Riley Solicits Vail Resorts for Design Review Board over other Applicants.pdf"
import warren_station from "./assets/Rather than Have Open Hearing Riley Meets with Vail Resorts to Discuss Warren Station.pdf"
import mayor_solicits_knc from "./assets/Riley Solicits KNC for Design Review Board.pdf"
import duplicate_services from "./assets/Two Taxing Entities - Same Set of Services.pdf"
import contact from "./assets/Who to Contact with Your KNC and Keystone Complaints .pdf"
import non_paying from "./assets/Keystone Gives More Love to non-paying Vail Resorts than to Homeowners.pdf"

function App() {

  return (
    <>
      <div className="column">
        <div className='row'>
          <h1>DISCLAIMER</h1>
          <p>The creators of this content do not endorse any violation of KNC regulations or state or federal law.
            The creators of this content have made every effort to be accurate and truthful in its presentation.</p>
          <h1>Goal</h1>
          <p>Our goal is to reduce the amount of tax that property owners in Keystone pay by dissolving or changing the Keystone Neighborhood Company, also known as KNC. KNC extracts fees from KNC owners while
            providing far too little in return. Now with the incorporation of Keystone, KNC is not necessary.</p>
        </div>
        <div className='row'>
          <p>(Made by Maureen Barrett, Red Hawk Lodge, Keystone, barrettbuffalopark@gmail.com)</p>
        </div>
        <div className='row'>
          <h2>Declaration appears to grant 1000 votes to vail resorts because they own a beaver pond with wetlands (toggle through relevant pages)</h2>
          <object data={declaration + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Resort parcel shows beaver pond on county records being owned by vail summit resorts inc.</h2>
          <object data={scan + "?#zoom=27"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>County's GIS shows resort parcel - is likely almost wholly un-developable</h2>
          <object data={lot_four + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>County's GIS shows lot 4 with view of surrounding area</h2>
          <object data={lot_four_two + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Homeowners own 66% of units but voting matrix shows reaching 67% threshold for change is impossible because of the beaver pond</h2>
          <object data={voting_matrix + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Yet state law prohibits allocation of Interests that Discriminate in favor of declarant (see (c2))</h2>
          <object data={common_interest + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Real estate revenues are app. 73% of total revenues and paid mostly by homeowners.
            Events and Warren station bring in app. $0.8 million but lose app. $1.9 million (according to 2023 reports)</h2>
          <object data={financials + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Two taxing entities provide the same services</h2>
          <object data={duplicate_services + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div className='row'>
          <h2>Who to contact with your complaints</h2>
          <object data={contact + "?#zoom=85"} type="application/pdf" width="1000" height="800"></object>
        </div>
        <div>
          <h1>Letters to town of keystone to date - please use whatever resonates for you in your letters</h1>
          <ul>
            <li className='link'> <a href={mathews_letter} target='top'>KNC makes clear that town of Keystone goals include economic development</a> </li>
            <li className='link'> <a href={knc_economic_goals} target='top'>Mayor Riley and KNC meet on economic goals without public input</a> </li>
            <li className='link'> <a href={mayor_design_review_board} target='top'>Objections to Mayor Riley's solicitation of KNC for Design Review Board</a> </li>
            <li className='link'> <a href={warren_station} target='top'>Mayor Riley discusses Warren Station with primarily Vail Resorts personnel</a> </li>
            <li className='link'> <a href={mayor_solicits_knc} target='top'>Mayor Riley solicits KNC for Design Review Board</a> </li>
            <li className='link'> <a href={double_taxation_letter} target='top'>Keystone accommodates double taxation</a> </li>
            <li className='link'> <a href={empty_housing_letter} target='top'>Vail resorts fails to provide adequate employee housing while Keystone taxes homeowners</a> </li>
            <li className='link'> <a href={non_paying} target='top'>Keystone Gives More Love to non-paying Vail Resorts than to Homeowners</a> </li>
          </ul>
        </div>
        <div className='horizontal'>
          <div className="column">
            <h2>Register for the zoom call here</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdLFkwIk79Jey_LGbIv2FzoKpImc1z8cQXOm-yrJ6JD-529Uw/viewform?embedded=true" width="500" height="856">Loading…</iframe>
          </div>
          <div className='column'>
            <h2>Donate to the fundraiser <a href='https://gofund.me/bb1af1e1' target='top'>here</a></h2>
            <iframe src="https://gofund.me/bb1af1e1" width="500" height="850">...Loading</iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
