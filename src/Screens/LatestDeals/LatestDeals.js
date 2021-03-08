import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacityBase,
} from "react-native";

export default class LatestDeals extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "space-between",
          marginTop: 20,
          position: "relative",
        }}
      >
        <View style={styles.navbar}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Image
                style={{ height: 60, width: 60 }}
                source={{
                  uri:
                    "https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg",
                }}
              />
              <Image
                style={{ height: 50, width: 90, marginLeft: 15, marginTop: 5 }}
                source={{
                  uri:
                    "https://couponcode-images.s3-ap-southeast-1.amazonaws.com/public/shop/240.jpg",
                }}
              />
            </View>
            <View style={{ flexDirection: "row", margin: 20 }}>
              <Image
                style={{ height: 30, width: 30, marginRight: 15 }}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/85c88e53-402c-4f88-bde1-f46f9b6a75ae/kissclipart-notifications-icon-0944b9061b6f136e-removebg-preview.png",
                }}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Cart")}
              >
                <Image
                  style={{ height: 27, width: 27 }}
                  source={{
                    uri:
                      "https://www.iconsdb.com/icons/preview/white/cart-8-xxl.png",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchBar}>
            <TextInput
              style={{ marginLeft: 50, fontSize: 17 }}
              placeholder="Search for Products, Brands and More"
            />

            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 15,
                position: "absolute",
                left: 10,
              }}
              source={{
                uri:
                  "https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png",
              }}
            />
            <Image
              style={{
                height: 27,
                width: 26,
                marginRight: 15,
                position: "absolute",
                right: 10,
              }}
              source={{
                uri:
                  "https://www.materialui.co/materialIcons/hardware/keyboard_voice_grey_192x192.png",
              }}
            />
          </View>
        </View>

        {/* <FlatList itemList={itemList } onItemSelected={onItemSelected} selectedItem={selectedItem} navigationProp={this.props.navigation} counter={counter} setCounter={this.setCounter}/> */}

        {/* <View style={{position:"absolute",backgroundColor:"red", right:15,top:12,borderWidth:0.5,borderRadius:20,width:15,justifyContent:"center",alignItems:"center",borderColor:"white"}}>
          <Text style={{color:"white"}} >{counter}</Text>
           </View> */}

        <ScrollView style={{ marginBottom: 90 }}>
          <ScrollView horizontal={true}>
            <Image
              style={{ height: 250, resizeMode: "contain", width: 420 }}
              source={{
                uri:
                  "https://github.com/OmGameHub/flipkart-ui-clone/blob/master/assets/banner_0.jpg?raw=true",
              }}
            />
            <Image
              style={{ height: 250, resizeMode: "contain", width: 420 }}
              source={{
                uri:
                  "https://github.com/OmGameHub/flipkart-ui-clone/blob/master/assets/banner_1.jpg?raw=true",
              }}
            />
            <Image
              style={{ height: 250, resizeMode: "contain", width: 420 }}
              source={{
                uri:
                  "https://github.com/OmGameHub/flipkart-ui-clone/blob/master/assets/banner_2.jpg?raw=true",
              }}
            />
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              height: 170,
              justifyContent: "center",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                height: 150,
                width: 200,
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: "gray",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 100, width: 120 }}
                source={{
                  uri:
                    "https://rukminim1.flixcart.com/image/612/612/k3ncakw0/living-room-chair/a/8/g/multicolor-wrought-iron-set-of-4-stylish-modern-furniture-original-imafmqe74hh9jccr.jpeg?q=70",
                }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                From {"\u20B9"} 6999
              </Text>
              <Text style={{ fontSize: 15 }}>Furniture Value Deals</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <View
                style={{
                  height: 150,
                  width: 200,
                  borderRadius: 10,
                  borderColor: "gray",
                  borderWidth: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 100, width: 120 }}
                  source={{
                    uri: "https://images.financialexpress.com/2020/03/s-2.jpg",
                  }}
                />
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  From {"\u20B9"} 6999
                </Text>
                <Text style={{ fontSize: 15 }}>Mobile Value Deals</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image
            style={{ height: 250 }}
            source={{
              uri:
                "https://github.com/OmGameHub/flipkart-ui-clone/blob/master/assets/deal4.jpeg?raw=true",
            }}
          />
          {/* <View
            style={{
              backgroundColor: "yellow",
              height: 370,
              borderRadius: 10,
              margin: 4,
            }}
          ></View> */}

          <Image
            style={{ height: 60, marginTop: 10 }}
            source={{
              uri:
                "https://ultra.news/wp-content/uploads/2016/09/flipkart-big-billion-day-sale.png",
            }}
          />
          <Image
            style={{ height: 250, resizeMode: "contain" }}
            source={{
              uri:
                "https://github.com/OmGameHub/flipkart-ui-clone/blob/master/assets/banner_5.jpg?raw=true",
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navbar: {
    // paddingTop: StatusBar.currentHeight,
    // paddingBottom: 10,
    backgroundColor: "#2874f0",
    height: 120,
  },
  searchBar: {
    backgroundColor: "white",
    height: 35,
    justifyContent: "center",
    position: "relative",
    marginLeft: 8,
    marginRight: 8,
  },
});
