import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import InputElem from '../Components/InputElem'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
type Props = NativeStackScreenProps<RootStackParamList, 'AddTaskScreen'>;
const AddDetailsPage = ({ navigation }: Props) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [todos, setTodos] = useState<{ title: string, description: string, date: string }[]>([])

  const handleTitle = (text: string) => setTitle(text)
  const handleDescription = (text: string) => setDescription(text)
  const handleDate = (text: string) => setDate(text)

  const handleAdd=()=>{
    if(!title || !description || !date){
      return
    }
    setTitle('')
    setDescription('')
    setDate('')
    const updatedTodos=[...todos,{title:title,description:description,date:date}]
    setTodos(updatedTodos)
    navigation.navigate('HomeScreen',{todos:updatedTodos})
  }


  return (
    <View style={styles.container}>
      <InputElem text="Title" onChangeText={handleTitle} input={title} />
      <InputElem text="Description" onChangeText={handleDescription} input={description} />
      <InputElem text="Date" onChangeText={handleDate} input={date} />
      <View>
        <View style={styles.flex}>
          <Button title="Save" onPress={handleAdd} />
          <Button title="Cancel" color="#841584" />

        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'pink'
  },
  flex: {
    flexDirection: "column",
    gap: 20,
    marginHorizontal: 15,
    marginVertical: 20,

  }
})

export default AddDetailsPage