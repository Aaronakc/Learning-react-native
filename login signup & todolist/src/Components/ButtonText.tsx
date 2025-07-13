interface ButtonTextProps{
  onPress?:()=>void;
  label:string;
}



import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'

const ButtonText = ({onPress,label}:ButtonTextProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={()=>onPress?.()}>
        <Text style={styles.btnText}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    marginTop:30,
    marginLeft:30

  },
  btnContainer:{
    backgroundColor:"black",marginRight:20,
    display:"flex",
    borderRadius:5

  },

  btnText:{
    color:"white",
    textAlign:"center",
    paddingTop:10,
    paddingBottom:10,
    fontFamily:"serif",
    fontWeight:"bold",

  },

})
export default ButtonText