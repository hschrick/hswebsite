import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="big-content">
    <Layout>
        <Header className="header-color" title="Harris Schrick" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/pipeline">Pipeline</Link>
                <Link to="/contactme">ContactMe</Link>
            </Navigation>
        </Header>
        <Drawer title="">
            <Navigation className="drawercolor">
              <Link to="/" style={{ color: '#FFF' }}>Home</Link>
              <Link to="/resume" style={{ color: '#FFF' }}>Resume</Link>
              <Link to="/projects" style={{ color: '#FFF' }}>Projects</Link>
              <Link to="/pipeline" style={{ color: '#FFF' }}>Pipeline</Link>
              <Link to="/contactme" style={{ color: '#FFF' }}>ContactMe</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
