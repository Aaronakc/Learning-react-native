import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


interface FlightInfoProps{
  text:string;
  icon: any;
  iconFirst?:boolean;
  color:string;
}
const FlightInfo = ({text,icon,iconFirst,color}:FlightInfoProps) => {
  return (
    <View style={styles.container}>
      {iconFirst && <Image source={icon} style={styles.icon}/>}
     <Text style={[styles.font,{color:color}]}>{text}    </Text>
      {!iconFirst && <Image source={icon} style={styles.icon}/>}

    

    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom:25,
    paddingHorizontal:3,
    display: "flex",
    alignItems:"center",
    flexDirection:"row",
    gap:8,
    

  },
  icon:{
    width: 20,
    height: 20,
    marginLeft:-15,
  },
  font:{
    fontFamily:"serif",
    fontWeight:900,
    fontSize:15,
  }
})

export default FlightInfo