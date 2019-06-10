import React, { Component } from 'react';
import './App.css';
import CreditCard from './CreditCard';
class App extends Component {
  constructor(props)
   {
     super(props)
     this.state={
                  cardNumber :'',
                  clientName :'',
                  validThru :''
                }
   }
   handleNumber = (event) => {
     if (event.target.value.length < 10  ){
     this.setState({
       cardNumber : event.target.value
     })}
   }
   handleName = (event1) => {
    if (event1.target.value.length < 10  ){
    this.setState({
      clientName : event1.target.value
    })}
  }
  handleValidThru = (event2) => {
    if (event2.target.value.length < 10  ){
    this.setState({
      validThru : event2.target.value
    })}
  }
renderClientName =(ch)=>
 {
    const res=ch.toUpperCase();
    return res;
 }
 renderCardNumber =(nmbre)=>
  {
     let resultstr=' ';
     for (let i=0;i< nmbre.length;i+4)
    {
       resultstr += nmbre.slice(i,i+4);
    }
  return resultstr.trim();
  }
  renderValidThru=(nbr)=>
   {
     let res=nbr.slice(0,2)+'/'+ nbr.slice(2);
      return res;
   }
  
  render() {
    return (
      <div className='creditcard'>
            <input type='text' onChange={(e1) => this.handleNumber(e1)} value = {this.state.cardNumber}></input>
            <input type='text' onChange={(e2) =>this.handleName(e2)} value = {this.state.cardNumber}></input>
            <input type='text' onChange={(e3) =>this.handleValidThru(e3)} value = {this.state.cardNumber}></input>
       <CreditCard 
       cardNumber={ this.state.cardNumber}
       clientName={ this.state.clientName}
       validThru={ this.state.validThru}
       renderClientName = {this.renderClientName}
       renderCardNumber = {this.renderCardNumber}
       renderValidThru = {this.renderValidThru}
       
       /> 
      </div>
    );
  }
}

export default App;
