/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import CounterApp from './src/CounterApp'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState={
  counter:0
}
const reducer=(state=initialState,action)=>{
      switch(action.type){
        case 'INCREASE_COUNTER':
                 return{counter:state.counter+1}
        case 'DECREASE_COUNTER':
                 return{counter:state.counter-1}
      }
      return state
}
const store=createStore(reducer)

export default class App extends Component{

  render() {
    return (
      <Provider store={store}>
      <CounterApp/>
      </Provider>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  }
})
