import React from 'react'
import './Footer.css'

const Footer = (props) => {

  return (
    <div id="footer-area">
      <div id="footer-content">
        <div id="email" className="quarter lefted">
          {props.email}
        </div>
        <div id="phone" className="quarter lefted">
            {props.phone}
        </div>
        <div id="copyright" className="quarter lefted">
            {props.copyright}
        </div>
      </div>
      <div id="footer-mobile">
        developer.salifu@gmail.com | +233-543-344-100
      </div>
    </div>
  )

}

export default Footer
