import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Nav } from './components/Nav';
import { Container } from './components/Container';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router>
    <div className="App">
    <img className="image-background" src="https://web.archive.org/web/20161031200755if_/http://static.panoramio.com/photos/large/102225398.jpg"/>
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
