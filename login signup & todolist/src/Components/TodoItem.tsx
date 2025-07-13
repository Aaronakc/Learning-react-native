import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'

interface TodoItemProps {
  task: string;
  onPress?: (index: number) => void;
  checked?: boolean;
  index: number;
  onDelete?:(index:number)=>void;
  onEdit?:(index:number)=>void;
  onSave?:()=>void;
  editText?: string;
  setEditText?:(text:string)=>void;
  isEditing: boolean;
}

const TodoItem = ({task,checked,index,onPress,onDelete,onEdit,onSave,editText,setEditText,isEditing,}:TodoItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {!isEditing && (
          <TouchableOpacity onPress={() => onPress?.(index)}>
            <Image
              source={
                checked
                  ? require('../../assets/checkIcon.png')
                  : require('../../assets/uncheckIcon.png')
              }
              style={styles.image}
            />
          </TouchableOpacity>
        )}

        {isEditing ? (
          <TextInput
            value={editText}
            onChangeText={(text)=>setEditText?.(text)}
            style={[styles.font, { borderBottomWidth: 1, borderColor: 'white', paddingVertical: 2 }]}
          />
        ) : (
          <Text style={[styles.font, checked && styles.lineThrough]}>{task}</Text>
        )}
      </View>

      <View style={styles.flexContainer}>
        {!isEditing && (
        <TouchableOpacity onPress={() => onDelete?.(index)}>
          <Image source={require('../../assets/deleteIcon.png')} style={styles.deleteImage} />
        </TouchableOpacity>

        )}

        {isEditing ? (
          <TouchableOpacity onPress={onSave}>
            <Text style={{ fontSize: 16, color: '#009f8b', marginLeft: 10 }}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => onEdit?.(index)}>
            <Image source={require('../../assets/edit.png')} style={styles.deleteImage} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 28,
    elevation: 5,
    // backgroundColor: "white",
    backgroundColor:"#3b3b3b",
    marginRight: 20,
    marginVertical: 14,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  font: {
    fontFamily: "serif",
    display:"flex",
    flex: 1,
    color:"white"
  },
  image: {
    height: 14,
    width: 14,
    marginRight: 10,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    color: 'gray'
  },
  deleteImage: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  flexContainer:{
    display: "flex",
    flexDirection:"row",
    gap: 2,
  }
})

export default TodoItem
