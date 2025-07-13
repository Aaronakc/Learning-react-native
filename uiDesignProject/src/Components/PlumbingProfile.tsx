import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const PlumbingProfile = () => {
  return (
    <View style={styles.flex}>
      <View style={styles.flexBox}>
        <Image style={styles.icon} source={require('../../assets/plumberProfile.png')}/>
      <View>
        <Text style={[styles.font,{fontSize:17,fontWeight:"bold"}]}>Mr.Wilson</Text>
        <Text style={styles.font}>Service Provider</Text>
      </View>
      </View>
      <View style={styles.flexBox}>
        <Image style={styles.iconLarge} source={require('../../assets/chat.png')}/>
        <Image style={styles.iconLarge} source={require('../../assets/telephone.png')}/>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  flex:{
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginRight:20,
    marginLeft: 15,
    marginTop:10,
    marginBottom:15,
  },
  icon:{
    borderRadius:50,
    width:40,
    height:40,
  },
  iconLarge:{
    width: 20,
    height: 20,
  },
  flexBox:{
    display:"flex",
    flexDirection:"row",
    gap:15,
  },
  font:{
    fontFamily:"serif",
  }
})

export default PlumbingProfile