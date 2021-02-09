import React, { Component } from 'react';
import './block.css';
import Styled from 'styled-components';
const Mybtn = Styled.button`
display: block;

padding: 6px;
margin: 15px auto;
background-color: white;
border: 1px solid white;
border-radius: 3px;
&:hover{
    background-color: blue;
    border: 1px solid blue; 
    color: white;
    transition : 0.7s;
}`;

const P1 = Styled.p`
color: white;
font-size: 140%;
& hover: {
    color: green;
    transition: 0.8s;
}
`;

const Input = Styled.input`
display: block;
margin: 5px auto;
padding: 7px;
border-radius: 2px;
border: 1px solid white;`;


class Block extends Component{
    render(){
        console.log('[block.js] rendering...');
        return (
            <div className="block">
                <P1>My name is {this.props.name}</P1>
                <Input type="text" onChange={this.props.namechange} value={this.props.name} />
                <Mybtn type="text" onClick={this.props.removecontent}>Remove Me</Mybtn>
            </div>
        );
    }
    }
   


export default Block;