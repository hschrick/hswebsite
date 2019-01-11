import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Contact extends Component {
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Harris Schrick</h2>
            <img
              src="https://i.imgur.com/1obxL8y.png"
              alt="avt"
              className="avatar-img"
            />
            <p>Feel free to contact me anytime! I am available 24/7, and will reply or call back within 4 hours of contact.</p>
          </Cell>
          <Cell col={6}>
          <h2><br/>Phone: <br/>770-363-9450</h2>
          <h2>Email: Schrickharris@gmail.com</h2>
          <h2>Skype: live:d099a75218e96f52</h2>
          </Cell>
        </Grid>
      </div>


    )
  }
}

export default Contact;
