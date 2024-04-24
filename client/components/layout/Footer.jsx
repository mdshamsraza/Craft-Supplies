import React from 'react'
function Footer() {
  return (
    <>
     <div className="card text-bg-dark text-center mt">
         <div className="card-img-overlay">
         <h5 className="footer-title">Craft-Supplies</h5>
         <p className="footer-text">
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
         </p>
         <p className="card-text">
         <small>Last updated 3 mins ago</small>
        </p>
        </div>
     </div>

  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
    </div>
    <div className="footer-nav">
    <a href="Contact">Contactus</a>
    |<a href="about">about</a>
    |<a href="policy">Privacy Policy</a>
    </div>
  </div>
</>

  )
}

export default Footer