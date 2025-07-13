import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useRoute } from '@react-navigation/native';


type Props = NativeStackScreenProps<RootStackParamList, 'RemainingTask'>;

interface Todo {
  task: string;
  checked: boolean;
}




const RemainingTask = ({ navigation }: Props) => {
  const route = useRoute();
  const { todos } = route.params as { todos: Todo[] }
  const remainingTask = todos.filter((todo => !todo.checked))
  return (
    <View style={styles.container}>
      {
        remainingTask.length > 0 ? (
          <>
            <View style={styles.flexBox}>
              <TouchableOpacity onPress={() => navigation.navigate('TodoTask')}>
                <Image source={require('../../assets/backBtnIcon.png')} style={styles.image} />
              </TouchableOpacity>
              <Text style={styles.titlefont}>Remaining Tasks</Text>
            </View>

            <FlatList
              style={styles.flatListStyle}
              data={todos}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <View style={styles.taskWrapper}>
                  <Text style={styles.font}>{item.task}</Text>
                </View>
              }
            />
          </>)
          : (
            <>
              <View style={styles.flexBox}>
                <TouchableOpacity onPress={() => navigation.navigate('TodoTask')}>
                  <Image source={require('../../assets/backBtnIcon.png')} style={styles.image} />
                </TouchableOpacity>
                <Text style={styles.titlefont}>Remaining Tasks</Text>
              </View>
              <Text style={styles.noRemainingTaskFont}>No Remaining Task</Text>
            </>
          )
      }

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#141414"

  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#009f8b",
    height: 90,

  },
  titlefont: {
    fontFamily: "serif",
    fontWeight: "condensedBold",
    fontSize: 20,
  },
  image: {
    width: 20,
    height: 20,
  },
  taskWrapper: {
    display: "flex",
    backgroundColor: "#3b3b3b",
    // alignItems: "center",
    elevation: 5,
    marginTop: 15,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
  },
  font: {
    color: "white",
    fontFamily: "serif",
  },
  flatListStyle: {
    flex: 1,
    marginBottom: 10,
  },
  noRemainingTaskFont: {
    color: "white",
    fontSize: 20,
    fontFamily: "serif",
    textAlign: "center",
    paddingVertical: 200,
  }
})

export default RemainingTask