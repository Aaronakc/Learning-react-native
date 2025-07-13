import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DailyMealText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainFont}>DAILY MEAL PLAN</Text>
      <Text style={styles.paragraphText}>Fix your healthy body with us</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    marginHorizontal:10,
    marginVertical:15,

  },
  mainFont:{
    fontFamily:"serif",
    fontWeight:900,
    fontSize:20,
  },
  paragraphText:{
    color: "gray",
    fontFamily:"serif",
    marginTop:5
  }

})

export default DailyMealText