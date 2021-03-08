import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import navigationStrings from "../../constants/navigationStrings";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputs = (key) => {
    return (value) => {
      this.setState({ [key]: value });
    };
  };

  onLogPress = () => {
    this.handleInputs;
    const { username, password } = this.state;
    // console.log(username,password)

    let usernameValidation = /^[a-zA-Z]/;
    let passwordValidation = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
    if (username == null || !username.match(usernameValidation) || password==null) {
      alert("invalid username");
    } else if (password == null || !password.match(passwordValidation)) {
      alert("use some special character like !#$%&?");
    } else {
      this.props.navigation.navigate("tabRoutes");
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#232a45", marginTop: 20 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 240,
            position: "relative",
          }}
        >
          <Image
            style={{
              height: 80,
              width: 80,
              borderRadius: 20,
              position: "absolute",
              right: 90,
            }}
            source={{
              uri:
                "https://o.remove.bg/downloads/5c071d7f-bb15-4498-85f4-06d8f8c79e55/9388899_upto-50-off-icon-of-flipkart-hd-png-removebg-preview.png",
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "bold",
              fontStyle: "italic",
              marginRight: 90,
            }}
          >
            Flipkart
          </Text>
          <Text
            style={{
              color: "white",
              marginLeft: 100,
              fontSize: 25,
              fontStyle: "italic",
              marginRight: 90,
              marginTop: -10,
            }}
          >
            Lite
          </Text>
        </View>
        <View
          style={{ height: 240, alignItems: "center", position: "relative" }}
        >
          <TextInput
            style={{
              color: "white",
              width: 350,
              height: 45,
              borderBottomWidth: 1,
              marginLeft: 60,
              fontSize: 20,
              borderBottomColor: "gray",
            }}
            placeholderTextColor="grey"
            placeholder=" Email id / Mobile Number"
            onChangeText={this.handleInputs("username")}
          />
          <TextInput
            style={{
              color: "white",
              width: 350,
              height: 45,
              marginTop: 40,
              borderBottomWidth: 1,
              marginLeft: 60,
              fontSize: 20,
              borderBottomColor: "gray",
            }}
            placeholderTextColor="gray"
            secureTextEntry={true}
            placeholder=" Password"
            onChangeText={this.handleInputs("password")}
          />
          <TouchableOpacity
            onPress={this.onLogPress}
            style={{
              backgroundColor: "#016db4",
              borderRadius: 5,
              borderWidth: 1,
              width: 350,
              marginTop: 50,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 25 }}>LOG IN</Text>
          </TouchableOpacity>

          <Image
            style={{
              height: 30,
              width: 30,
              position: "absolute",
              left: 30,
              top: 12,
            }}
            source={{
              uri:
                "https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png",
            }}
          />
          <Image
            style={{
              height: 30,
              width: 30,
              position: "absolute",
              left: 30,
              top: 100,
            }}
            source={{
              uri:
                "https://cdn1.iconfinder.com/data/icons/hawcons/32/698634-icon-118-lock-rounded-512.png",
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(navigationStrings.SIGNUP);
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 23,
                textDecorationLine: "underline",
              }}
            >
              New to Flipkart? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
