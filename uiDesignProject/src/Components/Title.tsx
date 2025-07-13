import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.flexBox}>
      <Image source={require('../../assets/backIcon.png')} style={styles.image}/>
     <Text style={styles.font}>Meal Plan</Text>
     <TouchableOpacity style={styles.btnBackground}>
      <Text style={styles.btnText}>Save</Text>
     </TouchableOpacity>
    </View>
  )
}


const styles=StyleSheet.create({
  flexBox:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    

  },
  image:{
    width: 35,
    height: 35,
  },
  font:{
  fontFamily:"serif",
  fontSize:15,
  },
  
  btnBackground:{
    backgroundColor:"#1560BD",
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 15,

  },
  btnText:{
    color:"white"
  }

})
export default Title