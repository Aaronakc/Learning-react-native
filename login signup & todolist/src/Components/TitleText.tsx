import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const TitleText = () => {
  return (
    <View>
      <Text style={styles.textDesign}>
        <Text>Track</Text>
        <Text style={{ color: "white" }}>TV</Text>

      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textDesign: {
    backgroundColor: "#EFBF04", height: 60,
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 30,
    fontFamily: "serif",

  },


})

export default TitleText