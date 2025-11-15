import './App.css'
import lot_four from "./assets/Lot 4 Keystone Base 1.pdf"
import lot_four_two from "./assets/Lot 4 Keystone with Lot 4 Keystone Base 1 Shown.pdf"
import declaration from "./assets/Declaration's Allocation of 1,000 Votes to Resort Parcel Owner.pdf"
import scan from "./assets/Filename-482907.pdf"
import voting_matrix from "./assets/Voting Matrix Update as of 10.15.2024.pdf"
import financials from "./assets/2023-KNC-Audited-Financials-pages 5 to 6.pdf"
import common_interest from "./assets/2024 Colorado Common Interest Ownership Act 38-33.3-000-35 - Allocation of Interests Not to Discriminate in Favor of Declarant.pdf"
import new_points from "./assets/New Points for Website - July 25 2025.pdf"


function App() {

  return (
    <>
      <div className="column">
        <div className='iframes'>
          <div className="column">
            <h2>Sign up for our mailing list here</h2>
            <iframe className='iframe' src="https://docs.google.com/forms/d/e/1FAIpQLSdLFkwIk79Jey_LGbIv2FzoKpImc1z8cQXOm-yrJ6JD-529Uw/viewform?embedded=true">Loading…</iframe>
          </div>
          <div className='column'>
            <h2>Donate to the fundraiser <a href='https://gofund.me/bb1af1e1' target='top'>here</a></h2>
            <iframe className='iframe' src="https://gofund.me/bb1af1e1">...Loading</iframe>
          </div>
        </div>
        <hr></hr>
        <div className='row'>
          <table>
            <thead>
              <tr>
                <th scope='col'>Reasons for Joining our Reform Effort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>You would like to have your vote matter when it comes to how your annual assessments are spent.</td>
              </tr>
              <tr>
                <td>You question why 2% of your sales equity goes to an organization that blocks you from voting your interests.</td>
              </tr>
              <tr>
                <td>You wonder why your Annual Assessment is used to pay for a snowmelt system on the Kindred’s private property.
                </td>
              </tr>
              <tr>
                <td>Your neighborhood doesn’t even get flower boxes in the summertime, despite you and your neighbors each paying on the order of $4,000 to $5,000 each and every year to KNC for that purpose.</td>
              </tr>
              <tr>
                <td>Your neighborhood barely gets its road plowed in the wintertime, despite you and your neighbors each paying on the order of $4,000 to $5,000 each and every year to KNC for that purpose.</td>
              </tr>
              <tr>
                <td>You wonder why your Annual and Sales Assessments should be used to pay for festivals that lose ½ million dollars, year after year, when you receive nothing in benefits.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr></hr>
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
          <h1>Add your name to our email list above and read the facts below</h1>
          <hr></hr>
        </div>
        <div className='row'>
          <h2>WHY KNC NEEDS TO GO</h2>
          <object className='pdf' data={new_points + "?#view=FitH"} type="application/pdf"></object>
        </div>
        <div className='row'>
          <h2>Declaration appears to grant 1000 votes to vail resorts because they own a beaver pond with wetlands (toggle through relevant pages)</h2>
          <object className='pdf' data={declaration + "?#view=FitH"} type="application/pdf"></object>
        </div>
        <div className='row'>
          <h2>Resort parcel shows beaver pond on county records being owned by vail summit resorts inc.</h2>
          <object className='pdf' data={scan + "?#view=FitH"} type="application/pdf"></object>
        </div>
        <div className='row'>
          <h2>County's GIS shows resort parcel - is likely almost wholly un-developable</h2>
          <object className='pdf' data={lot_four + "?#view=FitH"} type="application/pdf"></object>
        </div>
        <div className='row'>
          <h2>County's GIS shows lot 4 with view of surrounding area</h2>
          <object className='pdf' data={lot_four_two + "?#view=FitH"} type="application/pdf"></object>
        </div>
        <div className='row'>
          <h2>Homeowners own 66% of units but voting matrix shows reaching 67% threshold for change is impossible because of the beaver pond</h2>
          <object className='pdf' data={voting_matrix + "?#view=FitH"} type="application/pdf"></object>
        </div>
        <div className='row'>
          <h2>Yet state law prohibits allocation of Interests that Discriminate in favor of declarant (see (c2))</h2>
          <object className='pdf' data={common_interest + "?#view=FitH"} type="application/pdf"></object>
        </div>
        <div className='row'>
          <h2>Real estate revenues are app. 90% of total revenues and paid mostly by homeowners.
            Events and Warren station bring in app. $0.8 million but lose app. $1.9 million (according to 2023 reports)</h2>
          <object className='pdf' data={financials + "?#view=FitH"} type="application/pdf"></object>
        </div>
        <hr></hr>
      </div>
    </>
  )
}

export default App
