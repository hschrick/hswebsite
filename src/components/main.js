import React from 'react';
import {Switch, Route} from 'react-router-dom';
//hooking together all pages
import LandingPage from './landingpage';
import Pipeline from './pipeline';
import ContactMe from './contactme';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/pipeline" component={Pipeline} />
    <Route path="/contactme" component={ContactMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

  export default Main;
