import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

interface AirportProps{
  shortForm?:string;
  country?:string;
  airportName?:string;
  icon?:any;
  color?:string,
}
const Airport = ({shortForm,country,airportName,icon,color}:AirportProps) => {
  return (
    
    <View style={styles.container}>
     <Text style={[styles.shortForm,{color:color}]}>{shortForm}</Text>
     <Text style={[styles.name,{color:color}]}>{country}</Text>
     <Text style={[styles.name,{color:color}]}>{airportName}</Text>
     <View style={styles.flexbox}>
     <Image source={icon} style={styles.image}/>
     <Image source={icon} style={styles.image}/>

     </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    marginHorizontal: 10,
    paddingHorizontal:5,
  },

  shortForm:{
    color: "#08354bff",
    fontWeight:900,
    fontFamily: 'serif',
    fontSize: 28,

  },
  name:{
    color: "#08354bff",
    fontSize: 15,
    fontFamily:"serif",
  },
  image:{
    width: 20,
    height: 20,
    marginTop:-60,
  },
  flexbox:{
    display: "flex",
    flexDirection:"row",
    gap:6,
    marginLeft:-25,
  }
})

export default Airport