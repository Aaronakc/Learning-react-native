import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface FlightInfoMoreProps {
  flightTitle: string;
  seatTitle: string;
  terminalTitle: string;
  darkMode?:boolean
  fontSize?:number;
}

const FlightInfoMore = ({ flightTitle, seatTitle, terminalTitle ,darkMode,fontSize}: FlightInfoMoreProps) => {
  const textColor=darkMode?"white":"#08354bff"
  return (
    <View style={styles.container}>
      <View style={styles.column}><Text style={[styles.text,{color:textColor,fontSize:fontSize}]}>{flightTitle}</Text></View>
      <View style={styles.column}><Text style={[styles.text,{color:textColor,fontSize:fontSize}]}> {seatTitle}</Text></View>
      <View style={styles.column}><Text style={[styles.text,{color:textColor,fontSize:fontSize}]}>{terminalTitle}</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  column: {
    width: '40%', // each column takes 1/3 of the row
  },
  text: {
    color: "gray",
    fontFamily: "serif",
  
  }
})

export default FlightInfoMore
