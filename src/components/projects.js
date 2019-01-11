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


        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 2</h3>
          <p class="cardtext"> basic text editor</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 3</h3>
          <p class="cardtext"> text editor extended</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 4</h3>
          <p class="cardtext"> text editor with encryption</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 5</h3>
          <p class="cardtext"> final version of text editor, saving, encryption, redo/undo included</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 6</h3>
          <p class="cardtext"> program that checks for matching paranthesis [()]</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 7</h3>
          <p class="cardtext"> program that checks for matching paranethesis using a stack to store the data [()]</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 8</h3>
          <p class="cardtext"> capital gains calculator</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 9</h3>
          <p class="cardtext">  program that checks for matching paranthesis using linked lists [()]</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 10</h3>
          <p class="cardtext">capital gains calculator using linked lists</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 11</h3>
          <p class="cardtext">capital gains calculator using Queue's </p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 12</h3>
          <p class="cardtext">store prime numbers using linked lists</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 13</h3>
          <p class="cardtext">  Looks up name,frequency, and rank from database based on users input</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 14</h3>
          <p class="cardtext"> a more improved name lookup system from last lab</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 15</h3>
          <p class="cardtext">finds the size of an inputted folder</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 16</h3>
          <p class="cardtext">name lookup system using binary tree's for efficiency</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 17</h3>
          <p class="cardtext">name lookup system using binary search tree, extended to add and remove names.</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 18</h3>
          <p class="cardtext">name lookup using a binary tree now allows saving of program</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 19</h3>
          <p class="cardtext">name lookup with binary search tree, returns results in sorted order</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 20</h3>
          <p class="cardtext">a word lookup program using a Trie/digital tree</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 21</h3>
          <p class="cardtext">a word lookup program using a Trie/digital tree but now with both no child nodes and with one child node</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 22</h3>
          <p class="cardtext">a word lookup program using a Trie/digital tree with multiple child nodes</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 23</h3>
          <p class="cardtext">Boggle game built using a Trie/digital tree</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 24</h3>
          <p class="cardtext">sorting program using leftist trees and minPriorityQueues</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 25</h3>
          <p class="cardtext">program that reads a file and stores the data using a Huffman Tree</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 19</h3>
          <p class="cardtext">name lookup with binary search tree, returns results in sorted order</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 19</h3>
          <p class="cardtext">name lookup with binary search tree, returns results in sorted order</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 19</h3>
          <p class="cardtext">name lookup with binary search tree, returns results in sorted order</p>
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
