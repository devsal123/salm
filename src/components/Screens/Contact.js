import React from 'react'
import './Screens.css'

const contact = 
  <div className="overlay-area">
    <div id="form-area" className="animated slideInUp" >
      <div id="hello-text">
        Say  <b className="pinky-text">hello!</b>
      </div>
      <div className="form-element">
        <input type="text" name="name" id="name" placeholder="Your cool name"/>
      </div>
      <div className="form-element">
        <input type="email" name="email" id="email" placeholder="Your email" />
      </div>
      <div className="form-element">
        <textarea placeholder="Your message" name="message" id="message"></textarea>
      </div>
      <button className="cool-btn">Send</button>
    </div>
  </div>

export default contact