import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface SigninWithApps {
  icon?: any;
  text?: string;
  color?:string;
  onPress?:()=>void;
  disabled?:boolean;
}

const SigninWithApps = ({ icon, text,color,onPress,disabled=false}: SigninWithApps) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={()=>onPress?.()} disabled={disabled}>
        <Image source={icon} style={styles.imageContainer} />
        <Text style={[styles.fontDesg,{color:color}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create(
  {
    container: {
      marginTop: 20,
      marginLeft: 25,
      marginRight: 6,
      marginBottom:0,
    },
    btnContainer: {
      // marginRight: 16,
      marginLeft:0,
      marginRight:15,
      display: "flex",
      borderRadius: 30,
      borderColor: "gray",
      borderWidth: 1,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
    },
    imageContainer: {
      width: 15,
      height: 15,
      marginRight:10,
    },
    fontDesg: {
      textAlign: "center",
      paddingTop: 10,
      paddingBottom: 10,
      fontFamily: "serif",

    },

  }
)


export default SigninWithApps