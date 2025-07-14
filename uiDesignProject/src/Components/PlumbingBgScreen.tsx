import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const PlumbingBgScreen = () => {
  return (
    <View>
  
      <ImageBackground source={require('../../assets/plumber.png')} style={styles.image}>
    

      </ImageBackground>
    </View>
  )
}
const styles=StyleSheet.create({
  image:{
    height:250,
    width: "100%",
  }
})

export default PlumbingBgScreen