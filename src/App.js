import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Navbar } from './Navbar';
import { About } from './About'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      <Switch>
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
