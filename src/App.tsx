import './App.css'
import lot_four from "./assets/Lot 4 Keystone Base 1.pdf"
import lot_four_two from "./assets/Lot 4 Keystone with Lot 4 Keystone Base 1 Shown.pdf"
import declaration from "./assets/Declaration's Allocation of 1,000 Votes to Resort Parcel Owner.pdf"
import scan from "./assets/Filename-482907.pdf"
import financials from "./assets/2023-KNC-Audited-Financials-pages 5 to 6.pdf"
import common_interest from "./assets/2024 Colorado Common Interest Ownership Act 38-33.3-000-35 - Allocation of Interests Not to Discriminate in Favor of Declarant.pdf"
import new_points from "./assets/New Points for Website - July 25 2025.pdf"
import current_board from "./assets/Current Board and As it Should Be .pdf"
import voting_matrix_unfair from "./assets/Voting Matrix - By Voting Class.pdf"
import voting_matrix_fair from "./assets/Voting Matrix - By Voting Class - The Fair One.pdf"



function App() {

  return (
    <>
      <div className="column">
        {table()}
        <hr></hr>
        {disclaimer()}
        <div className='row'>
          <p>(Made by Maureen Barrett, Red Hawk Lodge, Keystone, barrettbuffalopark@gmail.com)</p>
        </div>
        <div className='row'>
          <h1>Add your name to our email list below and read the facts below</h1>
        </div>
        <hr></hr>
        {build_pdf_row(new_points, "WHY KNC NEEDS TO GO")}
        {build_pdf_row(voting_matrix_unfair, "Homeowners own more than 75% of units but voting matrix shows reaching 67% threshold for change is impossible because of the beaver pond")}
        {build_pdf_row(voting_matrix_fair, "This is what a fair vote allocation would look like")}
        {build_pdf_row(current_board, "And here is the current board versus one that is actually fair")}
        {build_pdf_row(declaration, "Declaration grants 1000 votes to vail resorts because they own a beaver pond with wetlands (toggle through relevant pages)")}
        {build_pdf_row(scan, "Resort parcel shows beaver pond on county records being owned by vail summit resorts inc.")}
        {build_pdf_row(lot_four, "County's records shows resort parcel - is wholly un-developable")}
        {build_pdf_row(lot_four_two, "County's GIS shows the \"resort parcel\" with view of surrounding area and that it is not connected to ski resort")}
        {build_pdf_row(common_interest, "Yet state law prohibits allocation of Interests that Discriminate in favor of declarant (see (c2))")}
        {build_pdf_row(financials, "Home owner revenues are  80-90% of total revenues and paid mostly by homeowners. Events and Warren station bring in app. $0.8 million but lose app. $1.9 million (according to 2023 reports)")}
        <hr></hr>
        {forms()}
      </div>
    </>
  )
}

function forms() {
  return (
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
  )
}

function table() {
  return (
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
  )
}

function disclaimer() {
  return (
    <div className='row'>
      <h3>DISCLAIMER</h3>
      <p style={{"marginTop": "2px", "fontSize": "1.2em"}}>The creators of this content do not endorse any violation of KNC regulations or state or federal law.
        The creators of this content have made every effort to be accurate and truthful in its presentation.</p>
      <h1>Goal</h1>
      <p>Our goal is to reform the HOA that is the KNC to make voting interests proportional to actual ownership and revenues. If we achieve our goal KNC homeowners will have 75% or more of all the votes,
        and will have six or seven seats on the KNC Board, and we can change how the KNC works.
      </p>
    </div>
  )
}

function build_pdf_row(doc: string, header: string) {
  return (
    <div className='row'>
      <h2>{header}</h2>
      <object className='pdf' data={doc + "?#view=FitH"} type="application/pdf"></object>
    </div>
  )
}


export default App
