import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const PlumbingProfile = () => {
  return (
    <View style={styles.flex}>
      <View style={styles.flexBox}>
        <Image style={styles.icon} source={require('../../assets/plumberProfile1.png')} />
        <View>
          <Text style={[styles.font, { fontSize: 17, fontWeight: "bold" }]}>Mr.Wilson</Text>
          <Text style={styles.font}>Service Provider</Text>
        </View>
      </View>


      <View style={styles.flexBox}>
        <View style={styles.Wrapper}>
          <Image style={styles.iconLarge} source={require('../../assets/chatIcon4.png')} />
        </View>
        <View style={styles.Wrapper}>
          <Image style={styles.iconLarge} source={require('../../assets/telephone2.png')} />
        </View>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  icon: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 10,

  },
  iconLarge: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 10,
    left: 10,

  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginRight: 0,

  },
  font: {
    fontFamily: "serif",
    lineHeight: 25,
  },
  Wrapper: {
    backgroundColor: "#f0750f",
    borderRadius: 50,
    width: 40,
    height: 40,
    position: "relative",
    
  

  }
})

export default PlumbingProfile