import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../store/Hooks';
import { RootState } from '../store/store';
import { deleteTodo, toggleTodo } from '../store/todoSlice';
import { HomeTabScreenProps } from '../types/navigation';


const HomeScreen = ({ navigation }:HomeTabScreenProps<'Home'> ) => {


  const { todos } = useAppSelector((state: RootState) => state.todo)
  const dispatch = useAppDispatch()


  const handleNav = () => {
    navigation.navigate('AddTaskScreen')

  }

  const handleDeleteIndex = (i: number) => {
    dispatch(deleteTodo(i))

  }

  const handleToggleIndex = (i: number) => {
    dispatch(toggleTodo(i))
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Tasks</Text>

      {/* <View style={styles.flexBox}>
        <TouchableOpacity style={styles.Completedbtn} onPress={() => navigation.navigate('CompletedTaskScreen')}>
          <Text style={styles.title}>Completed Task</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.Remainingbtn} onPress={() => navigation.navigate('RemainingTaskScreen')}>
          <Text style={styles.title}>Remaining Task</Text>

        </TouchableOpacity>

      </View> */}
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { index })}>
              <View style={styles.flex}>
                <View style={[styles.flex, { gap: 20, flex: 1 }]}>
                  <TouchableOpacity onPress={() => handleToggleIndex(index)}>
                    <Image source={item.checked ? require('../../assets/checkIcon.png') : require('../../assets/unCheckIcon.png')} style={styles.icon} />
                  </TouchableOpacity>
                  <Text style={styles.font}>Title: <Text>{item.title}</Text></Text>
                </View>
                <TouchableOpacity onPress={() => handleDeleteIndex(index)}>
                  <Image source={require('../../assets/deleteIcon.png')} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.text} onPress={handleNav}>+</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    marginBottom: 70,
    marginTop: 0,

  },
  text: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: "#7d9aeeff",
    backgroundColor: "#cb736e",
    fontSize: 25,
    color: "white",
    position: "absolute",
    top: 440,
    left: 290,
    fontWeight: "bold",
    // left: 160,
  },
  wrapper: {
    elevation: 3,
    borderRadius: 10,
    // backgroundColor: "#d4dcf3ff",
    paddingHorizontal: 20,
    paddingVertical: 28,
    marginHorizontal: 20,
    marginVertical: 10,

  },
  font: {
    fontFamily: "serif",
    flex: 1,
    paddingRight: 15,

  },
  heading: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 20,
    color: "#cb736e",
    marginBottom: 10,
  },

  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  icon: {
    width: 18,
    height: 18,
  },
  flexBox: {
    flexDirection: "row",
    marginHorizontal: 18,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Completedbtn: {
    backgroundColor: "#cb736e",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,

  },
  Remainingbtn: {
    backgroundColor: "#e49e7e",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,


  },
  title: {
    color: "white",
    fontFamily: "serif",

  }
})

export default HomeScreen