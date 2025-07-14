import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import PlumbingBgScreen from '../Components/PlumbingBgScreen'
import PlumbingDescrip from '../Components/PlumbingDescrip'
import PlumbingOptions from '../Components/PlumbingOptions'
import PlumbingDescription from '../Components/PlumbingDescription'
import PlumbingProfile from '../Components/PlumbingProfile'


const PlumbingUi = () => {
  return (
    <ScrollView style={{flex:1, position: "relative" }}>
      <PlumbingBgScreen />
      <Image source={require('../../assets/plumberWorking.png')} style={styles.image} />
      <Image source={require('../../assets/play1.png')} style={styles.icon} />
      <View style={styles.border}>
        <PlumbingDescrip />



        <View style={styles.container}>

          <PlumbingOptions icon={require('../../assets/mop.png')} bgColor="#cfecf7" text="Cleaning" />


          <PlumbingOptions icon={require('../../assets/paint-roller.png')} bgColor="#fdf5e2" text={"Painting"} />
          <PlumbingOptions icon={require('../../assets/thermometer.png')} bgColor='#dcffdb' text="Heating" />
          <PlumbingOptions icon={require('../../assets/water-tap.png')} bgColor='#c4e6ff' text="Plumbing" />
          <PlumbingOptions icon={require('../../assets/24.png')} text="More" />




        </View>
        <PlumbingDescription />
        <PlumbingProfile />
        <TouchableOpacity>
          <Text style={styles.btn}>Reply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "white",
  },
  border: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "white",
    elevation: 5,
    marginTop: -20,


  },
  container: {

    width: "90%",
    // height: "20%",
    paddingVertical:10,
    paddingLeft: 5,




    flexDirection: "row",
    // backgroundColor: "red",
    borderRadius: 20,
    elevation: 1,
    gap: 8,
    marginTop: 15,
    marginHorizontal: 19,

  },
  btn: {
    backgroundColor: "#f0750f",
    borderRadius: 25,
    paddingVertical: 15,
    textAlign: "center",
    color: "white",
    fontFamily: "serif",
    marginHorizontal: 20,
    marginBottom:20,
    marginTop:10,

  },
  image: {
    width: 60,
    height: 78,
    position: "absolute",
    top: 92,
    left: 283,
    borderRadius: 10,
  },
  icon: {
    position: "absolute",
    width: 15,
    height: 15,
    top: 123,
    left: 305,
  }
})

export default PlumbingUi