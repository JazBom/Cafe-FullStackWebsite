import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Nav } from './components/Nav';
import { Container } from './components/Container';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';
import { NewUserForm } from './components/NewUserForm';
import { LogInForm } from './components/LogInForm';

const App = () => {
  return (
    <Router>
    <div className="App">
    <img className="image-background" src="https://web.archive.org/web/20161031200755if_/http://static.panoramio.com/photos/large/102225398.jpg" alt="beach boxes in background"/>
    <Nav/>
          <Switch>
          
          <Route path="/">
            <Container/>
          </Route>
          
          <Route path="/about">
            <About/>
          </Route>
          
          <Route path="/menu">
            <Menu/>
          </Route>
          
          <Route path="/admin">
            <Admin/>
          </Route>

          <Route path="/newUserForm">
            <NewUserForm/>
          </Route>

          <Route path="/logInForm">
          <LogInForm/>
          </Route>

        </Switch>
        
    <Footer/>
    </div>
    </Router>
  );
}

export { App };
