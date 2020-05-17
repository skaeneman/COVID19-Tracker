import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';

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

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    console.log("inside handleLogin in app.js........", data);

    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
          <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
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
                />
              )}
            />
            <Route
              exact
              path={"/login"}
              render={props => (
                <LoginPage
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
