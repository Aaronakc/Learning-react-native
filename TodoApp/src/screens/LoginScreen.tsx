import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import InputElem from '../Components/InputElem'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'
import Toast from 'react-native-toast-message'
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth'
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = ((text: string) => setEmail(text))
  const handlePassword = ((text: string) => setPassword(text))


  const handleLogin = () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: "All field are required"

      })
      return;
    }
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        navigation.navigate('HomeScreen')
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: error.message || 'Invalid email or password',
        });
        console.log(error)
      })



  }



  return (
    <View style={{ flex: 1 }}>
      <InputElem text="Email" placeholder='Enter Your Email' onChangeText={handleEmail} />
      <InputElem text="Password" placeholder='Enter Your Password' onChangeText={handlePassword} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>
      <View style={styles.flexBox}>
        <Text style={styles.position}>Do not  Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.textDecorate}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#b56d69ff",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 15,

  },
  flexBox: {
    flexDirection: "row",
    gap: 5
  },
  textDecorate: {
    color: "#b56d69ff",
    textDecorationLine: "underline",

  },
  position: {
    marginLeft: 22,

  }

})

export default LoginScreen