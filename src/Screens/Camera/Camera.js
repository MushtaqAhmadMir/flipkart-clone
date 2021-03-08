import React, {Component}from 'react'
import {Text ,View,TouchableOpacity} from 'react-native'



export default class Camera extends Component{
   
constructor(props)
{
    super(props);
}
render()
{
    return(
        <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
      <Text>Hello Welcome to Camera</Text>

        </View>
    )
}
}