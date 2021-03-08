import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import navigationStrings from "../../constants/navigationStrings";

const image = {
  uri:
    "https://i2.wp.com/technosports.co.in/wp-content/uploads/2021/02/EuWuVD7UcAMdejC.jpg?fit=1080%2C2104&ssl=1",
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: "abc",
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#2874f0", marginTop: 20 }}>
        <ImageBackground
          style={{
            width: 430,
            height: 750,
            display: "flex",
            position: "relative",
          }}
          source={image}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              bottom: 120,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(navigationStrings.LOGIN)
              }
              style={{
                backgroundColor: "#016db4",
                borderRadius: 5,
                borderWidth: 1,
                width: 200,
                marginTop: 50,
                height: 60,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 25 }}>LOG IN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(navigationStrings.SIGNUP)
              }
              style={{
                marginLeft: 20,
                backgroundColor: "#fb641b",
                borderRadius: 5,
                borderWidth: 1,
                width: 200,
                marginTop: 50,
                height: 60,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 25 }}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
