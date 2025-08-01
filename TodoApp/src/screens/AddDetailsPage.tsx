import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Button } from 'react-native'
import React, { useCallback, useState } from 'react'
import InputElem from '../Components/InputElem'
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackScreenProps } from '../types/navigation';
// import { useAppDispatch } from '../store/Hooks';
// import { addTodo } from '../store/todoSlice';
import { addTodoToFirebase, getUserId } from '../utils/fireStore';
import DatePicker from 'react-native-date-picker';
import { scheduleNotification } from '../utils/scheduleNotification';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
// type Props = NativeStackScreenProps<RootStackParamList, 'AddTaskScreen'>;
const AddDetailsPage = ({ navigation }: RootStackScreenProps<'AddTaskScreen'>) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [date, setDate] = useState('')
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  // const [checked, setChecked] = useState(false)
  // const [edit, setEdit] = useState(false)

  const handleTitle = (text: string) => setTitle(text)
  const handleDescription = (text: string) => setDescription(text)
  // const handleDate = (text: string) => setDate(text)

  // const handleTitle = useCallback((text: string) => { setTitle(text) }, [])
  // const handleDescription = useCallback((text: string) => { setDescription(text) }, [])
  // const handleDate = useCallback((text: string) => { setDate(text) }, [])


  // const dispatch = useAppDispatch()
  // console.log("add")

  const handleAdd = async () => {
    if (!title || !description || !date) {
      Toast.show({type:"error",text1:"Fill up all the fields"})
      return
    }

    // dispatch(addTodo(updatedTodos))
    try {
      const todoId = await addTodoToFirebase(title, description, date.toISOString(), '')

      const notificationId = await scheduleNotification(title, description, todoId, date)

      const uid = getUserId()
      const todoRef = firestore().collection('Todos').doc(uid).collection('UserTodos').doc(todoId)

      await todoRef.update({ notificationId })

    }
    catch (error) {
      console.log('failed to save to the firestore', error)
    }


    setTitle('')
    setDescription('')
    setDate(new Date())

    navigation.navigate('HomeScreen')
    Toast.show({ type: "success", text1: "task added successfully",visibilityTime:1000 })
  }


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* <Text style={styles.text}>Add New Task</Text> */}
          <InputElem text="Title" onChangeText={handleTitle} input={title} placeholder='Example:Wake up' />
          <InputElem text="Description" onChangeText={handleDescription} input={description} placeholder='Write the description' multiline />
          <View style={{ marginHorizontal: 25 }}>
            <Text style={{ marginBottom: 8, fontSize: 16 }}>Date</Text>
            {/* <Button title="select date" onPress={() => setOpen(true)} /> */}
            <TouchableOpacity style={styles.dateButton} onPress={() => setOpen(true)}>
              <Text style={styles.dateButtonText}>Select Date</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />

            <Text>{date.toLocaleString()}</Text>

          </View>
          <View>
            <View style={styles.flex}>


              <TouchableOpacity onPress={handleAdd}>
                <Text style={[styles.btn, { backgroundColor: "#900157ff" }]}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={[styles.btn, { backgroundColor: "gray" }]}>CANCEL</Text>
              </TouchableOpacity>


            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginHorizontal: 15,
    marginVertical: 20,

  },
  text: {
    fontFamily: "serif",
    fontWeight: "bold",
    color: "gray",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",


  },
  btn: {
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginHorizontal: 10,
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#b34c6bff",
    color: "white",
  },
  dateButton: {
    backgroundColor: '#900157ff', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  dateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },


})

export default AddDetailsPage