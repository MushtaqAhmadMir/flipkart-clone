import React,{Component} from "react";
import {View,Text} from "react-native";

class Login extends Component{
    state={
        newPostArray:[]
    }


    render(){
        const {navigation}=this.props;
        const {newPostArray}=this.state;
        return(
          <View>
          <View style={{height:300,backgroundColor:"#3700b3"}}>
             
          </View>
            <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                <Text onPress={()=>navigation.navigate("signUp")}>Login</Text>
            </View>
            </View>
        )
    }
}


export default Login;