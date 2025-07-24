import { View, Text, StyleSheet, ImageBackground, Platform, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import InputElem from '../Components/InputElem'
import { TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import Toast from 'react-native-toast-message';
import { createUserWithEmailAndPassword, getAuth } from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';



type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
const SignUpScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const [errorMsg, setErrorMsg] = useState("");



  const emailFormat = /^.+@.+\..+$/;
  // const passwordFormat = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

  const handleEmail = ((text: string) => { 
    setEmail(text.trim()) 
    setError('')
    setErrorMsg('')
  })

  const handlePassword = ((text: string) => { 
    setPassword(text.trim())
    setError('')
    setErrorMsg('')
   })

  const handleConfirmPassword = ((text: string) => { 
    setConfirmPassword(text.trim()) 
    setError('')
    setErrorMsg('')
  })

  const validateSignUp = () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
       Toast.show({
        type: 'error',
        text1: 'All fields are required',
      });
      return false;
    } else if(!emailFormat.test(email)) {
      setError("email")
      setErrorMsg("Invalid Email Format!")
      return false
    } else if (password.length < 6) {
      setError("password")
      setErrorMsg("Password must have atleast six characters!")
      return false
    } else if (password !== confirmPassword) {
      setError("confirm password")
      setErrorMsg("Passwords didn't match")
      return false
    }
  return true
  }


  const handleSignUp = () => {
    const isValid = validateSignUp()
    if(!isValid) {
      return;
    }
    setLoading(true)
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        navigation.navigate('Login')
        Toast.show({
          type: "success",
          text1: "User Registered"
        })
      })
      .catch(error => {
        let message = "Something went wrong"
        if (error.code === 'auth/email-already-in-use') {
          message = 'Email already taken'
        }

        Toast.show({
          type: 'error',
          text1: message,
        })

        console.log(error)
      })
      .finally(() => { setLoading(false) })
  }

  return (
    <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/loginBg.jpg')} style={styles.backgroundWrapper}>
          <Text style={styles.heading}>Create Account</Text>
        </ImageBackground>
        <View style={styles.formWrapper}>
          <InputElem text="Email" placeholder='Enter Your Email' onChangeText={handleEmail} iconName='email' iconColor="#ac116eff" error={error} name={"email"} errorMsg={errorMsg} color="red"/>

          <InputElem text="Password" placeholder='Enter Your Password' onChangeText={handlePassword} iconName='lock' iconColor="#ac116eff" error={error} name="password" errorMsg={errorMsg} color="red"/>

          <InputElem text="Confirm Password" placeholder='Confirm Your Password' onChangeText={handleConfirmPassword} iconName='lock' iconColor="#ac116eff" error={error} name="confirm password" errorMsg={errorMsg} color="red"/>
          <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={{ color: "white" }}>Sign Up</Text>
            )}
          </TouchableOpacity>

          <View style={styles.flexBox}>
            <Text style={styles.position}>Already Have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textDecorate}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground source={require('../../assets/loginBg.jpg')} style={styles.footer}>
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  button: {
    backgroundColor: "#900157ff",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 15,
  },
  flexBox: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",


  },
  textDecorate: {
    color: "#900157ff",
    textDecorationLine: "underline",

  },
  position: {
    marginLeft: 23,

  },
  backgroundWrapper: {
    // backgroundColor: "#b56d69ff",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    flex: 2,
    marginTop: -32,
    elevation: 2,
    // borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 43,
    // borderBottomLeftRadius: 43,
    backgroundColor: "white",
    marginBottom: -40,
    paddingHorizontal: 5,
    paddingVertical: 30,
    zIndex: 2,

  },
  heading: {
    fontFamily: "serif",
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#b56d69ff",
    flex: 3,
    zIndex: 1,
  },
  error: {
    color: "red",
    fontFamily: "serif",
    fontSize: 10,
    marginLeft: 22,
    marginRight: 15,

  }


})

export default SignUpScreen