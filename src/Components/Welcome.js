import React, { Component } from 'react';
import '../styles/Welcome.css'



export default class Welcome extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}


