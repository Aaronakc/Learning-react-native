import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'


interface InputElemProps {
  text?: string;
  input?: string;
  placeholder?: string;
  onChangeText?: (value: string) => void;
  multiline?: boolean;
  iconName?: string;
  color?:string,

}
const InputElem = ({ text, onChangeText, input, placeholder, multiline = false, iconName,color }: InputElemProps) => {
  return (
    <View style={styles.container}>

      <View>
        <Text style={[styles.text,{color:color}]}>{text}</Text>

      </View>

      <View style={styles.inputWrapper}>
        {iconName && <Icon name={iconName} size={20} color="#b56d69ff" style={styles.icon}/>}

        <TextInput
          style={[styles.input, multiline && styles.multiline]}
          value={input}
          placeholder={placeholder}
          onChangeText={(text) => onChangeText?.(text)}
          multiline={multiline}

        />
      </View>

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
    fontSize: 18,

    // marginVertical: 0,

  },

  input: {
    // marginHorizontal: 20,
    // marginVertical: 5,
  
    padding: 15,
    borderRadius: 12,
    // borderColor: "#ded3daff",
  
    flex:1,

  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#ded3daff",
    elevation: 2,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 10,
  }


})

export default InputElem