import React, { Component } from 'react';
import Block from './block/block';
import Block2 from './block2/block2';
import './App.css';

class App extends Component {
  constructor(props){
    super(props) //  inherting the extended components.
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js]  getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  state = {
    Array: [
      { id: "r", name: "Vishvamitra" },
      { id: "rr", name: "Krishna" },
      { id: "rrr", name: "Maxmellian" },
    ],
    myBollean: true
  }
 
  /// deletecontent handler

  deleteContentHandler = (k) => {
    const excessarray = [...this.state.Array];
    excessarray.splice(k, 1);
    this.setState({ Array: excessarray });
  };

  // namechangeHandler
  NameChangeHandler = (event, id) => {
    const index = this.state.Array.findIndex(p => {
      return (
        p.id === id
      )
    });

    const indeex = {
      ...this.state.Array[index]

    };
    indeex.name = event.target.value;
    const array = [...this.state.Array];
    array[index] = indeex;
    this.setState({ Array: array });

  };


  // changeBoleanHandler
  ChangeBooleanHandler=()=>{
 const f= this.state.myBollean;
 this.setState(
   {myBollean : !f}
 )
  };



  render() {
console.log('[App.js] render');

    const classes =[];
    if (this.state.myBollean===true){
      classes.push('greenbtn');
    };
    if (this.state.myBollean===false){
      classes.push('redbtn');
    }

  
    let d = (
      <div>
        <button className={classes} onClick={this.ChangeBooleanHandler} type="text">Creat Blocks</button>
      </div>
    );
    let c = null;

    if (this.state.myBollean===false) {
      c = (
        <div>
          {this.state.Array.map(
            (i) => {
              return <Block
                name={i.name}
                key={i.id}
                removecontent={this.deleteContentHandler}
                namechange={(event) => this.NameChangeHandler(event, i.id)} />
            }
          )}
        </div>
      );

      d = (
        <div>
          <button className={classes}  onClick={this.ChangeBooleanHandler} type="text">Remove Blocks</button>
        </div>
      );
    }

    return (
      <div>
        <h1>{this.props.apptitle}</h1>
        <Block2 />
        {d}
        {c}
      </div>
    );
  }
}

export default App;
