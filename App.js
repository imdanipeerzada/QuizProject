import React, { Component } from 'react';
import MyStack from './navigation'
 
export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <MyStack/>
    );
  }
};
