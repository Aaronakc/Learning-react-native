import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { CompositeScreenProps, useNavigation } from '@react-navigation/native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList, RootStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// type Props = CompositeScreenProps<
//   BottomTabScreenProps<BottomTabParamList>,
//   NativeStackScreenProps<RootStackParamList>
// >;

const HistroyScreen = () => {

  // const navigation=useNavigation()
  return (
    <View>
      <View style={styles.flexBox}>
        <TouchableOpacity style={styles.Completedbtn}>
          <Text style={styles.title}>All Task</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.Completedbtn} >
          <Text style={styles.title}>Completed Task</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.Remainingbtn}>
          <Text style={styles.title}>Remaining Task</Text>

        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flexBox: {
    flexDirection: "row",
    marginHorizontal: 18,
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
    gap:5,
  },
  Completedbtn: {
    backgroundColor: "#cb736e",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,

  },
  Remainingbtn: {
    // backgroundColor: "#e49e7e",
    backgroundColor: "#cb736e",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,


  },
  title: {
    color: "white",
    fontFamily: "serif",

  },
})

export default HistroyScreen