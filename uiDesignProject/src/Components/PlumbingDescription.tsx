import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PlumbingDescription = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={[styles.font,{color:"orange",backgroundColor:"#faf2e9fd",borderTopLeftRadius:10,paddingVertical:5,paddingHorizontal:10,borderTopRightRadius:24,}]}>Description</Text>
        <Text style={[styles.font,{color:"gray"}]}>Review</Text>
      </View>

      <View style={styles.bgColor}>
        <Text style={styles.font}>From leaky faucets to broken tiles, our professional repair team handles all types of bathroom issues ... <Text style={[styles.font,{color:"orange",lineHeight:23}]}>Read More</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
    marginRight:10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  font: {
    fontFamily: "serif",
    fontSize: 16,

  },
  bgColor:{
    backgroundColor:"#faf2e9fd",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderTopRightRadius:10,

    paddingHorizontal:10,
    paddingVertical:20,

  }
})

export default PlumbingDescription