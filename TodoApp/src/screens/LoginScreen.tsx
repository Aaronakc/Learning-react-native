import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import InputElem from '../Components/InputElem'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'
import Toast from 'react-native-toast-message'
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
    <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../../assets/loginBg.jpg')} style={{ flex: 1 }}>
          <View style={styles.formWrapper}>
            <Text style={styles.heading}>Login</Text>
            <InputElem text="Email" placeholder='Enter Your Email' onChangeText={handleEmail} color="white" iconName='email' />
            <InputElem text="Password" placeholder='Enter Your Password' onChangeText={handlePassword} color="white" iconName='lock' />
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
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    // backgroundColor: "#df8c88ff",
    backgroundColor: "rgba(227, 9, 140, 0.62)",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 15,

  },
  formWrapper: {
    marginTop: 120,

  },
  flexBox: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    marginTop: 10,
  },
  textDecorate: {
    // color: "#dfd4dcff",
    color:"orange",
    fontFamily:"serif",
    textDecorationLine: "underline",

  },
  position: {
    marginLeft: 22,
    color: "white",

  },
  heading: {
    color: "white",
    fontFamily: "serif",
    textAlign: "center",
    fontSize: 50,
  }

})

export default LoginScreen