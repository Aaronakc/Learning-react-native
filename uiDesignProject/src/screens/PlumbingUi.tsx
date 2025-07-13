import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import PlumbingBgScreen from '../Components/PlumbingBgScreen'
import PlumbingDescrip from '../Components/PlumbingDescrip'
import PlumbingOptions from '../Components/PlumbingOptions'
import PlaneDescription from '../Components/PlaneDescription'
import PlumbingDescription from '../Components/PlumbingDescription'
import PlumbingProfile from '../Components/PlumbingProfile'


const PlumbingUi = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <PlumbingBgScreen />
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
  border:{
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    backgroundColor:"white",
    elevation:5,
    marginTop:-20,

    
  },
  container: {

    width: "90%",
    height: "20%",
    paddingLeft: 15,


  
 
    flexDirection: "row",
    // backgroundColor: "red",
    borderRadius: 20,
    elevation: 1,
    gap: 8,
    marginTop:15,
    marginHorizontal:10,
   
  },
  btn:{
    backgroundColor:"#f0750f",
    borderRadius:25,
    paddingVertical:12,
    textAlign:"center",
    color:"white",
    fontFamily:"serif",
    marginHorizontal:15,
  
  }
})

export default PlumbingUi