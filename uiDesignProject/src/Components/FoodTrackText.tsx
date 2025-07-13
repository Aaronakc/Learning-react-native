import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FoodTrackText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Track your food</Text>
      <Text style={styles.paragraphText}>Pro tip: It's easy to be consistent if you log as you go. We like logging while our food is cooking (or between bites).</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    marginHorizontal: 25,
    marginVertical:10,
  },
  titleText:{
    fontFamily:"serif",
    fontWeight:"bold",
    fontSize: 19,
    marginBottom: 5,
  },
  paragraphText:{
    fontSize: 11,
    fontFamily:"serif",
    color:"gray",
    lineHeight: 18,
    


  }
})

export default FoodTrackText