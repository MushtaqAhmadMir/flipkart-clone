import React ,{ Component } from "react";
import {View,Text } from "react-native";
import Routes from "./src/navigation/Routes";
Routes
//import Test from "./Test";

class App extends Component{


  render(){

    return(
      <Routes />
    )
  }
}


export default App;