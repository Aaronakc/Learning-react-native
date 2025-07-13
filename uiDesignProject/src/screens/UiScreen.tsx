import { StyleSheet, View,ScrollView, Text } from 'react-native'
import React from 'react'
import OptionsUi from '../Components/OptionsUi'
import Title from '../Components/Title'
import DailyMealText from '../Components/DailyMealText'
import Calorie from '../Components/Calorie'
import FoodTrackText from '../Components/FoodTrackText'
import Schedule from '../Components/Schedule'


const UiScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* nav */}
      <View style={styles.titleContainer}>
        <Title />
      </View>

      {/* title */}
      <DailyMealText/>

      {/* options */}
      <View style={styles.row}>
        <OptionsUi text="Log a Food" icon={require('../../assets/searchIcon.png')} backgroundColor='#FFE4D2' />
        <OptionsUi text="Voice Log" icon={require('../../assets/voiceIcon.png')} backgroundColor='#f7d7ff' />
        <OptionsUi text="Scan a Barcode" icon={require('../../assets/scannerIcon.png')} backgroundColor='#cfecf7' />
        <OptionsUi text="Scan a Meal" icon={require('../../assets/scanMealIcon.png')} backgroundColor='#FADADD' />
      </View>
      <Calorie/>
      <FoodTrackText/>
      <Schedule/>
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,

  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

  },
  titleContainer:{
    marginHorizontal:5,
    marginVertical: 15,

  }
})

export default UiScreen