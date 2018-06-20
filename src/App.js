import React, { Component } from 'react';
import './App.css';
import UserCart from './userCart.js';
import NavBar from './Nav.js';
 import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isloading: false,
      loaded: false,
      userData: {},
      account :'chidelmun'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  componentDidMount(){
    setTimeout(function(){

    }, 5000);
    console.log(this.state);
    axios.get(`https://api.github.com/users/${this.state.account}/followers`)
          .then((userInfo)=>{
            console.log(userInfo);
            this.setState({...this.state, isloading: true, loaded: true, userData: userInfo.data});
          })
  }

  handleChange(event){
    //console.log(event.target.value);
    this.setState({...this.state, comment: event.target.value})
  }

  handleUser(user){
    console.log(user);
    this.setState({...this.state, account: user});
    this.componentDidMount();
  }

  render() {



    return (
      <div className="container">
        <NavBar />
          <div className="jumbotron">

          </div>
          <hr/>
            {
              this.state.loaded ? 
              <div className="row">
                  <div className="col-md-6 left">
                  <br/><br/>
                      <div className="form-group">
                        <textarea onChange={this.handleChange} className="form-control" rows="5" ></textarea>
                      </div>
                      <hr/>
                      <div className="jumbotron">
                        <code> {this.state.comment} </code>
                      </div>
                   </div>
                  <div className="col-md-6 right">
                      <hr/>
                      <UserCart email={this.state.userData.login} imageUrl={this.state.userData.avatar_url} />
                   </div>
              </div>
               : 'Loading...'

            }

          <hr/>

            <div className="row">
                {
                  this.state.loaded ? 
                    this.state.userData.map((user, index)=>{
                        return (
                            <div key={index} className="col-md-4">
                              <div onClick={()=>{this.handleUser(user.login)}} className="thumbnail">
                                  <img src={user.avatar_url} alt="Lights" />
                                  <div className="caption">
                                    <h2>{user.login}</h2>
                                  </div>
                               
                              </div>
                            </div>
                          )
                    })
                    : 'Loading Images....'

                }
              </div>

      </div>
    );
  }
}

export default App;
