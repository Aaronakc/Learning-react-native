import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useAppDispatch, useAppSelector } from '../store/Hooks';
import { RootState } from '../store/store';
import { saveEdit, startEdit } from '../store/todoSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailScreen'>;

const DetailScreen = ({ route, navigation }: Props) => {
  console.log("details screen");
  const index = route.params?.index;
  const { todos } = useAppSelector((state: RootState) => state.todo);
  const dispatch = useAppDispatch();
  const item = todos[index];

  const edit = item.edit;

  const [title, setTitle] = useState(item?.title || '');
  const [description, setDescription] = useState(item?.description || '');
  const [date, setDate] = useState(item?.date || '');

  const handleEdit = (index: number) => {
    dispatch(startEdit(index));
  };

  const handleSave = (index: number, title: string, description: string, date: string) => {
    const editedText = {
      index,
      title,
      description,
      date,
    };
    dispatch(saveEdit(editedText));
  };

  return (
    <View style={styles.container}>
      {edit ? <Text style={styles.heading}>Edit</Text> : <Text style={styles.heading}>Details</Text>}
      {item ? (
        <View style={edit ? styles.editWrapper : styles.wrapper}>
          <View style={{ flex: 1 }}>
            <View style={styles.font}>
              {edit ? (
                <>
                  <Text>Title</Text>
                  <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                  />
                </>
              ) : (
                <Text style={styles.title}>Title:{item?.title}</Text>
              )}
            </View>
            <View style={styles.font}>
              {edit ? (
                <>
                  <Text>Description:</Text>
                  <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                  />
                </>
              ) : (
                <Text style={styles.desc}>Description:{item?.description}</Text>
              )}
            </View>
            <View style={styles.font}>
              {edit ? (
                <>
                  <Text>Date</Text>
                  <TextInput
                    style={styles.input}
                    value={date}
                    onChangeText={(text) => setDate(text)}
                  />
                </>
              ) : (
                <Text style={styles.date}>Date:{item?.date}</Text>
              )}
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={
                edit
                  ? () => handleSave(index, title, description, date)
                  : () => handleEdit(index)
              }
            >
              <Image
                source={
                  edit
                    ? require('../../assets/saveIcon.png')
                    : require('../../assets/editIcon.png')
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text style={styles.font}>Task not found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  text: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'gray',
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    top: 495,
    left: 290,
  },
  wrapper: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#d4dcf3ff',
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  font: {
    fontFamily: 'serif',
    paddingHorizontal: 15,
  },
  heading: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  icon: {
    width: 15,
    height: 15,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
  },
  editWrapper: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#d4dcf3ff',
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 4,
    color: '#555',
  },
  date: {
    marginTop: 6,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default DetailScreen;
