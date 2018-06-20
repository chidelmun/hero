import React, { Component } from 'react';
import './App.css';
class UserCart extends Component {
  

  render() {
    return (
      <div className="cart"> 
          <h2> {this.props.email} </h2>
          <img src={this.props.imageUrl} className="img-thumbnail" alt="Cinque Terre" />
      </div>
    );
  }
}

export default UserCart;
