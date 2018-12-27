import React, {Component} from 'react';
import {Card,CardTitle,CardActions,Button,Icon} from 'react-mdl';

class Pipeline extends Component {
  render(){
    return(
      <div className="master-background">
  <div className="row">
      <div className="split1"><h1>Upcoming</h1>
      {/*Upcoming card 1*/}
      <center>
      <Card shadow={0} style={{width: '256px', height: '256px', background: '#C0392B', margin: 50}}>
    <CardTitle expand style={{alignItems: 'center', color: 'white', textalign: 'center'}}>
        <h4 style={{marginTop: '0'}}>
        just a placeholder
        </h4>
    </CardTitle>
    </Card>
    </center>

    {/*Upcoming card 2*/}
    <center>
    <Card shadow={0} style={{width: '256px', height: '256px', background: '#C0392B', margin: 50}}>
  <CardTitle expand style={{alignItems: 'center', color: 'white', textalign: 'center'}}>
      <h4 style={{marginTop: '0'}}>
      just a placeholder
      </h4>
  </CardTitle>
  </Card>
  </center>

  {/*Upcoming card 1*/}
  <center>
  <Card shadow={0} style={{width: '256px', height: '256px', background: '#C0392B', margin: 50}}>
<CardTitle expand style={{alignItems: 'center', color: 'white', textalign: 'center'}}>
    <h4 style={{marginTop: '0'}}>
    just a placeholder
    </h4>
</CardTitle>
</Card>
</center>

{/*Upcoming card 1*/}
<center>
<Card shadow={0} style={{width: '256px', height: '256px', background: '#C0392B', margin: 50}}>
<CardTitle expand style={{alignItems: 'center', color: 'white', textalign: 'center'}}>
  <h4 style={{marginTop: '0'}}>
  just a placeholder
  </h4>
</CardTitle>
</Card>
</center>

{/*Upcoming card 1*/}
<center>
<Card shadow={0} style={{width: '256px', height: '256px', background: '#C0392B', margin: 50}}>
<CardTitle expand style={{alignItems: 'center', color: 'white', textalign: 'center'}}>
  <h4 style={{marginTop: '0'}}>
  just a placeholder
  </h4>
</CardTitle>
</Card>
</center>

{/*Upcoming card 1*/}
<center>
<Card shadow={0} style={{width: '256px', height: '256px', background: '#C0392B', margin: 50}}>
<CardTitle expand style={{alignItems: 'center', color: 'white', textalign: 'center'}}>
  <h4 style={{marginTop: '0'}}>
  just a placeholder
  </h4>
</CardTitle>
</Card>
</center>
      </div>
      <div className="split2"><h1>In Progress</h1>
      {/*In Progress card 1*/}
      <center>
      <Card shadow={0} style={{width: '256px', height: '256px', background: '#D4AC0D', margin: 50}}>
    <CardTitle expand style={{alignItems: 'center', color: 'white', textalign: 'center'}}>
        <h4 style={{marginTop: '0'}}>
        C++ typing test app
        </h4>
    </CardTitle>
    <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
        <Button className="cardButton" colored style={{color: 'white', align: 'center'}}>Check my Progress</Button>
        <div className="mdl-layout-spacer"></div>
    </CardActions>
</Card>
</center>

{/*In Progress card 1*/}
<center>
<Card shadow={0} style={{width: '256px', height: '256px', background: '#D4AC0D', margin: 50}}>
<CardTitle expand style={{alignItems: 'center', color: 'white', textalign: 'center'}}>
  <h4 style={{marginTop: '0'}}>
  resume
  </h4>
</CardTitle>
<CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
  <Button className="cardButton" colored style={{color: 'white', align: 'center'}}>Check my Progress</Button>
  <div className="mdl-layout-spacer"></div>
</CardActions>
</Card>
</center>

      </div>
      <div className="split3"><h1>Completed</h1>
      {/*card 1*/}
      <center>
      <Card shadow={0} style={{width: '256px', height: '256px', background: '#3CB371', margin: 50}}>
    <CardTitle expand style={{alignItems: 'center', color: 'white', textalign: 'center'}}>
        <h4 style={{marginTop: '0'}}>
        This Website
        </h4>
    </CardTitle>
    <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
        <Button className="cardButton" colored style={{color: 'white', align: 'center'}}>View</Button>
        <div className="mdl-layout-spacer"></div>
    </CardActions>
</Card>
</center>

{/*card 2*/}
<center>
<Card shadow={0} style={{width: '256px', height: '256px', background: '#3CB371'}}>
<CardTitle expand style={{alignItems: 'center', color: 'white', textalign: 'center'}}>
  <h4 style={{marginTop: '0'}}>
  Nothing yet
  </h4>
</CardTitle>
<CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
  <Button className="cardButton" colored style={{color: 'white', align: 'center'}}>View</Button>
  <div className="mdl-layout-spacer"></div>
</CardActions>
</Card>
</center>
      </div>
  </div>
  </div>
    )
  }
}

export default Pipeline;
