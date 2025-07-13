import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const GoogleSignin = () => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.btnContainer}>
        <Image source={require('../../assets/googlelogo.webp')} style={styles.imageContainer} />
        <Text style={styles.fontDesg}>Sign in with Google</Text>
      </TouchableOpacity>


    </View>
  )
}


const styles = StyleSheet.create(
  {
    container: {
      marginTop: 25,
      marginLeft: 30,
    },
    btnContainer: {
      marginRight: 20,
      display: "flex",
      borderRadius: 5,
      borderColor: "gray",
      borderWidth: 1,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      gap: 5,

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


export default GoogleSignin