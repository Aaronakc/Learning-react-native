import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ViewBase } from 'react-native'
import InputText from '../Components/InputText'
import ButtonText from '../Components/ButtonText'
import TitleText from '../Components/TitleText'
import WelcomeText from '../Components/WelcomeText'
import RememberUser from '../Components/RememberUser'
import GoogleSignin from '../Components/GoogleSignin'
import Footer from '../Components/Footer'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}:Props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [detail, setDetail] = useState("")
  const [remember, setRemember] = useState(false)

  const handleRemember = () => {
    setRemember(!remember)
  }


  const handleEmail = (text: string) => setEmail(text)



  const handlePassword = (text: string) => setPassword(text)




  const handleDetail = () => {
    setDetail(`Email:${email} Password:${password}`)
    console.log("btn pressed")
    navigation.navigate('TodoTask')
  }
  console.log(detail)

  return (
    <View>
      <TitleText />
      <WelcomeText />
      <InputText label="Email address" onChangeText={handleEmail} value={email} fontFamily='serif' />
      <InputText label="Password" onChangeText={handlePassword} value={password} fontFamily='serif' />
      <RememberUser onPress={handleRemember} remember={remember} />
      <ButtonText onPress={handleDetail} label='Sign in' />
      <GoogleSignin />
      <View style={styles.textWrapper}>
        <Text style={styles.textDesg}>Don't have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.textDecorate}>Sign Up</Text>
        </TouchableOpacity>


      </View>
      <Footer />

    </View>

  )
}

const styles = StyleSheet.create({
  textWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
    gap: 3

  },
  textDesg: {
    marginLeft: 25,
    fontFamily: "serif"

  },
  textDecorate: {
    textDecorationLine: "underline",
    color: "#ffcc00",
    fontFamily: "serif"

  }
})

export default LoginScreen