import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const QrCode = () => {
  return (
    <View>

      <Image source={require('../../assets/qr.png')} style={styles.image} />

      <Text style={styles.text}>TC3SI51</Text>
    </View>
  )
}


const styles = StyleSheet.create({

  // container: {
  // display: "flex",
  // alignSelf: "center",
  // alignItems:"center",
  // elevation: 5,
  // borderRadius: 15,
  // width: "50%",
  // paddingHorizontal:10,
  // paddingVertical:10,
  //  marginTop: -20,
  // marginTop:-20,

  // marginRight:-50,




  // },
  image: {
    width: 100,
    height: 90,
    // marginTop:-20,
  },

  text: {
    textAlign: "center",
    color: "gray",
    fontSize: 15,
    fontFamily: "serif"
  }

})

export default QrCode