import React, { Component } from 'react'
import './App.css'
import NavRegion from './components/NavRegion/NavRegion'
import CoolText from './components/CoolText/CoolText'
import Skills from './components/Skills/Skills'
import About from './components/Screens/About'
import Craft from './components/Screens/Craft'
import Footer from './components/Footer/Footer'
import 'animate.css/animate.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      links: [
        { url: '/do', name: 'Craft' },
        { url: '/', name: 'About me' }
      ],
      profileStatus: false,
      messageStatus: false,
      homeStatus: true,
      aboutStatus: false,
      craftStatus: false,
      cooltext: 'Build experiences across platforms',
      profile_name: 'Salifu Mutaru',
      profile_email: 'developer.salifu@gmail.com',
      profile_phone: '(+233) 0543 - 344 - 100',
      copyright: '© 2017 Salm',
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
          'description': `Build and share experiences so personal you can carry everywhere you go.`
        },
        {
          title: 'Web REST APIs',
          'image': 'img/18.jpg',
          'description': 'Build secure, scalable and fast interfaces for your infrastructure so you can serve the world with ease.'
        }
      ]
    }
    this.on = this.on.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleContactChange = this.handleContactChange.bind(this)
  }

  /* Put on the overlay */
  on(type) {
    switch(type){
      case 'Home':
        this.setState({ homeStatus: true, craftStatus:false, aboutStatus:false})
        break
      case 'About me':
        this.setState({ aboutStatus: true, homeStatus: false, craftStatus: false })
        break
      case 'Craft':
        this.setState({ craftStatus: true, homeStatus: false, aboutStatus: false })
        break
      default:
        this.setState({ homeStatus: true, aboutStatus: false, craftStatus: false })
    }
  }

  handleSubmit(email, name, message) {
    console.log(email + name + message)
  }

  handleContactChange(newContactDetails, type) {
    if(type === 'contact_name') {
      this.setState({ contact_name: this.state.contact_name + newContactDetails})
    }
    else if(type === 'contact_email') {
      this.setState({ contact_email: newContactDetails})
    }
    else if(type === 'contact_message') {
      this.setState({contact_message: newContactDetails})
    }
    console.log("email : " + this.state.contact_email)
    console.log("name : " + this.state.contact_name)
    console.log("message : " + this.state.contact_message)
  }

  render() {
    return (
      <div className="home-background">
        <div className="row">
          <NavRegion
            links={ this.state.links } 
            onClick={ this.on }
          />
        </div>
        { this.state.homeStatus?
          <div>
            <div className="page-items">
              <div className="row">
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
          </div>
          : ''
        }
        { this.state.aboutStatus?
          <div className="row">
            <About />
          </div>
          : ''
        }
        {
          this.state.craftStatus?
          <div className="row">
            <Craft />
          </div>
          : ''
        }
          <div className="row">
            <Footer 
              phone={this.state.profile_phone}
              email={this.state.profile_email}
              copyright={this.state.copyright}
            />
            </div>
      </div>
    )
  }
}

export default App;
