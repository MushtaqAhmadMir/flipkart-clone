import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import navigationStrings from "../constants/navigationStrings";

// import Swiper from 'react-native-swipe-image'

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const{item}=this.props
    let item = this.props.route.params.item.item;
    //  console.log(item)
    const {
      name,
      price,
      image,
      id,
      originalPrice,
      reducedPrice,
      discount,
      star,
      emi,
      number,
    } = item;

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 70, backgroundColor: "#2874f0", marginTop: 20 }}>
          <View style={styles.content}>
            <View>
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => this.props.navigation.navigate("tabRoutes")}
              >
                <Image
                  style={{ height: 25, width: 25 }}
                  source={{
                    uri:
                      "https://www.materialui.co/materialIcons/navigation/arrow_back_white_192x192.png",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.navIcons}>
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
        <View style={styles.bannerStyle}>
          <ScrollView
            horizontal={true}
            alignItems="center"
            justifyContent="center"
          >
            <Image
              style={{ height: 260, width: 200, marginTop: 10 }}
              source={{ uri: image }}
            />
          </ScrollView>
        </View>
        <Text style={{ fontSize: 20, marginLeft: 10 }}>{name}</Text>
        <Text
          style={{
            backgroundColor: "#aaf2c4",
            color: "green",
            width: 100,
            margin: 10,
          }}
        >
          Extra {"\u20B9"}4000 off
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 25,
              color: "black",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {"\u20B9 " + reducedPrice}
          </Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              marginTop: 5,
              marginLeft: 7,
              fontSize: 16,
            }}
          >
            {"\u20B9" + originalPrice}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "green",
              marginLeft: 10,
              marginTop: 5,
            }}
          >
            {discount + "% Off "}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Image 
            style={{ height: 30, width: 70, marginTop: -6 }}
            source={{
              uri:
                "https://o.remove.bg/downloads/fc284b9c-b16c-4e53-935a-467213fbb7b3/fakeperfume_inside2-removebg-preview.png",
            }}
          />
          <Text>FREE DELIVERY</Text>
        </View>
        <Text style={{ marginLeft: 10 }}>
          EMI from {"\u20B9" + "342/month."}
          <Text style={{ color: "blue" }}>View Plans</Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 0.5,
            paddingBottom: 10,
          }}
        >
          <Text style={styles.star}>{star + " \u2606"}</Text>
          <Text style={{ color: "blue", marginLeft: 10, marginTop: 10 }}>
            {number + " Ratings >"}
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Home", { item: { item } })
            }
            style={styles.buyNow}
          >
            <Text style={{ color: "white", fontSize: 18 }}>BUY NOW</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "bold", margin: 10 }}>
          {" "}
          Available offers
        </Text>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri:
                  "https://o.remove.bg/downloads/212de43e-a572-4206-9b53-537d094ee841/tag_green-512-removebg-preview.png",
              }}
            />
            <Text style={{ marginTop: 10 }}>
              GST Invoice is available for this Product
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri:
                  "https://o.remove.bg/downloads/212de43e-a572-4206-9b53-537d094ee841/tag_green-512-removebg-preview.png",
              }}
            />
            <Text style={{ marginTop: 10 }}>
              5% Unlimited Cashback on Flipkart Axis Bank Credit Card
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 0.5,
              paddingBottom: 20,
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri:
                  "https://o.remove.bg/downloads/212de43e-a572-4206-9b53-537d094ee841/tag_green-512-removebg-preview.png",
              }}
            />
            <Text style={{ marginTop: 10, paddingRight: 10 }}>
              10% Off on Bank of Barod MasterCard debit card first time
              transaction,Terms and Conditions apply
            </Text>
          </View>
          <Text style={{ marginLeft: 10 }}>Select Color</Text>
          <View style={styles.mobilecolor}>
            <View style={styles.mobilecolor1}>
              <Image
                style={{ height: 100, width: 80 }}
                source={{ uri: image }}
              />
              <Text>Golden</Text>
            </View>
            <View style={styles.mobilecolor2}>
              <Image style={styles.itemImg} source={{ uri: image }} />
              <Text>Navy Blue</Text>
            </View>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 10, marginTop: 20 }}>
            Highlights
          </Text>
          <View
            style={{
              marginLeft: 20,
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ marginTop: 5 }}>
              . 4 GB RAM | 32 GB ROM | Expandable upto 256 GB
            </Text>
            <Text style={{ marginTop: 5 }}>
              . 16.54 cm(6.51 inch) HD+ Display
            </Text>
            <Text style={{ marginTop: 5 }}>
              . 13MP + 2MP | 8MP Front Camera
            </Text>
            <Text style={{ marginTop: 5 }}>. 5000 mAh Li-ion Battery </Text>
            <Text style={{ marginTop: 5 }}>. Snapdragon 439 Processor</Text>
          </View>
          <Text style={{ marginTop: 20, marginLeft: 10, fontWeight: "bold" }}>
            Cancellation & Return Policy
          </Text>
          <View style={{ marginTop: 10, marginLeft: 20 }}>
            <Text style={{ marginTop: 5 }}>
              . No Cancellation fee on this product
            </Text>
            <Text style={{ marginTop: 5 }}>. 7 Days Repalcement Policy</Text>
            <Text style={{ marginTop: 5, color: "blue", marginLeft: 10 }}>
              View details
            </Text>
          </View>
          <Text style={{ marginTop: 20, marginLeft: 10, fontWeight: "bold" }}>
            Reviews & Ratings
          </Text>
          <View style={styles.review}>
            <View style={styles.leftReview}>
              <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 10 }}>
                {star + "\u2606"}
              </Text>
              <Text style={{ color: "gray", padding: 5, marginLeft: 10 }}>
                {" "}
                1,677 ratings and 101 reviews
              </Text>
            </View>
            <Text style={{ fontSize: 100, color: "gray" }}>|</Text>
            <View style={styles.rightReview}>
              <Image
                style={{ height: 50, width: 100 }}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/c499f78c-0903-434c-a2cb-a57def3aa144/803678d9782ecdc832e4845db711716a069f32e5-removebg-preview.png",
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  itemImg: {
    height: 100,
    width: 80,
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  star: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "green",
    width: 45,
    height: 20,
    color: "white",
    borderRadius: 10,
    paddingLeft: 4,
  },
  mobilecolor1: {
    borderWidth: 0.5,
    height: 120,
    width: 100,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  review: {
    marginTop: 20,
    height: 120,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  leftReview: {
    marginLeft: 10,
    height: 100,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  rightReview: {
    marginLeft: 2,
    height: 100,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  buyNow: {
    backgroundColor: "#fb641b",
    borderRadius: 5,
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 170,
  },
  mobilecolor2: {
    borderWidth: 0.5,
    height: 120,
    width: 100,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  mobilecolor: {
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    marginTop: 20,
  },
  navIcons: {
    flexDirection: "row",
    margin: 8,
    marginTop: 10,
    justifyContent: "space-between",
    width: 100,
    alignItems: "center",
  },
  bannerStyle: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});
