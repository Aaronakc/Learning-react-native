import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'


interface InputElemProps{
  text?:string;
  input:string;
  onChangeText?:(value:string)=>void;

}
const InputElem = ({text,onChangeText,input}:InputElemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={(text)=>onChangeText?.(text)}

      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    marginHorizontal: 20,
    // marginVertical: 0,

  },

  input: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    padding: 10,
  },


})

export default InputElem