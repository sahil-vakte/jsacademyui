import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-main-div'>
    <div className='footer-flex-div'>
        <div className='footer-width-div'>
        <h1>Office Address</h1>
        <p style={{textAlign:"center", margin:"0px"}}>Ratnamala Complex, Tanaji Chowk ,Paud Road, Pune, Maharashtra 411038</p>
        </div>
        <div className='footer-width-div' style={{textAlign:"center"}}>
        {/* <h1>Follow Us</h1> */}
        <h2 style={{margin:"0px"}}><i>Transform Your Dreams into Web Solutions</i></h2>

        </div>
        <div className='footer-width-div'>
        <h1>Contact Us</h1>
        <p style={{textAlign:"center", margin:"0px"}}>+91 9405199411 <br/> +91 9403532808</p>
        </div>
        
    </div>
    </div>
  )
}

export default Footer