import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Meal from './Meal'

const Schedule = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexBox}>
        <Text style={styles.titleText}>YOUR SCHEDULE</Text>
        <Image source={require("../../assets/addIcon.png")} style={styles.icon} />
      </View>

      <View style={styles.flex}>
        <Image source={require('../../assets/clockIcon.png')} style={styles.clockIcon} />
        <Text style={styles.subHeading}>In Progress</Text>
      </View>

      <Meal icon={require('../../assets/checkedIcon.png')} text="Meal 1:" text2="3 eggs 1 tsp grass fed butter and one cup oatmean.Protein shake." textDecorationLine='line-through'/>
      <Meal icon={require('../../assets/uncheckIcon.png')} text="Meal 2:" text2="oz chicken breast and 1 cup Jasmine Rice"/>
      <Meal icon={require('../../assets/uncheckIcon.png')} text="Meal 3:" text2="150 grams ground beef (90% lean) 1 tsp Avacado Oil.50 grams potato"/>


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: "rgb(236, 240, 245)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,

  },
  titleText: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 15,

  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,

  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems:"center",

  },
  icon: {
    width: 28,
    height: 28,
  },
  clockIcon: {
    width: 20,
    height: 20,
  },
  subHeading: {
    color: "gray",
    fontFamily: "serif",
    fontSize: 17,
  }

})
export default Schedule