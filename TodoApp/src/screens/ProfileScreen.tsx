import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { getAuth } from '@react-native-firebase/auth'
import { TouchableOpacity } from 'react-native'
// import { useAppSelector } from '../store/Hooks'
// import { RootState } from '../store/store'
import { Todo } from '../types/todos'
import { getTodosFromFirebase, getUserProfileData } from '../utils/fireStore'
import { DrawerNavigationProps } from '../types/navigation'
import { useFocusEffect } from '@react-navigation/native'

const ProfileScreen = ({ navigation }: DrawerNavigationProps<'Profile'>) => {
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const totalTask = todos.length
  const completedTask = todos.filter((todo) => todo.checked)
  const totalCompletedTask = completedTask.length
  const remainingTask = todos.filter((todo) => !todo.checked)
  const totalRemainingTask = remainingTask.length


  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await getTodosFromFirebase()
        if (data)
          console.log(data)
        setTodos(data)
      } catch (error) {
        console.error('Failed to load todos', error)
      }
    }

    loadTodos()
  }, [])


  useFocusEffect(
    useCallback(() => {
      const loadProfile = async () => {
        try {
          const profileData = await getUserProfileData()
          if (profileData) {
            setNickname(profileData.nickname || 'add nickname')
            setPhone(profileData.phone || 'add num')
          }
        } catch (error) {
          console.error('Failed to load user profile', error);
        }
      }

      loadProfile()
    }, [])
  )

  // useEffect(() => {
  //   const loadProfile = async () => {
  //     try {
  //       const profileData = await getUserProfileData()
  //       if (profileData) {
  //         setNickname(profileData.nickname || 'lily')
  //         setPhone(profileData.phone || '5555555555')
  //       }
  //     } catch (error) {
  //       console.error('Failed to load user profile', error);
  //     }
  //   };

  //   loadProfile()
  // }, [])



  // const { todos } = useAppSelector((state: RootState) => state.todo)



  useEffect(() => {
    const user = getAuth().currentUser
    if (user && user.email) {
      const nameOnly = user.email.split('@')[0]
      setName(nameOnly)
      setEmail(user.email)
    }

  }, [])

  const handleEdit = () => {
    navigation.navigate('EditProfileScreen', { nickname, phone })

  }
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleEdit}>
          <Text style={styles.btn}>Edit Details</Text>
        </TouchableOpacity>
        <Icon name='person-circle-outline' color='white' size={55} />
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.detailText}><Text>Nickname:</Text>{nickname}</Text>
        <Text style={styles.detailText}><Text>PhoneNum:</Text>{phone}</Text>

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
  btn: {
    color: "white",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 5,

  },
  profileContainer: {
    flex: 3,
    backgroundColor: "#900157ff",
    alignItems: "center",
    paddingTop:6,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,

  },
  detailContainer: {
    flex: 5,
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
    marginRight: 15,
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

  },
  detailText: {
    fontSize: 15,
    color: "white",

  }

})
export default ProfileScreen