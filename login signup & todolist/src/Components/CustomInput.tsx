import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'

interface CustomInputProps {
  placeholder?: string;
  icon?: any;
  onChangeText?: (value: string) => void;
  value?: string;
  color?: string;
}

const CustomInput = ({ placeholder, icon, onChangeText, value, color }: CustomInputProps) => {

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#888"
        style={[styles.input, { color: color }]}
        onChangeText={(text) => onChangeText?.(text)}
        value={value}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginHorizontal: 25,
    marginTop: 20,
    paddingBottom: 5,
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingVertical: 0,
  },
})

export default CustomInput
