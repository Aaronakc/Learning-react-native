import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WelcomeText = () => {
  return (
    <View>
      <Text style={styles.heading}>Welcome back</Text>
      <Text style={styles.subHeading}>Please enter your details</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 30,
    marginTop: 25,
    fontFamily: "serif"

  },
  subHeading: {
    paddingLeft: 30,
    fontSize: 18,
    color: "gray",
    fontFamily: "serif"

  },
  image: {
    width: 40,
    height: 10,


  }
})

export default WelcomeText