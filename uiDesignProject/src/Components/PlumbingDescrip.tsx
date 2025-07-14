import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const PlumbingDescrip = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.font,{fontWeight:"bold",fontSize:16,color:"white",lineHeight:23,}]}>Reliable Bathroom Repairs</Text>
      <View style={styles.flex}>
        <Image source={require('../../assets/location2.png')} style={styles.icon} />
        <Text style={styles.font}>Object address: Moscow,St.. Proletarskaya, d. 12</Text>
      </View>
      <View style={[styles.flex,{marginTop:5}]}>
        <Image source={require('../../assets/clock1.png')} style={styles.icon} />
        <Text style={styles.font}>Work Period 4 days</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:"#f0750f",
    paddingLeft:15,
    borderRadius:15,
    marginHorizontal:20,
    paddingVertical: 20,
    marginTop:-50,

  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginTop:5,
  },
  font: {
    fontFamily: 'serif',
    color:"white",
    fontSize:12,
    lineHeight:20,

  },
  icon: {
    width: 15,
    height: 15,
  
  }
})

export default PlumbingDescrip