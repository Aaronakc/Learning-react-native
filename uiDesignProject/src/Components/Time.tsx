import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


interface TimeProps{
text:string;
darkMode?:boolean;
}
const Time = ({text,darkMode}:TimeProps) => {
  const textColor=darkMode?"white":"#08354bff"
  return (
    <View style={styles.container}>
      <Text style={[styles.font,{color:textColor}]}>{text}</Text>
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