import React from 'react'
import './Screens.css'


class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      contact_name: '',
      contact_email: '',
      contact_message: '',
      contact_name_status: '',
      contact_email_status: '',
      contact_message_status: '',
      hideForm: false,

    }
    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async submit() {
    await this.setState({ hideForm: true })
    this.props.onSubmit(this.state.contact_name, this.state.contact_email, this.state.contact_message)
  }

  async handleChange(value, id) {
    if(id === 'contact_name') {
      await this.setState({ contact_name: value })
      var length = this.state.contact_name.length
      if(length < 2 && length > 0){ await this.setState({ contact_name_status: 'false' }) }
      else if (length === 0) { await this.setState({ contact_name_status: ''}) }
      else if (length >= 2) { await this.setState({ contact_name_status: 'true' })}
    }
    else if(id === 'contact_email') {
      await this.setState({ contact_email: value })
      if(this.state.contact_email.length === 0){ await this.setState({ contact_email_status: ''}) }
      else {
        var emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        if(emailValid) { await this.setState({ contact_email_status: 'true' }) }
        else { await this.setState({ contact_email_status: 'false' }) }
      }
    }
    else if(id === 'contact_message') {
      await this.setState({ contact_message: value })
      if(this.contact_message.length === 0) { await this.setState({ contact_message_status: ''}) }
      else {
        if(this.state.contact_message.length > 10) { await this.setState({ contact_message_status: 'true' }) }
        else { this.setState({ contact_message_status: 'false' })}
      }
    }  
  }

  render() {
    return (
      <div className="overlay-area">
        <div id="form-area" className="animated slideInUp" >
          { this.state.hideForm == false? '':
          <div id="sending">Sending...</div>
          }
          { this.state.hideForm? '':
          <div>
            <div id="hello-text">Say  <b className="pinky-text">hello!</b></div>
            <div className="form-element">
              <input type="text" name="name" id="contact_name" placeholder="Your name" 
              className={this.state.contact_name_status}
              value={this.state.contact_name}
              onChange={ (e) => {
                this.handleChange(e.target.value, e.target.id)
              }} />
            </div>
            <div className="form-element">
              <input type="email" name="email" id="contact_email" placeholder="Your email"
                className={this.state.contact_email_status} 
                value={this.state.contact_email}
                onChange={ (e) => {
                  this.handleChange(e.target.value, e.target.id)
                }} />
            </div>
            <div className="form-element">
              <textarea placeholder="Your message" name="message" id="contact_message"
                className={this.state.contact_message_status}  
                value={this.state.contact_message}
                onChange={ (e) => {
                  this.handleChange(e.target.value, e.target.id)
                }} ></textarea>
            </div>
            <button className="cool-btn"
            onClick={this.submit}>Send</button>
          </div>
          }
        </div>
      </div>
    )
  }
}

export default Contact