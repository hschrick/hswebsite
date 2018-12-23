import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
       <Grid className="landing-grid">
       <Cell col={12}>
       <img
         src="https://i.imgur.com/1obxL8y.png"
         alt="avt"
         className="avatar-img"
       />
       <div className="banner-text">
       <h1>Harris Schrick</h1>


       <hr/>

       <p> HTML/CSS | C/C++/Objective-C | C# | JAVA | JavaScript | React | Prolog/SML/Racket</p>

       <div className="social-links">

       /*Linkedin icon*/
       <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-linkedin-square" aria-hidden="true" />
       </a>

       /*Github icon*/
       <a href="https://github.com/hschrick" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-github-square" aria-hidden="true" />
       </a>

       /*Github icon*/
       <a href="https://github.com/hschrick" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-github-square" aria-hidden="true" />
       </a>

       /*Github icon*/
       <a href="https://github.com/hschrick" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-github-square" aria-hidden="true" />
       </a>
       </div>
       </div>
       </Cell>
       </Grid>
      </div>
    )
  }
}

export default Landing;
