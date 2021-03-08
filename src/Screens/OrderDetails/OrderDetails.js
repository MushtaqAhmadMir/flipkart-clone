import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  TouchableOpacityBase,
  Share,
} from "react-native";
// import  openMap from "react-native-open-maps";
import openMap from 'react-native-open-maps';

export default class OrderDetails extends Component {
  constructor(props) {
    super(props);
  }
 
  dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${7006736101}";
    } else {
      phoneNumber = "telprompt:${7006736101}";
    }

    Linking.openURL(phoneNumber);
  };

  openMail=()=>
  {
    Linking.openURL("mailto:support@example.com")
    title="support@example.com"
  }

  getMap=()=> {
    

    openMap({ latitude: 30.741482, longitude: 76.768066 ,});
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      })
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
   let item=this.props.route.params.item
    // const{name,}=item
    for(let i=0;i<item.length;i++)
    {
      var name=item[i].name
      console.log(name)
    }
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 70,
            backgroundColor: "#2874f0",
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: 10, marginTop: 25 }}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Image
              style={{ height: 25, width: 30 }}
              source={{
                uri:
                  "https://www.materialui.co/materialIcons/navigation/arrow_back_white_192x192.png",
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: "white",
              fontSize: 19,
              marginTop: 25,
              marginLeft: 20,
            }}
          >
            Order Details
          </Text>

          <View
            style={{
              flexDirection: "row",
              margin: 8,
              justifyContent: "space-between",
              width: 100,
              alignItems: "center",
            }}
          >
            <Image
              style={{ height: 20, width: 20 }}
              source={{
                uri:
                  "https://global-uploads.webflow.com/5bf111fede18dd5d6c42bb3e/5bf14989486e7f500ad6dc96_search_white__122520.png",
              }}
            />
            <Image
              style={{ height: 25, width: 25 }}
              source={{
                uri:
                  "https://www.materialui.co/materialIcons/hardware/keyboard_voice_white_192x192.png",
              }}
            />
            <Image
              style={{ height: 20, width: 20 }}
              source={{
                uri:
                  "https://www.iconsdb.com/icons/preview/white/cart-8-xxl.png",
              }}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Track Your Order
          </Text>
          <View
            style={{ height: 180, borderWidth: 0.5, margin: 10, marginTop: 20 }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 100,
                  marginLeft: 10,
                  marginTop: 10,
                }}
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22hRDwbtV63anofUR5qp_jpxbFtiy1HD3UA&usqp=CAU",
                }}
              />
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 15,
                    marginLeft: 6,
                  }}
                >
                  Rider Shanker
                </Text>
                <Text style={{ marginLeft: 6 }}> ID: 24338368</Text>
                <Text style={{ marginLeft: 6 }}> Status : Active</Text>
              </View>
            </View>

            <View style={{ height: 60, marginTop: 15 }}>
              <Text style={{ marginLeft: 10, fontSize: 18 }}>Contact </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 20,
                }}
              >
                <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7}>
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={{
                      uri:
                        "https://o.remove.bg/downloads/163ab838-97e8-42dc-9e0e-53d63e3ec0e4/png-clipart-call-log-logo-iphone-4-iphone-3g-iphone-7-telephone-icon-phone-hd-electronics-text-removebg-preview.png",
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.openMail} 
                >
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={{
                      uri:
                        "https://o.remove.bg/downloads/74bd7de7-c829-46e3-bb3d-de62f7e5ca3a/gmail-3-removebg-preview.png",
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.getMap}>
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={{
                      uri:
                        "https://o.remove.bg/downloads/895d0941-cfb1-42cb-840e-20ec80202c17/sm_5afbe35e5f512-removebg-preview.png",
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onShare}>
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={{
                      uri: "https://img.icons8.com/flat-round/2x/share.png",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Order Details
          </Text>
          <View style={{height:50,borderWidth:.5,margin:10}}>
           <Text style={{marginLeft:5,marginTop:5,fontWeight:"bold"}}>Order Id :  75345678987</Text>
           <Text style={{marginLeft:5,fontWeight:"bold",marginTop:5}}>Order Date :  10 March, 2021</Text>
          </View>
          <View style={{height:100,borderWidth:.5,margin:10}}>
          <Text style={{fontSize:20,marginLeft:5}}>Shipping Information</Text>
          <View style={{justifyContent:"space-between",justifyContent:"center"}}>
           <Text numberOfLines={2} style={{marginLeft:5,marginTop:5,fontWeight:"bold",marginTop:5}}>Shipping Adress :  Madhya Marg,Sector 28 B Chandigarh IN ,</Text>
           <Text style={{marginLeft:5,fontWeight:"bold",marginTop:5}}>Shipping Method : Mail</Text>
           <Text style={{marginLeft:5,fontWeight:"bold",marginTop:5}}>Ship as Complete :  Yes</Text>
          </View>
          </View>

          <View style={{height:120,borderWidth:.5,margin:10}}>
          <Text style={{fontSize:20,marginLeft:5}}>Product</Text>
           <Text style={{marginLeft:5,marginTop:5,fontWeight:"bold"}}>Name  {name}</Text>
           <Text style={{marginLeft:5,fontWeight:"bold",marginTop:5}}>Brand : POCO 45678</Text>
           <Text style={{marginLeft:5,fontWeight:"bold",marginTop:5}}>Battery Life : 24 Hrs</Text>
           <Text style={{marginLeft:5,fontWeight:"bold",marginTop:5}}>Storage : 32GB</Text>
          </View>
      </View>
    );
  }
}
