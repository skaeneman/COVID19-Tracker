import React, { Component } from 'react';
import 'babel-polyfill';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Dashboard from './Dashboard';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import StatePolicyPage from './pages/StatePolicyPage';
import ChartPage from './pages/ChartPage';
import Navigation from '../components/Navigation';
import Container from 'react-bootstrap/Container';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    // allows you to pass a function as a prop
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    // this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
    .then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
        // if the API call says a user is logged in update the state in React
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === 'LOGGED_IN') {
        // if the API call says a user isn't logged in update the state in React 
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    }).catch(error => {
      console.log("login error:", error);
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogoutClick() {
    // deletes the session
    axios.delete("http://localhost:3001/logout", { withCredentials: true })
    .then(response => {
      location.href = "/" // redirect to home page
      this.handleLogout(); // set state in react to logged out
    }).catch(error => {
      console.log("error logging out:", error);
    })
  }
 
  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  // handleSuccessfulAuth(data) {
  //   console.log("inside app.js handleSuccessfulAuth...")
  //   this.handleLogin(data);
  //   this.props.history.push("/");
  // }  

  render() {
    return (
      <div className='app'>
        <Navigation 
          isLoggedIn={this.state.loggedInStatus} 
          user={this.state.user}
          handleLogoutClick={this.handleLogoutClick} 
          handleLogout={this.handleLogout} 
        />    
        <BrowserRouter>
          <Switch>
          <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogout={this.handleLogout}
                  handleLogoutClick={this.handleLogoutClick}
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path={"/login"}
              render={props => (
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  handleLogoutClick={this.handleLogoutClick}
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                />
              )}
            />     
            <Route
              exact
              path={"/signup"}
              render={props => (
                <RegistrationPage
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  handleLogoutClick={this.handleLogoutClick}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />    
            <Route
              exact
              path={"/states"}
              render={props => (
                <StatePolicyPage
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  handleLogoutClick={this.handleLogoutClick}
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                />
              )}
            />    
            <Route
              exact
              path={"/charts"}
              render={props => (
                <ChartPage
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  handleLogoutClick={this.handleLogoutClick}
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                />
              )}
            />                                        
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
