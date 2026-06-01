import './App.css'
import lot_four from "./assets/current_documents/Lot 4 Keystone Base 1.pdf"
import lot_four_two from "./assets/current_documents/Lot 4 Keystone with Lot 4 Keystone Base 1 Shown.pdf"
import declaration from "./assets/current_documents/Declaration's Allocation of 1,000 Votes to Resort Parcel Owner.pdf"
import scan from "./assets/current_documents/Filename-482907.pdf"
import financials from "./assets/current_documents/Audited Financials - Just Revenues Shown.pdf"
import common_interest from "./assets/current_documents/Allocation of Votes to Declarant - Cannot Discriminate in Favor of Itself.pdf"
import new_points from "./assets/current_documents/New Points for Website - June 1st 2026.pdf"
import current_board from "./assets/current_documents/Current Board and As it Should Be.pdf"
import voting_matrix_unfair from "./assets/current_documents/Voting Matrix - By Voting Class.pdf"
import voting_matrix_fair from "./assets/current_documents/Voting Matrix - How it Should Be - The Fair One.pdf"



function App() {

  return (
    <>
      <div className="column">
        {disclaimer()}
        <div className='row'>
          <p>(Made by Maureen Barrett, Red Hawk Lodge, Keystone and barrettbuffalopark@gmail.com)</p>
        </div>
        <div className='row'>
          <h1>Donate at the link below and read the facts here</h1>
        </div>
        <hr></hr>
        {build_pdf_row(new_points, "WHY KNC NEEDS TO CHANGE")}
        {build_pdf_row(voting_matrix_unfair, "Homeowners own about 75% of units but voting matrix shows reaching 67% \ threshold for change is impossible because of the beaver pond")}
        {build_pdf_row(voting_matrix_fair, "This is what a fair vote allocation would look like")}
        {table()}
        {build_pdf_row(current_board, "And here is the current board versus one that is actually fair")}
        {build_pdf_row(declaration, "Declaration grants 1000 votes to vail resorts because they own a beaver pond with wetlands (toggle through relevant pages)")}
        {build_pdf_row(scan, "Resort parcel shows beaver pond on county records")}
        {build_pdf_row(lot_four, "County's records call resort parcel \"Open Space\" and valued it at $40k in 2025")}
        {build_pdf_row(lot_four_two, "County's GIS shows the \"resort parcel\" is not connected to ski resort")}
        {build_pdf_row(common_interest, "Yet state law prohibits allocation of Interests that Discriminate in favor of declarant (see (c2))")}
        {build_pdf_row(financials, "Home owners provide app. 90% of total revenues and paid mostly by homeowners. Events and Warren station bring in app. $900,000 but lose app. $2 million (events cost $1.3 million but likely require 1/2 of the salaries from $1.7 million total compensation)")}
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
        </tbody>
      </table>
    </div>
  )
}

function disclaimer() {
  return (
    <div className='row'>
      <h3>DISCLAIMER</h3>
      <p style={{"marginTop": "2px", "fontSize": "1em"}}>The creators of this content do not endorse any violation of KNC regulations or state or federal law.
        The creators of this content have made every effort to be accurate and truthful in its presentation.</p>
      <h1>Goal</h1>
      <p>Our goal is to reform the HOA that is the KNC to make voting interests proportional to actual ownership and revenues. If we achieve our goal KNC homeowners will have about 75% or more of all the votes,
        and will have six or seven seats on the KNC Board, and we can change how the KNC works.
      </p>
    </div>
  )
}

function build_pdf_row(doc: string, header: string) {
  return (
    <div className='row'>
      <h2>{header}</h2>
      <object className='pdf' data={doc + "?#view=FitH" } type="application/pdf"></object>
    </div>
  )
}


export default App
