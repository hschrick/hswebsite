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
  /*1*/
  if(this.state.activeTab === 0){
    return(
      <div className="projects-grid">
      <Card shadow={0} style={{width: '320px', height: '320px'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>prog-archictecture</CardTitle>
    <CardText>
      nonUi simple BlackJack game.
    </CardText>
    <CardActions border>
        <Button href="https://github.com/hschrick/nonUi-BlackJack" colored>View on github</Button>
    </CardActions>
</Card>


<Card shadow={0} style={{width: '320px', height: '320px'}}>
<CardTitle expand style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>prog-archictecture</CardTitle>
<CardText>
  dial up project where a user can make a connection and call/block etc with other users.
</CardText>
<CardActions border>
  <Button href="https://github.com/hschrick/Dial-up-Project" colored>View on github</Button>
</CardActions>
</Card>

<Card shadow={0} style={{width: '320px', height: '320px'}}>
<CardTitle expand style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>prog-archictecture</CardTitle>
<CardText>
  vending machine where users can insert money and make a purchase
</CardText>
<CardActions border>
  <Button href="https://github.com/hschrick/Vending-machine" colored>View on github</Button>
</CardActions>
</Card>




<Card shadow={0} style={{width: '320px', height: '320px'}}>
<CardTitle expand style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>prog-structures</CardTitle>
<CardText>
  simple form application from prog-structures
</CardText>
<CardActions border>
  <Button colored>Private, code is blocked</Button>
</CardActions>
</Card>

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
</div>
    )
  } else if (this.state.activeTab === 2) {
    return(
      <div><h1>this is C/C++</h1></div>
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
