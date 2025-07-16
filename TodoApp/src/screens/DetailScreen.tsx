import { View, Text, StyleSheet, Image, TouchableOpacity, Button, FlatList } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useRoute } from '@react-navigation/native';
import { useAppSelector } from '../store/Hooks';
import { RootState } from '../store/store';
interface Todo {
  title: string;
  description: string;
  date: string;

}

type Props = NativeStackScreenProps<RootStackParamList, 'DetailScreen'>;
const DetailScreen = ({ navigation }: Props) => {

  const {todos}=useAppSelector((state:RootState)=>state.todo)
  
  // const route = useRoute()
  // const todos = (route.params as { todos?: Todo[] })?.todos || [];
  // console.log("btn presssed",todos)

  // const handleNav = () => {
  //   navigation.navigate('AddTaskScreen')
  //   console.error('btn pressed')
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <Text style={styles.font}>Title: {item.title}</Text>
            <Text style={styles.font}>description: {item.description}</Text>
            <Text style={styles.font}>date: {item.date}</Text>

          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",

  },
  text: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'gray',
    fontSize: 20,
    color: "white",
    position: "absolute",
    top: 495,
    left: 290,
  },
  wrapper: {
    elevation: 5,
    borderRadius:10,
    backgroundColor: "#d4dcf3ff",
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 20,

  },
  
  font:{
    fontFamily:"serif",
    paddingHorizontal:15,

  },
    heading:{
    fontFamily:"serif",
    fontWeight:"bold",
    fontSize:20,
    marginHorizontal:20,
    marginTop:10,

    

  }
})

export default DetailScreen