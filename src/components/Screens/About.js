import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="overlay-area animated fadeIn">
      <div id="about-area">
        <div id="stories-row">
          <div id="about-pic">
            <img src="/img/try4.png" alt="Salifu Mutaru" />
            <div id="simple-info">
              <b>Salifu Mutaru</b>
              <p id="my-title">Software Engineer</p>
              <div>
                <a href="https://github.com/salmgazer" rel="noopener noreferrer" target="_blank"><img className="social-icon" src="/img/github.svg" alt="github" /></a>
                <a href="https://twitter.com/salmgazer" rel="noopener noreferrer"target="_blank"><img className="social-icon" src="/img/twitter.png" alt="twitter" /></a>
                <a href="https://web.facebook.com/Salmgazer" rel="noopener noreferrer"target="_blank"><img className="social-icon" src="/img/facebook.png" alt="facebook" /></a>
              </div>
            </div>
          </div>
          <div id="my-info">
            <div id="info-content">
              <h2>Things you should know about me...</h2>
              <p>Unlike others, I don’t know my roots well, so I try to find myself in my works. In designing a solution, I search for those rare moments when skill, intuition and passion merge to create a lasting experience.</p>
              <p>I was born in Nima –Ghana's most popular slum. I grew up with a strong passion in Science and Maths. I imagined I'd be the next Einstein!</p>
              <p>However, after learning basics of software development, I never looked back. I took a Computer Science program at <a href="http://www.ashesi.edu.gh/" rel="noopener noreferrer" target="_blank"> Ashesi </a> and joined     <a href="https://worldreader.org" rel="noopener noreferrer" target="_blank">Worldreader</a> to tackle problems of scale in our hope to make books accessible to all.</p>
              <p>Every other month, I work on a single project alongside my full-time job at Worldreader. We could be lucky working together this month.</p>
              <div className="full-width">
                <b id="about-phone">(+233) 0543 - 344 - 100</b>
                <a href="mailto:developer.salifu@gmail.com" id="my-button">Email me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default  About
