import React, {Component} from "react"
import {Text} from "react-native"
import Routes from "../../navigation/Routes"
Routes

export default class MainPage extends Component {
    constructor(){
        super()
        this.state = {
            abc: "abc"
        }
    }

    render(){
        return(
            <Routes />
        )
    }

} 