import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
interface PlumbingOptionsProps {
  icon?: any,
  bgColor?: string,
  text?:string
}
const PlumbingOptions = ({ icon, bgColor,text }: PlumbingOptionsProps) => {
  return (
    <View style={styles.container}>

      <View style={[styles.wrapper,{backgroundColor:bgColor}]}>

      <Image source={icon} style={styles.image } />
      <Text style={{fontFamily:"serif",fontSize:7.4,paddingLeft:3}}>{text}</Text>
      </View>
      

    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    marginBottom:9,
  },

  container: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",

  
   
    width:"18%",
    // height:"100%",
    // height:"100%",
    // backgroundColor:"blue",
    
  },
  wrapper:{
    display:"flex",
    borderRadius:12,
    paddingTop:7,

    paddingBottom:12,
    // paddingHorizontal:9,
    paddingLeft:3,
    paddingRight: 20,
  
    // flex:1,
   justifyContent:"center",
    alignItems:"center",
  }
})

export default PlumbingOptions