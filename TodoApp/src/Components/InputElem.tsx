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
  labelColor?:string;
  iconColor?:string,
  error?:string,
  name?: string,
  errorMsg?: string
}
const InputElem = ({ text, onChangeText, input, placeholder, multiline = false, iconName,color,iconColor,error, name, errorMsg,labelColor }: InputElemProps) => {
  let passwordNotMatched = (error == "confirm password" && name == "password")
  return (
    <View style={styles.container}>

      <View>
        <Text style={[styles.text,{color:labelColor}]}>{text}</Text>
      </View>

      <View style={[styles.inputWrapper,{borderColor: (name==error || passwordNotMatched)? "red": undefined}]}>
        {iconName && <Icon name={iconName} size={20} color={iconColor} style={styles.icon}/>}

        <TextInput
          style={[styles.input, multiline && styles.multiline]}
          value={input}
          placeholder={placeholder}
          onChangeText={(text) => onChangeText?.(text)}
          multiline={multiline}
        />
      </View>
        {
          error===name && <Text style={[styles.text, {color: color}]}>
            {errorMsg}
          </Text>
        }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    paddingHorizontal: 20
   
  },
  text: {
    marginHorizontal: 5,
    fontFamily: "serif",
    fontWeight: "500",
    fontSize: 15,
  },

  input: {
    padding: 15,
    borderRadius: 12,
    flex:1,

  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 0.25,
    borderRadius: 12,
    elevation: 2,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 10,
  }


})

export default InputElem