interface InputTextProps {
  label?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  placeholder?: string
  fontFamily?: string
}

import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const InputText = ({ label, value, onChangeText, placeholder, fontFamily }: InputTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, marginBottom: 10, fontFamily: fontFamily }} >{label}</Text>
      <TextInput style={styles.input}
        onChangeText={(text) => onChangeText?.(text)}
        value={value} placeholder={placeholder} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 30,

  },
  input: {
    borderColor: "gray",
    borderWidth: 0.8,
    marginRight: 20,
    borderRadius: 5,
  }

})
export default InputText