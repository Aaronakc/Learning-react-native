import firestore from '@react-native-firebase/firestore';
import { getAuth } from "@react-native-firebase/auth"
import { Todo } from '../types/todos';

export const getUserId=()=>{
  const uid=getAuth().currentUser?.uid
  if(!uid) throw 'No such user id'
  return uid
}

export const addTodoToFirebase=async(title:string,description:string,date:string)=>{
  const uid=getUserId()

  const id=Date.now().toString()

  const ref=firestore().collection('Todos').doc(uid).collection('UserTodos').doc(id)
  
  await ref.set({title,description,date,todoid:id,checked:false})

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
  await todoRef.delete()

}

export const ToggleTodoFromFirebase=async(todoid:string)=>{
  const uid=getUserId()
  
  const todoRef=firestore().collection('Todos').doc(uid).collection('UserTodos').doc(todoid)

  const doc=await todoRef.get()
  // console.log(doc)
  const todo=doc.data()

  if(todo)
    await todoRef.update({checked:!todo.checked})
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

