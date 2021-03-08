import React, { Component } from "react";
import { View, Text, TouchableOpacity, Linking,Platform,Image, ScrollView, StyleSheet, TextComponent } from "react-native";
import { Cart } from "..";
import navigationStrings from "../../constants/navigationStrings";


export default class LatestDeals extends Component {

  
  constructor(props) {
    super(props);
    
    
  }
  
  

  render() {
    let price=0;
    
    var items = this.props.route.params.newItem;
    
  for(let i=0;i<items.length;i++)
  {
    let reducedPrice2=items[i].reducedPrice
   
    price=price+reducedPrice2
    console.log(price)
  }

    return (
      <View style={{ backgroundColor: "#e6e6e6",flex:1 }}>
        <View
          style={{
            height: 70,
            backgroundColor: "#2874f0",
            marginTop: 20,
            flexDirection: "row",
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
            My Cart
          </Text>
        </View>
        <ScrollView>
        <View
          style={{
            height: 80,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "center",
            justifyContent: "space-between",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 17 }}>Deliver to</Text>
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              {" "}
              Chandigarh - 191231
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              height: 30,
              width: 70,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "blue" }}> Change</Text>
          </View>
        </View>
        
        {items.map((value, key) => {
          let  product = value;
          {/* console.log(product); */}
          const {
            name,
            image,
            id,
            originalPrice,
            reducedPrice,
            discount,
            star,
            emi,
            number,
          } = product;
          return ( 
            <ScrollView
              style={{
                backgroundColor: "white",
                height: 210,
                marginTop: 10,
                position: "relative",
                borderBottomWidth:.5
              }}
            >
              <Text style={{ fontSize: 18,marginLeft:8 }}> {name} </Text>
              <Text style={{marginLeft:10,marginTop:7}}>8 GB RAM</Text>
              <View style={{marginTop:8,flexDirection:"row",justifyContent:"center",justifyContent:"space-between",width:100}}>
              <Text style={styles.star}>{star + " \u2606"}</Text>
              <Text style={{marginLeft:10}}>{number}</Text>
              <Image 
            style={{ height: 30, width: 70,marginTop:-6}}
            source={{
              uri:
                "https://o.remove.bg/downloads/fc284b9c-b16c-4e53-935a-467213fbb7b3/fakeperfume_inside2-removebg-preview.png",
            }}
          />
              </View>
              <View style={{flexDirection:"row"}}>
              <Text style={{ fontWeight: "bold", fontSize: 20,marginLeft:10 }}>
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
              <Text style={{color:"green",marginLeft:10,marginTop:8}}>4 offers applied . 3 offers available</Text>
              <Text style={{marginLeft:10,marginTop:8}}>Delivery on 3 - 4 days | <Text style={{color:"green"}}>Free</Text> {'\u20B9'}40</Text>
              <Image
                style={{
                  height: 110,
                  width: 100,
                   top:30,
                  marginLeft: 300,
                  position:"absolute"
                }}
                source={{ uri: image }}
              />
              <View style={{marginTop:7,borderWidth:.5,backgroundColor:"white",height:50,flexDirection:"row",justifyContent:"center",alignItems:"center",justifyContent:"space-around"}}>
              <Text>Save For Later  </Text>
              <Text> | </Text>
              <Text> Remove</Text>
            </View>
            </ScrollView>
            
          );
        })}
        </ScrollView>
        <View style={{height:80,backgroundColor:"white",borderWidth:.5,borderTopWidth:0}}>
        <Text style={{fontWeight:"bold",fontSize:20,marginTop:10}}>Total Balance {'\u20B9 '+ price}</Text>
        <TouchableOpacity
        onPress={() => {
             this.props.navigation.navigate(navigationStrings.ORDER_DETAILS,{item:items});
            }}
         
       
              style={{
                backgroundColor: "#fb641b",
                borderRadius: 5,
                width: 120,
                height: 40,
                justifyContent:"center",
                alignContent:"center", 
                marginLeft:300
              }}
            >
              <Text style={{ color: "white", fontSize: 15,marginLeft:10}}>Place Your Order</Text>
            </TouchableOpacity>
        </View>

      </View>
    );
  }
}
 const styles=StyleSheet.create({
  star: {
    marginLeft: 10,
    // marginTop: 10,
    fontSize: 16,
    backgroundColor: "green",
    width: 45,
    height: 20,
    color: "white",
    borderRadius: 10,
    paddingLeft: 4,
  },
 })