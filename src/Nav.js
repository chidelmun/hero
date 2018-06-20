import React, { Component } from 'react';
import './App.css';
class NavBar extends Component {
  

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="">Git Heroes</a>
          </div>
          
          <ul className="nav navbar-nav navbar-right">
            <li><a href=""><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
