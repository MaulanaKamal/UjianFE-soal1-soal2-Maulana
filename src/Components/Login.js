import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css'

export default class Login extends Component {
    render(){
        return(
        <div className="col-md-3 login">
            <div className="form-group">
                <label htmlFor="input">Nama</label>
                <input type="text" id="input" className="form-control" ref="input"/>
            </div>

                <Link to='/welcome' onClick={() => {this.props.newName(this.refs.input.value);}} className="btn btn-primary">Submit</Link>        
        </div>
        )
    }
}
