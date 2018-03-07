import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Login from './Components/Login';
import Welcome from './Components/Welcome';


export default class App extends Component {
  constructor() {
    super();
    this.state = { name : '' }
  }

  newName = name => { 
    this.setState({name})
  }
  render(){
    return (
      <div>
        <ul className="nav nav-tabs">
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/welcome'>Welcome</Link></li>
        </ul>

        <div>
          <Route path='/login' render={() => <Login newName={this.newName.bind(this)}/>}/>
          <Route path='/welcome' render={() => <Welcome name={this.state.name}/>}/>				
        </div>

    </div>
    )
  } 
    
}

