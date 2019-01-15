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
          <h3 class="cardtitle">prog-structures: Lab 26</h3>
          <p class="cardtext">name lookup using a Dictionary</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 27</h3>
          <p class="cardtext">Nim game built by overriding function definitions</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 28</h3>
          <p class="cardtext">Nim game expanded</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 29</h3>
          <p class="cardtext">Nim game expanded using Dictionary and LinkedLists</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 30</h3>
          <p class="cardtext">Nim game final version as efficient as I could get it</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 31</h3>
          <p class="cardtext">Name lookup program using Dictionary and hash tables</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 32</h3>
          <p class="cardtext">Finds shortest path within an inputted graph</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 33</h3>
          <p class="cardtext">Finds shortest path within a inputted map using a breadth first search algorithm </p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 34</h3>
          <p class="cardtext">finds and displays the shortest path with a given maze</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 35</h3>
          <p class="cardtext">finds the shortest path using directed graphs</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 36</h3>
          <p class="cardtext">list sorting program</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 37</h3>
          <p class="cardtext">sorting a list using a swapping algorithm</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 38</h3>
          <p class="cardtext">sorting a list using merge sort</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 39</h3>
          <p class="cardtext">sorting a list using pivot sort and merge sort</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Lab 40</h3>
          <p class="cardtext">sorting a list using Insertion sort</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Project 1</h3>
          <p class="cardtext">program that finds the shortest distance between 3 locations using the traveling salesperson algorithm</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Project 2</h3>
          <p class="cardtext">program that schedules employee's for work depending on data given by them</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Project 3</h3>
          <p class="cardtext">mastermind code breaker program, slightly buggy still</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Project 4</h3>
          <p class="cardtext">task scheduler program using concepts like MinPriorityQueues</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Project 5</h3>
          <p class="cardtext">complex name lookup program using hash functions</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>

        <div class="column">
        <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/q99FVBF.png) bottom right 15% no-repeat #134E5E'}}>
          <h3 class="cardtitle">prog-structures: Project 6</h3>
          <p class="cardtext">a redone program of Project 2 but with concepts we have learned throughout the semester</p>
          <Button  colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
          </div>
        </div>
      </div>


    )
  } else if (this.state.activeTab === 1) {
    return(

     <div class="row">
      <div class="column">
      <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/TVVkzag.png) bottom right 15% no-repeat #FF5733'}}>
        <h3 class="cardtitle">Mancala</h3>
        <p class="cardtext">Just a simple game of mancala</p>
        <Button href="https://github.com/hschrick/mancala" colored style={{color: '#fff'}} class="cardbutton">View on github</Button>
        </div>
      </div>

      <div class="column">
      <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/TVVkzag.png) bottom right 15% no-repeat #FF5733'}}>
        <h3 class="cardtitle">Space Invaders</h3>
        <p class="cardtext">space invaders game using js canvas for rendering</p>
        <Button href="https://github.com/hschrick/spaceinvaders" colored style={{color: '#fff'}} class="cardbutton">View on github</Button>
        </div>
      </div>

      <div class="column">
      <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/TVVkzag.png) bottom right 15% no-repeat #FF5733'}}>
        <h3 class="cardtitle">Asteroids</h3>
        <p class="cardtext">dodge the asteroids and blow them up with your missles</p>
        <Button href="https://github.com/hschrick/asteroids" colored style={{color: '#fff'}} class="cardbutton">View on github</Button>
        </div>
      </div>

      <div class="column">
      <div class="card" style={{color: '#fff', background: 'url(https://i.imgur.com/TVVkzag.png) bottom right 15% no-repeat #FF5733'}}>
        <h3 class="cardtitle">Entire Class Project: Space Radiers</h3>
        <p class="cardtext">A collaberation between me and about 16 classmates to make a zelda style game</p>
        <Button href="https://github.com/CIS580/space-raiders" colored style={{color: '#fff'}} class="cardbutton">View on github</Button>
        </div>
      </div>
      </div>
    )
  } else if (this.state.activeTab === 2) {
    return(
      <div class="row">
       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 1</h3>
         <p class="cardtext">simple calculator to find the power of a number</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 2</h3>
         <p class="cardtext">program that checks if a character is repeated when a string is inputted</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 3</h3>
         <p class="cardtext">program that makes converts inputs into uppercase form</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 4</h3>
         <p class="cardtext">a very simple inputable database for students info</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 5</h3>
         <p class="cardtext">more in depth database for students using structs to store data</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 6</h3>
         <p class="cardtext">simple stats program given an input</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 7</h3>
         <p class="cardtext">very simple name and age outputter given input</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 8</h3>
         <p class="cardtext">working with memory managment in c++ using linked lists</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 9</h3>
         <p class="cardtext">integer set manipulation given inputs</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 10</h3>
         <p class="cardtext">set manipulation using Template classes in c++</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 11</h3>
         <p class="cardtext">program working with input and output streams</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 12</h3>
         <p class="cardtext">gives the area of a square or rectangle given a length</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Project 1</h3>
         <p class="cardtext">Sequence and Order validation</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Project 2</h3>
         <p class="cardtext">file corrupted, do not remember what this was</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>

       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Project 3</h3>
         <p class="cardtext">program takes 2 sets of numbers and organizes them based on
intersecting numbers, different numbers, and all numbers</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>
      </div>
    )
  } else if (this.state.activeTab === 3) {
    return(
      <div class="row">
       <div class="column">
       <div class="card" style={{color: '#fff', background: 'url(https://imgur.com/Hgq7z6f.png) bottom right 15% no-repeat #B22222'}}>
         <h3 class="cardtitle">cis 308: Lab 1</h3>
         <p class="cardtext">simple calculator to find the power of a number</p>
         <Button colored style={{color: '#fff'}} class="cardbutton">Private, code is blocked unless requested</Button>
         </div>
       </div>
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
