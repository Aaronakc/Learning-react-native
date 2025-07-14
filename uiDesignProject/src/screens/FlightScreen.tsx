import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Time from '../Components/Time'
import Airport from '../Components/Airport'
import FlightInfo from '../Components/FlightInfo'
import FlightInfoMore from '../Components/FlightInfoMore'
import PlaneDescription from '../Components/PlaneDescription'
import NavTicket from '../Components/NavTicket'
import QrCode from '../Components/QrCode'

const FlightScreen = () => {

  const [mode, setMode] = useState(false)

  const handleMode = () => {
    setMode(!mode)
  }


  return (
    <>


      <View style={[styles.wrapper]}>
        {/* nav */}
        <View>
          <NavTicket icon={mode ? require('../../assets/darkSky.jpg') : (require('../../assets/cloud.png'))} >

          </NavTicket>
        </View>

        {/* container */}
        <ScrollView style={styles.contentDiv} contentContainerStyle={{ paddingBottom: 100 }}>
          <View style={mode?styles.bgColorDark:styles.bgColor}>
            <View style={styles.flexBox}>
              <Time text="08:10 AM" darkMode={mode} />
              <TouchableOpacity onPress={handleMode} >
                <Image style={styles.image} source={require('../../assets/on-button.png')} />

              </TouchableOpacity>
              <Time text="12:40 PM" darkMode={mode} />
            </View>

            <View style={styles.flexBox}>
              <Airport shortForm='DXB' country='Dubai' airportName='International Airport' darkMode={mode} />
              <Airport icon={require('../../assets/dotsIcon.png')} darkMode={mode} />
              <Airport shortForm='AMS' country='Amsterdam' airportName='Airport Schiphol' darkMode={mode} />

            </View>

            <View style={styles.flexBox}>
              <FlightInfo text='DEPARTURE' icon={require('../../assets/departure.png')} color="#0D98BA" />
              <FlightInfo text='ARRIVAL' icon={require('../../assets/arrivals.png')} iconFirst color="#f0da46ff" />

            </View>


            <View>
              <FlightInfoMore flightTitle="FLIGHT" seatTitle="SEAT" terminalTitle="TERMINAL" darkMode={mode} fontSize={15} />
            </View>
            <View>
              <FlightInfoMore flightTitle="TLC758" seatTitle="15A" terminalTitle="02" darkMode={mode} fontSize={20} />

            </View>

            <View>
              <PlaneDescription darkMode={mode} />
            </View>
            <View style={styles.qrWrapper}>
              <QrCode />
            </View>
          </View>




        </ScrollView>

      </View>




    </>


  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative"

  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 3,

  },
  bgColor: {
    backgroundColor: "rgba(232, 234, 238, 1)",
    borderBottomStartRadius: 40,


  },

  contentDiv: {

    elevation: 5,
    borderTopRightRadius: 40,
    marginTop: -27,
    position: "relative",




  },
  image: {
    width: 40,
    height: 40,
  },
  modeDiv: {
    position: "absolute",

  },
  qrWrapper: {
    position: 'absolute',
    top: 390,
    left: 120,
    backgroundColor: "white",
    padding: 3,
    borderRadius: 15,

  },

  light: {
    backgroundColor: "#ffffff",
  },
  dark: {
    backgroundColor: "#0e1314ff",
  },
  bgColorDark: {
    backgroundColor: "#0e1314ff",
    borderBottomStartRadius: 40,


  }

})

export default FlightScreen