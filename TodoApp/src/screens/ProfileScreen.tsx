import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { getAuth } from '@react-native-firebase/auth'
import { TouchableOpacity } from 'react-native'
import { useAppSelector } from '../store/Hooks'
import RootStack from '../navigation/RootStack'
import { RootState } from '../store/store'

const ProfileScreen = () => {
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const { todos } = useAppSelector((state: RootState) => state.todo)
  const totalTask=todos.length
  const completedTask=todos.filter((todo)=>todo.checked)
  const totalCompletedTask=completedTask.length
  const remainingTask=todos.filter((todo)=>!todo.checked)
  const totalRemainingTask=remainingTask.length



  useEffect(() => {
    const user = getAuth().currentUser
    if (user && user.email) {
      const nameOnly = user.email.split('@')[0]
      setName(nameOnly)
      setEmail(user.email)
    }

  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Icon name='person-circle-outline' color='white' size={55} />
        <Text style={styles.text}>{name}</Text>

        <Text style={styles.text}>{email}</Text>

      </View>
      <View style={styles.detailContainer}>

        <View style={styles.flexBox}>
          <View style={styles.flexCol}>
            <View style={styles.center}>
              <MaterialIcon name="work" color="#900157ff" size={35} />
            </View>
            <View>
              <Text style={styles.font}>Total Overall</Text>
              <Text style={styles.alignText}>Task</Text>

            </View>
            <View style={styles.center}>
              <Text style={styles.taskFont}>{totalTask}</Text>
            </View>
          </View>

          <View style={styles.flexCol}>
            <View style={styles.center}>
              <MaterialIcon name="task" color="#900157ff" size={35} />
            </View>
            <View>
              <Text style={styles.font}>Completed</Text>
              <Text style={styles.alignText}>Task</Text>

            </View>
            <View style={styles.center}>
              <Text style={styles.taskFont}>{totalCompletedTask}</Text>
            </View>

          </View>

          <View style={styles.flexCol}>
            <View style={styles.center}>
              <MaterialIcon name="hourglass-bottom" color="#900157ff" size={35} />
            </View>
            <View>
              <Text style={styles.font}>Remaining</Text>
              <Text style={styles.alignText}>Task</Text>

            </View>
            <View style={styles.center}>
              <Text style={styles.taskFont}>{totalRemainingTask}</Text>
            </View>

          </View>

        </View>


      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 2,
    backgroundColor: "#900157ff",
    alignItems: "center",
    justifyContent: "center",

  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,

  },
  detailContainer: {
    flex: 4,
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: -22,

  },
  text: {
    fontFamily: "white",
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
  },
  flexBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    gap: 50,
    marginLeft: 15,
    marginRight:15,
  },
  font: {
    fontFamily: "serif",
    fontSize: 15,
    fontWeight: 900,
  },
  alignText: {
    fontFamily: "serif",
    fontSize: 15,
    textAlign: "center",
    fontWeight: 900,
  },
  flexCol: {
    flexDirection: "column",
    gap: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",

  },
  taskFont: {
    fontFamily: "serif",
    fontWeight: 900,
    fontSize: 20,
  }

})
export default ProfileScreen