import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useAppSelector } from '../store/Hooks';
import { RootState } from '../store/store';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailScreen'>;

const DetailScreen = ({ route, navigation }: Props) => {
  const  index  = route.params?.index;
  const { todos } = useAppSelector((state: RootState) => state.todo);
  const item = todos[index];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details</Text>
      {item ? (
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.font}>Title: {item.title}</Text>
            <Text style={styles.font}>Description: {item.description}</Text>
            <Text style={styles.font}>Date: {item.date}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={require('../../assets/editIcon.png')} style={styles.icon} />
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
});

export default DetailScreen;
