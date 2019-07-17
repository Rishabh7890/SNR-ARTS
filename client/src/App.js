import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Paintings from './pages/Paintings';
import Contact from './pages/Contact';
import PaintingInfo from './pages/paintingInfo';


function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/paintings' component={Paintings} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/paintingInfo/:id' component={PaintingInfo} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
