import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PlumbingDescription = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={[styles.font,{color:"#f0750f",backgroundColor:"#faf2e9fd",borderTopLeftRadius:10,paddingVertical:5,paddingHorizontal:10,borderTopRightRadius:10,}]}>Description</Text>
        <Text style={[styles.font,{color:"gray",paddingVertical:5}]}>Review</Text>
      </View>

      <View style={styles.bgColor}>
        <Text style={styles.font}>From leaky faucets to broken tiles, our professional repair team handles all types of bathroom issues ... <Text style={[styles.font,{color:"#f0750f",lineHeight:22}]}>Read More</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 20,
    marginRight:10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  font: {
    fontFamily: "serif",
    fontSize: 15,

  },
  bgColor:{
    backgroundColor:"#faf2e9fd",
    borderBottomLeftRadius:14,
    borderBottomRightRadius:14,
    borderTopRightRadius:14,

    paddingHorizontal:10,
    paddingVertical:20,

  }
})

export default PlumbingDescription