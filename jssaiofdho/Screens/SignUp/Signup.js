import React,{Component} from "react";
import {View,Text} from "react-native";

class Signup extends Component{



    render(){

        return(
            <View style={{flex:1,justifyContent:"center",alignItems:'center',backgroundColor:"red"}}>
                <Text onPress={()=>this.props.navigation.popToTop()} >Signup</Text>
            </View>
        )
    }
}


export default Signup;