import firestore from '@react-native-firebase/firestore';
import { getAuth } from "@react-native-firebase/auth"
import { Todo } from '../types/todos';
import notifee  from '@notifee/react-native';
import { Alert } from 'react-native';
import { scheduleNotification } from './scheduleNotification';
import Toast from 'react-native-toast-message';

export const getUserId=()=>{
  const uid=getAuth().currentUser?.uid
  if(!uid) throw 'No such user id'
  return uid
}

 export const getUserProfileData=async()=>{
  const uid=getUserId()
  const doc=await firestore().collection('Users').doc(uid).get()
  return doc.exists() ? doc.data() : null
 }

 export const saveUserProfile = async (nickname: string, phone: string) => {
  const uid = getUserId()
  await firestore().collection('Users').doc(uid).set({ nickname, phone }, { merge: true })
}


export const addTodoToFirebase=async(title:string,description:string,date:string,notificationId:string)=>{
  const uid=getUserId()

  const id=Date.now().toString()

  const ref=firestore().collection('Todos').doc(uid).collection('UserTodos').doc(id)
  
  await ref.set({title,description,date,todoid:id,checked:false,userid:uid,notificationId})
  return id
}


export const getTodosFromFirebase=async()=>{
  const uid=getUserId()

  const snapshot=await firestore().collection('Todos').doc(uid).collection('UserTodos').get()

  const todos = snapshot.docs.map(doc => ({todoid: doc.id,...doc.data() as Omit<Todo, 'todoid'>}))
  return todos

}

export const deleteTodoFromFirebase=async(todoid:string)=>{
  const uid=getUserId()

  const todoRef=firestore().collection('Todos').doc(uid).collection('UserTodos').doc(todoid)

  const doc = await todoRef.get()
  const todo = doc.data()

  if(todo?.notificationId){
    await notifee.cancelNotification(todo.notificationId)
  }
 
  await todoRef.delete()
 

}

export const ToggleTodoFromFirebase=async(todoid:string)=>{
  const uid=getUserId()
  
  const todoRef=firestore().collection('Todos').doc(uid).collection('UserTodos').doc(todoid)

  const doc=await todoRef.get()
  // console.log(doc)
  const todo=doc.data()

  if(todo){
    const checkStatus=!todo.checked
    await todoRef.update({checked:checkStatus})

    if(checkStatus){Toast.show({type:"success",text1:"Congrats on your task completion",visibilityTime:1000

    })}

    if(checkStatus && todo?.notificationId){
      await notifee.cancelNotification(todo?.notificationId)
    }
    else if(!checkStatus){
      const date = new Date(todo.date)
      const now = new Date()

      if(date > now){
        const newNotificationId = await scheduleNotification(todo.title,todo.description,todoid,date)
        await todoRef.update({ notificationId: newNotificationId })
        Alert.alert('Oh oh! You did not complete it So,Task has been rescheduled')
      }
      else{
        Alert.alert('Opps Time has passed !!', 'This task cannot be rescheduled\n Is it okay?')
      }

    }
  }

}


export const getTodoDetails = async(todoid: string)=> {
  const uid=getUserId()
  
  const todoRef=firestore().collection('Todos').doc(uid).collection('UserTodos').doc(todoid)

  const doc=await todoRef.get()
  const todo=doc.data()

  if(todo) {
    return todo
  }
   
}
export const handleSaveTodo=async(todoid:string, title:string, description: string, date: string)=>{
  const uid=getUserId()
  
  const todoRef=firestore().collection('Todos').doc(uid).collection('UserTodos').doc(todoid)

  const doc=await todoRef.get()
  // console.log(doc)
  const todo=doc.data()

  if(todo)
    await todoRef.update({title, description, date})
}

