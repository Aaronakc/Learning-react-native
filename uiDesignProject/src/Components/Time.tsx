import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


interface TimeProps{
text:string;
color?:string;
}
const Time = ({text,color}:TimeProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.font,{color:color}]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 25,
    marginBottom:7,

  },

  font:{

    fontSize: 25,
    fontWeight: "bold",
    fontFamily:"serif",

  }

})

export default Time