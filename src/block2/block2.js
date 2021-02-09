import React, { Component } from 'react';
import './block2.css';

class Block2 extends Component {
    render(){
        return (
            <div className="first">
                <h1>Hi, I'm a React App</h1>
                <h2>My age is {Math.floor(Math.random() * 81)} </h2>
                <h3>This is Really working.</h3>
            </div>
        )
    }
    
};

export default Block2;

