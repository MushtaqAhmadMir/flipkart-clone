import React, { Component,useState } from "react";
import { View, Text, Image, TouchableOpacity,Button,Modal, Touchable, TouchableOpacityBase } from "react-native";
import * as ImagePicker from 'expo-image-picker';
export default class Profile extends Component {

 
  constructor(props)
  {
    
    super(props);
    this.state={
       hasCameraPermission: null,
       image: "https://o.remove.bg/downloads/97912381-ba78-4bd5-bed7-a3fdce2ad86d/78-786293_1240-x-1240-0-avatar-profile-icon-png-removebg-preview.png",
       modalVisible:false
      
    }
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
     this.setState({ hasCameraPermission: status === "granted" });
 
   }

   _getPhotoLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
     allowsEditing: true,
     aspect: [4, 3]
    });
    if (!result.cancelled) {
     this.setState({ image: result.uri });
    }
    this.setState({
      modalVisible:false
    })
   }
  
  cameraImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
     this.setState({
       image:result.uri
     })
    //  console.log(image)
    }
    this.setState({
      modalVisible:false
    })
  }
 showModal=()=>
 {
   this.setState({
     modalVisible:true
   })
 }
 closeModal=()=>
 {
   this.setState({
     modalVisible:false
   })
 }

  render() {
    const{image,modalVisible}=this.state
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <View
          style={{
            height: 300,
            backgroundColor: "#2874f0",
            position: "relative",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <Image
                  style={{ height: 25, width: 25 }}
                  source={{
                    uri:
                      "https://www.materialui.co/materialIcons/navigation/arrow_back_white_192x192.png",
                  }}
                />
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: 19, marginLeft: 40 }}>
                My Account
              </Text>
            </View>
            <View
              style={{ height: 70, backgroundColor: "#2874f0", marginTop: 20 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View></View>
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
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderRadius:20 }}>
      <TouchableOpacity style={{backgroundColor:"white",borderRadius:100,height:100,width:100}} onPress={this.showModal}>
      {/* <Image style={{height:100,width:100}} source={{uri:"https://o.remove.bg/downloads/97912381-ba78-4bd5-bed7-a3fdce2ad86d/78-786293_1240-x-1240-0-avatar-profile-icon-png-removebg-preview.png"}}/> */}
       <Image source={{ uri: image }} style={{ width: 100, height: 100,borderRadius:100 }} />
   </TouchableOpacity>
    </View>
      <Modal visible={modalVisible} transparent={true}>
        <View style={{ height:170,backgroundColor:"white",marginTop:560,margin:10,}}>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={{fontSize:20,marginLeft:10}}>Choose Image From</Text>
          <TouchableOpacity onPress={this.closeModal}>
          <Text style={{fontSize:25,marginRight:8,}} >X</Text>
          </TouchableOpacity>
         
          </View>
          
           <View style={{flexDirection:"row",justifyContent:"center",justifyContent:"space-around",marginTop:20}}>
           
           
           <TouchableOpacity onPress={this._getPhotoLibrary}>
           <Image style={{height:50,width:50}}  source={{uri:"https://www.fswaste.co.uk/wp-content/uploads/2015/06/image-gallery-icon.fw_.png"}}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.cameraImage}>
           <Image style={{height:70,width:70,marginTop:-10}}   source={{uri:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png"}}/>
           </TouchableOpacity>
           </View>
        </View>
      </Modal>


         
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              position: "absolute",
              bottom: 30,
              left: 160,
            }}
          >
            {" "}
            AARIYAN ALEE
          </Text>
          <Text
            style={{
              color: "white",
              position: "absolute",
              bottom: 10,
              left: 157,
            }}
          >
            {" "}
            +917006736101
          </Text>
        </View>
        <View style={{ backgroundColor: "#f2f2f2", height: 400 }}>
          <View style={{ backgroundColor: "white", height: 100, margin: 10 }}>
            <Text
              style={{
                borderBottomWidth: 0.5,
                marginTop: 10,
                paddingBottom: 20,
                fontSize: 20,
              }}
            >
              Flipkart Plus
            </Text>
            <Text style={{ color: "#2874f0", marginLeft: 300, marginTop: 10 }}>
              {" "}
              VIEW PLUS ZONE
            </Text>
          </View>
          <View style={{ backgroundColor: "white", height: 100, margin: 10 }}>
            <Text
              style={{
                borderBottomWidth: 0.5,
                marginTop: 10,
                paddingBottom: 20,
                fontSize: 20,
              }}
            >
              My Orders
            </Text>
            <Text style={{ color: "#2874f0", marginLeft: 300, marginTop: 10 }}>
              {" "}
              VIEW PLUS ZONE
            </Text>
          </View>
          <View style={{ backgroundColor: "white", height: 100, margin: 10 }}>
            <Text
              style={{
                borderBottomWidth: 0.5,
                marginTop: 10,
                paddingBottom: 20,
                fontSize: 20,
              }}
            >
              My Reviews
            </Text>
            <Text style={{ color: "#2874f0", marginLeft: 300, marginTop: 10 }}>
              {" "}
              VIEW PLUS ZONE
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

