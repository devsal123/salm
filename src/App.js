import React, { Component } from 'react'
import './App.css'
import NavRegion from './components/NavRegion/NavRegion'
import CoolText from './components/CoolText/CoolText'
import Profile from './components/Profile/Profile'
import MessageBox from './components/MessageBox/MessageBox'
import Skills from './components/Skills/Skills'
import Overlay from './components/Overlay/Overlay'
import about from './components/Screens/About'
import craft from './components/Screens/Craft'
import contact from './components/Screens/Contact'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      links: [
        { url: '#contact', name: 'Contact' },
        { url: '/do', name: 'Craft' },
        { url: '/', name: 'About me' }
      ],
      profileStatus: false,
      cooltextStatus: true,
      contactStatus: false,
      craftStatus: false,
      messageStatus: false,
      cooltext: 'Build experiences across platforms',
      profile_name: 'Salifu Mutaru',
      profile_email: 'developer.salifu@gmail.com',
      profile_phone: '+233 543 344 100',
      minfo: 'This is message box',
      'overlay_item': null,
      skills: [
        {
          title: 'Web and Desktop Applications',
          'image': 'img/web3.jpg',
          'description': `Let's tell your story with stunning websites and desktop applications.`
        },
        {
          title: 'Mobile Applications',
          'image': 'img/16.png',
          'description': `Build and share experiences so personal people can carry with them wherever they go.`
        },
        {
          title: 'Web REST APIs',
          'image': 'img/18.jpg',
          'description': 'Build secure, scalable and fast interfaces for your infrastructure so you can serve the world with ease.'
        }
      ]
    }
    this.on = this.on.bind(this)
  }

  /* Put on the overlay */
  on(type) {
    switch(type){
      case 'About me':
        this.setState({ overlay_item: about })
        break
      case 'Craft':
        this.setState({ overlay_item: craft })
        break
      case 'Contact':
        this.setState({ overlay_item: contact})
        break
      default:
        this.setState({ overlay_item: about })
    }
    const overlay = document.getElementById("overlay")
    overlay.style.display = "block";
  }

  /* Put off the overlay */
  off() {
      const overlay = document.getElementById("overlay")
      overlay.style.display = "none";
  }

  render() {
    return (
      <div className="home-background">
        <Overlay
          onClick={ this.off }
          overlay_item = { this.state.overlay_item }
        />
        <NavRegion
          links={ this.state.links } 
          onClick={ this.on }
        />
          <div className="page-items">
            <div className="row">
              <Profile
                name={ this.state.profile_name }
                email={ this.state.profile_email }
                phone={ this.state.profile_phone }
                profileStatus = { this.state.profileStatus }
              />
              <CoolText
                cooltext={ this.state.cooltext }
                cooltextStatus = { this.state.cooltextStatus }
              />
            </div>
          </div>
          <div className="row">
            <Skills
              skills={ this.state.skills }
            />
          </div>
          <div className="row">
            <MessageBox
              minfo={ this.state.minfo } 
              messageStatus = { this.state.messageStatus }
            />
          </div>
      </div>
    )
  }
}

export default App;