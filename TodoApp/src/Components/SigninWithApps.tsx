import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface SigninWithApps {
  icon?: any;
  text?: string;
  color?:string;
  onPress?:()=>void;
}

const SigninWithApps = ({ icon, text,color,onPress }: SigninWithApps) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={()=>onPress?.()}>
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
      marginRight: 16,
      display: "flex",
      borderRadius: 15,
      borderColor: "gray",
      borderWidth: 1,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      gap: 15,

    },
    imageContainer: {
      width: 15,
      height: 15,
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