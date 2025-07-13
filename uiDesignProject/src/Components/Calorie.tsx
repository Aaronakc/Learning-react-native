import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import CalorieText from './CalorieText'

const Calorie = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/fireIcon.png')}  style={styles.image}/>
      <View style={styles.flexBox}>
        <CalorieText title="Calories Goal" calorie='1,908'/>
        <CalorieText title="Calories ate" calorie='1,270'/>
        <CalorieText title="Calories left" calorie='1,638'/>
        
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    marginHorizontal:15,
    marginVertical:15,
    backgroundColor:"rgb(236, 240, 245)",
    borderRadius:15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image:{
    width:20,
    height:20,
    marginBottom: 15,
  },
  flexBox:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",

  }
})

export default Calorie