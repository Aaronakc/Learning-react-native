import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import InputElem from '../Components/InputElem'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useAppDispatch } from '../store/Hooks';
import { addTodo } from '../store/todoSlice';
type Props = NativeStackScreenProps<RootStackParamList, 'AddTaskScreen'>;
const AddDetailsPage = ({ navigation }: Props) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [todos, setTodos] = useState<{ title: string, description: string, date: string }[]>([])

  const handleTitle = (text: string) => setTitle(text)
  const handleDescription = (text: string) => setDescription(text)
  const handleDate = (text: string) => setDate(text)


  const dispatch=useAppDispatch()

  const handleAdd=()=>{
    if(!title || !description || !date){
      return
    }
    const updatedTodos={
      title,
      description,
      date,
    }
    dispatch(addTodo(updatedTodos))
    setTitle('')
    setDescription('')
    setDate('')
  
    navigation.navigate('HomeScreen')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add New Task</Text>
      <InputElem text="Title" onChangeText={handleTitle} input={title}  placeholder='Example:Wake up'/>
      <InputElem text="Description" onChangeText={handleDescription} input={description} placeholder='Write the description' />
      <InputElem text="Date" onChangeText={handleDate} input={date} placeholder='2082/03/31'/>
      <View>
        <View style={styles.flex}>
        
          {/* <Button title="Save" onPress={handleAdd} /> */}
          <TouchableOpacity onPress={handleAdd}>
            <Text style={styles.btn}>SAVE</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={[styles.btn]}>CANCEL</Text>
          </TouchableOpacity>
        
          {/* <Button title="Cancel" color="#841584" /> */}

        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal:15,

    // backgroundColor:'pink'
  },
  flex: {
    flexDirection: "column",
    gap: 20,
    marginHorizontal: 15,
    marginVertical: 20,

  },
  text:{
    fontFamily:"serif",
    fontWeight:"bold",
    fontSize:27,
    marginHorizontal: 15,
    marginTop:10,
    marginBottom:15,


  },
  btn:{
    borderRadius: 8,
    paddingHorizontal:10,
    paddingVertical:10,
    marginHorizontal:5,
    fontSize:15,
    textAlign:"center",
    backgroundColor:"#b34c6bff",
    color:"white",
  },
  
})

export default AddDetailsPage