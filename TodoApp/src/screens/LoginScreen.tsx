import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import InputElem from '../Components/InputElem'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'
import Toast from 'react-native-toast-message'
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SigninWithApps from '../Components/SigninWithApps'
import { onFacebookButtonPress } from '../utils/FacebookSignin'


type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/



  const handleEmail = ((text: string) => {
    setEmail(text.trim())
    setError('')
    setErrorMsg('')
  })

  const handlePassword = ((text: string) => setPassword(text.trim()))

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Toast.show({
        type: 'error',
        text1: "All field are required"
      })
      return
    }
    if (!emailFormat.test(email)) {
      setError('email')
      setErrorMsg('Invalid Email Format')
      return
    }


    setLoading(true)
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        navigation.navigate('HomeScreen')
        Toast.show({
          type: "success",
          text1: "Successfully Logged in!"

        })
      })
      .catch(error => {
        console.log(error.code)
        let message = "Something went wrong"
        if (error.code === 'auth/invalid-credential') {
          message = 'Incorrect email or password'
        }


        Toast.show({
          type: 'error',
          text1: message,
        })

        console.log(error)
      })
      .finally(() => setLoading(false))
  }

  const handleFacebookSignIn = async () => {
    try {
      await onFacebookButtonPress();
      console.log('Signed in with Facebook');
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log("Facebook login error:", error);
      Toast.show({
        type: 'error',
        text1: 'Facebook login failed',

      });
    }
  };


  return (
    <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }} enableOnAndroid={true} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../../assets/loginBg.jpg')} style={{ flex: 1 }}>
          <View style={styles.formWrapper}>
            <Text style={styles.heading}>Login</Text>
            <InputElem text="Email" placeholder='Enter Your Email' onChangeText={handleEmail} color="white" iconName='email' error={error} errorMsg={errorMsg} name="email" labelColor='white' />
            <InputElem text="Password" placeholder='Enter Your Password' onChangeText={handlePassword} color="white" iconName='lock' labelColor='white' />
            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={{ color: "white" }}>Login</Text>
              )}
            </TouchableOpacity>
            <SigninWithApps text="Signin with Facebook" color="white" onPress={handleFacebookSignIn} icon={require('../../assets/facebooklogo.webp')} />
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
    backgroundColor: "rgba(227, 9, 140, 0.62)",
    marginHorizontal: 21,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 15,
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
    color: "orange",
    fontFamily: "serif",
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
  },
  errorText: {
    fontSize: 10,
    color: "white",
    marginLeft: 25,

  }

})

export default LoginScreen