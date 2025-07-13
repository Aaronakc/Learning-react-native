import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
interface PlaneDescriptionProps{
  color?:string;
  subColor?:string
}
const PlaneDescription = ({color,subColor}:PlaneDescriptionProps) => {
  return (
    <View style={styles.flexbox}>
      <View style={styles.div}>
        <Image source={require('../../assets/PlaneTilted.png')} style={styles.image} />

      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { fontSize: 18, color: color, fontWeight: "bold" ,marginTop:15,marginLeft:15}]}>A350-1000</Text>
        <View style={styles.detailContainer}>
          <View style={styles.flex}>
            <View>
              <Text style={[styles.text, { color: subColor }]}>Seating:</Text>

              <Text style={[styles.text, { color: subColor }]}>Range: </Text>
              <Text style={[styles.text, { color: subColor }]}>Speed: </Text>
            </View>
            <View>
              <Text style={styles.textSpace}>366</Text>
              <Text style={[styles.textSpace]}>16,100 km</Text>
              <Text style={[styles.textSpace]}>950 km/h</Text>

            </View>
            </View>
          </View>
        </View>
      </View>
      )
}

      const styles = StyleSheet.create({
        flexbox: {
        display: "flex",
      flexDirection: "row",
      width: "100%",
    // paddingLeft:18,
    // gap: 5,
    // paddingRight:15,

  },
      image: {
        width: "100%",
      height: "100%",
      resizeMode: "contain",

    // backgroundColor:"red"
    // marginRight:80,
  },

      div: {
        width: "55%",
      height: 100,
      // backgroundColor:"red",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",


  },
      textContainer: {
        // flex: 1,
        width: "45%",
      marginTop: 15,
    // paddingLeft: 16,
  },
      text: {
        fontFamily: "serif"
  },
      detailContainer: {
        marginTop: 15,

  },
      textSpace: {
        // marginLeft: 5,
        // gap: 5
        color: "#1c4c64ff",
        fontFamily:"serif",
        fontWeight:"bold",

  },
      flex:{
        display:"flex",
      flexDirection:"row",
      marginLeft:15,
      marginBottom:60,
      gap:20,
  }
})

      export default PlaneDescription