import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Resume extends Component {
  render(){
    return(
      <div>
      <Grid>
      <Cell className="Resume-left" col={4}>
      <div style={{textalign: 'center'}}>
        <img
          src="https://imgur.com/UJxisa2.png"
          style={{height: '250px', width: '300px', marginLeft: '50px', marginTop: '50px'}}
        />

        <h2 style={{}}>Harris Schrick</h2>
        <h4 style={{color: 'grey'}}>Programmer</h4>
        <hr style={{borderTop: '3px solid #c33764', width: '50%' }}></hr>
        <p>I am currently a senior in college at Kansas State University set to graduate in fall of 2019 under computer science in the college of engineering.</p>
        <hr style={{borderTop: '3px solid #c33764', width: '50%' }}></hr>
        <h5>Address</h5>
        <p>1401 College Ave A206-A, 66502 Manhattan Kansas</p>
        <h5>Phone Number</h5>
        <p>770-363-9450</p>
        <h5>Email</h5>
        <p>Schrickharris@gmail.com</p>
        <hr style={{borderTop: '3px solid #c33764', width: '50%' }}></hr>
      </div>
      </Cell>
      <Cell className="Resume-right" col={8}>
       <h2>High school Education Highlights 2011-2015</h2>
       <p>- Class on Introduction to programming in Java.<br/>
          - Class on Graphic Design.<br/>
          - Class on Constitutional Law.<br/>
          - Varsity lacrosse team 2 years. JV 2 years.<br/>
          - Self taught mobile programming and sold first app for $1,200 after obtaining 33,000 downloads first month of release.<br/>
          - Created 2nd app and obtained 7,000 downloads in the first month.<br/>
       </p>
       <h2>College Education 2015-2020</h2>
       <p>
        Relavant Courses completed so far under BS Computer Science:<br/>
        - Cis 115, Introduction to Computing Science.<br/>
        - Cis 200, Programming Fundamentals.<br/>
        - Cis 300, Data and Programming Structures.<br/>
        - Cis 308, C/C++ language lab.<br/>
        - Cis 501, Software Architecture and Design.<br/>
        - Cis 301, Logrithmic Foundations of Programming.<br/>
        - Cis 415, Ethics in Computing Technology.<br/>
        - Cis 505, Programming Languages<br/>
        - Cis 510, Discrete Math.
       </p>
       <h2>Work Experience</h2>
       <p>
        - 2011: Worked a year at Pike Nursery taking care of/managing thousands of plants and working with customers on specific plants they may want to buy;
         which made me have to grasp an extensive knowledge on plants, flowers, sod and overall how to work with a team.<br/>
        - 2014 -> 2015: Worked at Paddle Boston as a dock hand. In this postition I worked with a team of great people helping thousands of customers every single day<br/>
          in and out of kayaks/Canoes. I received extensive safety training and worked long hours helping/working with customers and other dockhands alike.<br/>
        -2015 -> present: Working for Kansas State Athletic Department as a maintenance worker. This job has an extensive list of skills and adaptability that includes but is not limited to.<br/>
         working with a large team of other workers, mowing/leveling/edging/painting fields multiple football fields wide, general car maintenance such as oil replacement<br/>
         tire replacement, brake fixing. Other skills learned included room painting from floor to ceiling, knowledge in fertlizer, basbeball field/pitching mound maintenance/replacement.<br/>
         This job has been an all around great experience and was something new every day.<br/>
       </p>
      </Cell>
      </Grid>
      </div>
    )
  }
}

export default Resume;
