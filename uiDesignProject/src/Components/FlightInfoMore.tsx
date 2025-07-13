import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface FlightInfoMoreProps {
  flightTitle: string;
  seatTitle: string;
  terminalTitle: string;
  color?:string;
  fontSize?:number;
}

const FlightInfoMore = ({ flightTitle, seatTitle, terminalTitle ,color,fontSize}: FlightInfoMoreProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}><Text style={[styles.text,{color:color,fontSize:fontSize}]}>{flightTitle}</Text></View>
      <View style={styles.column}><Text style={[styles.text,{color:color,fontSize:fontSize}]}> {seatTitle}</Text></View>
      <View style={styles.column}><Text style={[styles.text,{color:color,fontSize:fontSize}]}>{terminalTitle}</Text></View>
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
