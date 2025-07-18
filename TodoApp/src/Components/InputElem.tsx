import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'


interface InputElemProps {
  text?: string;
  input: string;
  placeholder?: string;
  onChangeText?: (value: string) => void;
  multiline?: boolean;

}
const InputElem = ({ text, onChangeText, input, placeholder, multiline = false }: InputElemProps) => {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.text}>{text}</Text>

      </View>
      <TextInput
        style={[styles.input, multiline && styles.multiline]}
        value={input}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText?.(text)}
        multiline={multiline}

      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    // backgroundColor:"pink"
  },
  text: {
    marginHorizontal: 23,
    fontFamily: "serif",
    fontWeight: "500",
    fontSize:18,
    
    // marginVertical: 0,

  },

  input: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    padding: 15,
    borderRadius: 12,
    borderColor: "#ded3daff",
    elevation: 2,

  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },


})

export default InputElem