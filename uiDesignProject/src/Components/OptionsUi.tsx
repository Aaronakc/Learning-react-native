import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

interface OptionsUiProps{
 text?:string;
 icon?:any;
 backgroundColor?:string;
}
const OptionsUi = ({text,icon,backgroundColor}:OptionsUiProps) => {
  return (
    <View style={styles.container}>
     <View style={[styles.flexBox,{backgroundColor:backgroundColor}]}>
      <Image source={icon} style={styles.icon}/>
      <Text style={styles.text}>{text}</Text>
     </View>
    </View>
  )
}


const styles=StyleSheet.create({
 container:{
   margin: 10,
   width:"44%",


 },
  flexBox:{
    display: "flex",
    flexDirection:"row",
    alignItems:"center",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    // backgroundColor:"#FFE6E3"

  },
  
  icon:{
    width: 18,
    height: 18,
    marginRight: 5,

  },
  text:{
    fontFamily:"serif"
  }

})

export default OptionsUi