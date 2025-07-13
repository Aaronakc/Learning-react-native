import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'


interface NavTicketProps{
  icon?:any,
}
const NavTicket = ({icon}:NavTicketProps) => {
  return (
    <View>
      <ImageBackground source={icon} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.flexBox}>
            <View style={styles.flexBox}>
              <Text style={[styles.font, { fontSize: 14 }]}>AIRFRANCE</Text>
              <Image style={styles.icon} source={require('../../assets/airFrance.png')} />

            </View>
            <Text style={[styles.font, { fontSize: 16 }]}>Sat,18 Jan 2020</Text>


          </View>
          <View style={styles.flex}>
            <Text style={[styles.font, { fontSize: 12 }]}>DAY FLIGHT</Text>

          </View>
          <Text style={[styles.font, { fontSize: 23, marginBottom: 10 }]}>Julien Simpson</Text>
          <View style={styles.wrapperFlex}>
            <Image source={require('../../assets/beta.png')} style={styles.boardingIcon} />
            <View>
              <Text style={styles.font}>BUSINESS CLASS</Text>
              <Text style={[styles.font, { color: "blue" }]}>BOARDING 07:35 AM</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 20,

  },
  image: {
    width: "100%",
    height: 160,
  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  flex: {
    display: "flex",
    width: "100%",
    alignItems: "flex-end"
  },
  icon: {
    width: 15,
    height: 15,
  },
  boardingIcon: {
    width: 30,
    height: 30,
  },
  wrapperFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  font: {
    fontFamily: "serif",
    fontWeight: "bold",
    color: "white",
  }
})

export default NavTicket