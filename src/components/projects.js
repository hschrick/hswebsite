import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';



class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    };
  }

toggleCategories() {
  if(this.state.activeTab === 0){
    return(
      <div class="row">
        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">console BlackJack</h3>
          <p class="cardtext">a console based BlackJack game I made for programming architecture</p>
          <Button href="https://github.com/hschrick/nonUi-BlackJack" colored style={{color: '#fff'}} class="cardbutton">View on github</Button>
          </div>
        </div>



        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">Dial-up simulator</h3>
          <p class="cardtext"> dial up project where a user can make a connection and call/block etc with other users.</p>
          <Button href="https://github.com/hschrick/Dial-up-Project" colored style={{color: '#fff'}} class="cardbutton">View on github</Button>
          </div>
        </div>


        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">Vending Machine</h3>
          <p class="cardtext">vending machine where users can insert money and make a purchase. Includes both a use-case and uml diagram </p>
          <Button href="https://github.com/hschrick/Vending-machine" colored style={{color: '#fff'}} class="cardbutton">View on github</Button>
          </div>
        </div>


        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 1</h3>
          <p class="cardtext"> simple form application from prog-structures</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>
      </div>


    )
  } else if (this.state.activeTab === 1) {
    return(
      <div className="projects-grid">
      <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(https://i.imgur.com/TVVkzag.png) bottom right 15% no-repeat #FF5733'}}>Update</CardTitle>
    <CardText>
        nothing yet
    </CardText>
    <CardActions border>
        <Button colored>View Updates</Button>
    </CardActions>
</Card>

<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
<CardTitle expand style={{color: '#fff', background: 'url(https://i.imgur.com/TVVkzag.png) bottom right 15% no-repeat #FF5733'}}>Update</CardTitle>
<CardText>
  nothing yet
</CardText>
<CardActions border>
  <Button colored>View Updates</Button>
</CardActions>
</Card>

<Card shadow={0} style={{width: '320px', height: '320px', margin: '60px 30px'}}>
<CardTitle expand style={{color: '#fff', background: 'url(https://i.imgur.com/TVVkzag.png) bottom right 15% no-repeat #FF5733'}}>Update</CardTitle>
<CardText>
    nothing yet
</CardText>
<CardActions border>
  <Button colored>View Updates</Button>
</CardActions>
</Card>

<Card shadow={0} style={{width: '320px', height: '320px', margin: '60px 30px'}}>
<CardTitle expand style={{color: '#fff', background: 'url(https://i.imgur.com/TVVkzag.png) bottom right 15% no-repeat #FF5733'}}>Update</CardTitle>
<CardText>
  nothing yet
</CardText>
<CardActions border>
  <Button colored>View Updates</Button>
</CardActions>
</Card>
</div>
    )
  } else if (this.state.activeTab === 2) {
    return(

      <div class="row">
        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>


        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>


        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>


        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>


        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>


        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>

        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>

        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>

        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>

        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>

        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>

        <div class="column">
        <div class="card">
          <h3>Card 1</h3>
          <p class="cardtext">some text</p>
          <p class="cardtext">some text</p>
          </div>
        </div>
      </div>
    )
  } else if (this.state.activeTab === 3) {
    return(
      <div className="projects-grid">
      <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url("https://i.imgur.com/6xssbFm.png") bottom right 15% no-repeat #000000'}}>Update</CardTitle>
    <CardText>
        nothing yet
    </CardText>
    <CardActions border>
        <Button colored>View Updates</Button>
    </CardActions>
</Card>


</div>
    )
  }
}


  render(){
    return(
      <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}ripple>
      <Tab>C#</Tab>
      <Tab>JavaScript</Tab>
      <Tab>C/C++</Tab>
      <Tab>SML</Tab>
      </Tabs>



      <Grid>
        <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
        </Cell>
      </Grid>

      </div>
    )
  }
}

export default Projects;
