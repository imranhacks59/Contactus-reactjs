import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-left'>
             <h2
             style={{
                fontWeight:'500',
                borderBottom:'2px solid white'
             }}
             >About TECHVICTUS</h2>
             <p style={{
              marginTop:'10px'
             }}>
             Join our Faculty Development Programfor professional growth and innovation.Unlock your full potential today!"
             </p>
        </div>
        <div className='footer-middle'>
            <h2 style={{
                fontWeight:'500',
                borderBottom:'2px solid white',
                marginTop:-5
            }}>Quick Links</h2>
              <ul style={{
                marginTop:'10px'
              }}>
                <li>Home</li>
              
                <li>About</li>
              
                <li>Contact us</li>
              </ul>
        </div>
      <div className='footer-right'>
        <h2 style={{
            fontWeight:'500',
            borderBottom:'2px solid white',
            marginTop:'-40px',
            // marginBottom:'15px'
        }}>Social Media</h2>
            <div style={{
              marginTop:'10px'
            }}>
                <p>Facebook</p>
                <p>Linkedin</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
