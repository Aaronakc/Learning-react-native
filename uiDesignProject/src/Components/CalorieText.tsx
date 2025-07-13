import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface CalorieTextProps{
  title:string;
  calorie:string
}
const CalorieText = ({title,calorie}:CalorieTextProps) => {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.text}>{calorie} <Text style={styles.calText}>Kcal</Text></Text>
    </View>
  )
}

const styles=StyleSheet.create({
  titleText:{
    color:"gray",
  },
  text:{
    fontFamily:"serif",
    fontWeight:"bold",
    fontSize:15,
  },
  calText:{
    color:"gray",
    fontFamily:"serif",
    fontSize:15,

  }
})

export default CalorieText