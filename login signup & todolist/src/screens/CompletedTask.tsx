import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';


type Props = NativeStackScreenProps<RootStackParamList, 'CompletedTask'>;

interface Todo {
  task: string;
  checked: boolean;
}

const CompletedTask = ({ navigation }: Props) => {
  const route = useRoute();
  const { todos } = route.params as { todos: Todo[] }
  const completedTasks = todos.filter((todo) => todo.checked)

  // console.log("todods from completed",todos)

  return (
    <View style={styles.container}>
      {
        completedTasks.length > 0 ? (
          <>
            <View style={styles.flexBox}>
              <TouchableOpacity onPress={() => navigation.navigate("TodoTask")}>
                <Image source={require('../../assets/backBtnIcon.png')} style={styles.image} />
              </TouchableOpacity>
              <Text style={styles.titlefont}>Completed Task</Text>
            </View>
            <FlatList
              data={completedTasks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.taskWrapper}>
                  <Text style={styles.font}><Image source={require('../../assets/checkIcon.png')} style={styles.checkIcon} /> {item.task}</Text>
                </View>
              )}
            />
          </>
        ) : (
          <>
            <View style={styles.flexBox}>
              <TouchableOpacity onPress={() => navigation.navigate("TodoTask")}>
                <Image source={require('../../assets/backBtnIcon.png')} style={styles.image} />
              </TouchableOpacity>
              <Text style={styles.titlefont}>Completed Tasks</Text>
            </View>
            <Text style={styles.noTaskFont}>No Completed task</Text>
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
  checkIcon: {
    width: 15,
    height: 15,
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
    fontFamily: "serif"
  },
  noTaskFont: {
    color: "white",
    fontSize: 20,
    fontFamily: "serif",
    textAlign: "center",
    paddingVertical: 200,
  }
})

export default CompletedTask