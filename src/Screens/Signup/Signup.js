import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import navigationStrings from "../../constants/navigationStrings";
//import Test from "./Test";

class Signup extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.upperView}>
          <Image
            style={styles.img}
            source={{
              uri:
                "https://o.remove.bg/downloads/5c071d7f-bb15-4498-85f4-06d8f8c79e55/9388899_upto-50-off-icon-of-flipkart-hd-png-removebg-preview.png",
            }}
          />
          <Text style={styles.txt3}>Flipkart</Text>
          <Text style={styles.txt2}>Lite</Text>
        </View>
        <View
          style={{ height: 240, alignItems: "center", position: "relative" }}
        >
          <TextInput
            style={styles.textInput}
            placeholderTextColor="grey"
            placeholder=" Enter Your Name"
            onChangeText={(usernameHolder) => this.setState({ usernameHolder })}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor="grey"
            placeholder=" Email id / Mobile Number"
            onChangeText={(usernameHolder) => this.setState({ usernameHolder })}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor="gray"
            placeholder="Enter OTP?"
            onChangeText={(passwordHolder) => this.setState({ passwordHolder })}
          />
          <Text style={styles.txt4}>Resend?</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="gray"
            placeholder="Set Password"
            onChangeText={(passwordHolder) => this.setState({ passwordHolder })}
          />

          <TouchableOpacity onPress={this.onLogPress} style={styles.onSign}>
            <Text style={{ color: "white", fontSize: 25 }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.downSection}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationStrings.LOGIN);
            }}
          >
            <Text style={styles.text1}>Already Have An Account? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Signup;

const styles = StyleSheet.create({
  upperView: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    position: "relative",
  },
  textInput: {
    color: "black",
    width: 350,
    height: 45,
    borderBottomWidth: 1,
    fontSize: 20,
    borderBottomColor: "gray",
    marginTop: 20,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 20,
    position: "absolute",
    right: 90,
  },
  downSection: {
    flex: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 70,
  },
  text1: {
    color: "black",
    fontSize: 23,
    textDecorationLine: "underline",
  },
  onSign: {
    backgroundColor: "#fb641b",
    borderRadius: 5,
    borderWidth: 1,
    width: 350,
    marginTop: 50,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  txt2: {
    color: "black",
    marginLeft: 100,
    fontSize: 25,
    fontStyle: "italic",
    marginRight: 90,
    marginTop: -10,
  },
  txt3: {
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "italic",
    marginRight: 90,
  },
  txt4: {
    color: "#016db4",
    position: "absolute",
    bottom: 50,
    right: 35,
    fontSize: 23,
  },
});
