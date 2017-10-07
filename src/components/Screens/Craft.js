import React from 'react'
import './Craft.css'

const Craft = () => {
  return (
    <div className="overlay-area">
      <div id="craft-area" className="animated slideInUp" >
        <div id="craft-area-right" className="animated slideInRight">
          <div className="craft-content">
            <div className="title-area white-text">
              How I work
            </div>
            <div id="how-i-work">
              <ol>            
                <li><span>1.</span><p>You reach out to tell me about your project</p></li>
                <li><span>2.</span><p>We meet to brainstorm a solution</p></li>
                <li><span>3.</span><p>I send you a mock of the agreed upon solution</p></li>
                <li><span>4.</span><p>I build the solution</p></li>
                <li><span>5.</span><p>You test solution and give feedback</p></li>
                <li><span>6.</span><p>I make necessary changes based on feedback</p></li>
                <li><span>7.</span><p>I deploy the solution</p></li>
                <li><span>0.</span><p>We iterate the steps above based on the scale of your project</p></li>
              </ol>
            </div>
          </div>
        </div>
        <div id="craft-area-left">
          <div className="craft-content">
            <div className="title-area">
              My Tools
            </div>
            <div className="centered-text" id="mytools">
              <div className="lefted quarter tool-icon-area">
                <a href='https://vuejs.org/' rel="noopener noreferrer" target='_blank'>
                  <img className="tool-icon" src='/img/vue.png' alt="Vuejs" /><br />
                  <b><i>Vuejs</i></b>
                </a>
              </div>
              <div className="lefted quarter tool-icon-area">
                <a href='https://facebook.github.io/react/' rel="noopener noreferrer" target='_blank'>
                  <img className="tool-icon" src='/img/react-icon.png' alt="Reactjs" /><br />
                  <b><i>Reactjs</i></b>
                </a>
              </div>
              <div className="lefted quarter tool-icon-area">
                <a href='https://facebook.github.io/react-native/' rel="noopener noreferrer" target='_blank'>
                  <img className="tool-icon" src='/img/reactnative.png' alt="React Native" /><br />
                  <b><i>React Native</i></b>
                </a>
              </div>
              <div className="lefted quarter tool-icon-area">
                <a href='https://electron.atom.io/' rel="noopener noreferrer" target='_blank'>
                  <img className="tool-icon" src='/img/electron.png' alt="Electron" /><br />
                  <b><i>Electron</i></b>
                </a>
              </div>
              <div className="lefted quarter tool-icon-area">
                <a href='https://nodejs.org/en/' rel="noopener noreferrer" target='_blank'>
                  <img className="tool-icon" src='/img/node.png' alt="Nodejs" /><br />
                  <b><i>Nodejs</i></b>
                </a>
              </div>
              <div className="lefted quarter tool-icon-area">
                <a href='https://swagger.io/' rel="noopener noreferrer" target='_blank'>
                  <img className="tool-icon" src='/img/swagger.png' alt="Swagger" /><br />
                  <b><i>Swagger</i></b>
                </a>
              </div>
              <div className="lefted quarter tool-icon-area">
                <a href='https://socket.io/' rel="noopener noreferrer" target='_blank'>
                  <img className="tool-icon" src='/img/socketio.png' alt="Socket io" /><br />
                  <b><i>socket.io</i></b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Craft