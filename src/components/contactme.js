import React, {Component} from 'react';
import {Textfield} from 'react-mdl';
class Contact extends Component {
  render(){
    return(
      <div className="landing-grid">
      <div className="contact-banner">
      <div className="App">
    <center><h1>Contact Me</h1></center>
    <center><h1>770-363-9450 or...</h1></center>
    <div>
    <form action="/action_page.php">
    <label>First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" />


    <label>Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
    </div>
    </div>



    )
  }
}

export default Contact;
