import { View, Text, StyleSheet, ImageBackground, Platform, KeyboardAvoidingView } from 'react-native'
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

  const handleEmail = ((text: string) => setEmail(text))
  const handlePassword = ((text: string) => setPassword(text))
  const handleConfirmPassword = ((text: string) => setConfirmPassword(text))

  const handleSignUp = () => {

    if (!email || !password || !confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'All fields are required',
      });
      return;
    }
    if (password != confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Password did not Matched",
      })
      return;
    }
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
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
        else if (error.code === 'auth/invalid-email') {
          message = "Invalid email format"
        }
        else if (error.code === 'auth/weak-password') {
          message = 'Password should be atleast 6 characters'
        }

        Toast.show({
          type: 'error',
          text1: message,
        })

        console.log(error)
      })
  }

  return (
    <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.backgroundWrapper}>
          <Text style={styles.heading}>Create Account</Text>
        </View>
        <View style={styles.formWrapper}>
          <InputElem text="Email" placeholder='Enter Your Email' onChangeText={handleEmail} iconName='email' />
          <InputElem text="Password" placeholder='Enter Your Password' onChangeText={handlePassword} iconName='lock' />
          <InputElem text="Confirm Password" placeholder='Confirm Your Password' onChangeText={handleConfirmPassword} iconName='lock' />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={{ color: "white" }}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.flexBox}>
            <Text style={styles.position}>Already Have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textDecorate}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
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
    gap: 5,

  },
  textDecorate: {
    color: "#b56d69ff",
    textDecorationLine: "underline",

  },
  position: {
    marginLeft: 23,

  },
  backgroundWrapper: {
    backgroundColor: "#b56d69ff",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    flex: 4,
    marginTop: -32,
    elevation: 2,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 43,
    borderBottomLeftRadius: 43,
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
    fontWeight:"bold",
  },
  footer: {
    backgroundColor: "#b56d69ff",
    flex: 3,
    zIndex: 1,
  }

})

export default SignUpScreen