import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'


interface InputElemProps{
  text?:string;
  input:string;
  placeholder?:string;
  onChangeText?:(value:string)=>void;

}
const InputElem = ({text,onChangeText,input,placeholder}:InputElemProps) => {
  return (
    <View style={styles.container}>
      
      <View>
      <Text style={styles.text}>{text}</Text>

      </View>
      <TextInput
        style={styles.input}
        value={input}
        placeholder={placeholder}
        onChangeText={(text)=>onChangeText?.(text)}

      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    // backgroundColor:"pink"
  },
  text: {
    marginHorizontal: 20,
    fontFamily:"serif",
    fontWeight:"400",
    // marginVertical: 0,

  },

  input: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderColor:"#ded3daff",

  },


})

export default InputElem