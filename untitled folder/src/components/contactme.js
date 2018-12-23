import React, {Component} from 'react';
import {Textfield} from 'react-mdl';
class Contact extends Component {
  render(){
    return(
      //<div><h1>Send me a message!</h1></div>
      <div className="contactform">

      <Textfield
      onChange={() => {}}
      label="Name"
      floatingLabel
      style={{width: '200px'}}
      />

      <Textfield
      onChange={() => {}}
      label="Company(optional)"
      floatingLabel
      style={{width: '200px'}}
      />

      <Textfield
      onChange={() => {}}
      label="email"
      floatingLabel
      style={{width: '200px'}}
      />

      <Textfield
      onChange={() => {}}
      label="phone number(optional)"
      floatingLabel
      style={{width: '200px'}}
      />

      <Textfield
      onChange={() => {}}
      label="write your message here"
      rows={3}
      style={{width: '200px'}}
      />
      </div>



    )
  }
}

export default Contact;
