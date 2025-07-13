import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomInput from '../Components/CustomInput'
import ButtonText from '../Components/ButtonText'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'


type Props=NativeStackScreenProps<RootStackParamList,'SignUp'>

const SignUpScreen = ({navigation}:Props) => {
   const [email,setEmail]=useState("")
   const  [password,setPassword]=useState("")
   const [confirmPw,setConfirmPw]=useState("")
   const [details,setDetails]=useState("")


   const handleEmail=(text:string)=>(setEmail(text))

   const handlePassword=(text:string)=>(setPassword(text))

   const handleConfirmPw=(text:string)=>(setConfirmPw(text))

   const handleDetails=()=>{
    setDetails(`email:${email} password :${password} confirmPw:${confirmPw}`)
    console.log("sign up btn pressed")
   }
   console.log(details)
  return (

    <ImageBackground source={require('../../assets/signupbg2.png')} style={styles.background}>
      <Text style={styles.font} >Sign Up</Text>

      <View>
        <CustomInput placeholder="Enter email"
          icon={require('../../assets/email.png')}  onChangeText={handleEmail} value={email}/>
        <CustomInput placeholder="Enter password"
          icon={require('../../assets/key.png')} onChangeText={handlePassword} value={password}/>
        <CustomInput placeholder="Confirm your password"
          icon={require('../../assets/key.png')}  onChangeText={handleConfirmPw} value={confirmPw}/>

        <ButtonText label="Sign Up" onPress={handleDetails}/>
        <View style={styles.login}>
          <Text  >Already have account?
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.textDecorate}>Login</Text>
          </TouchableOpacity>
        </View>



      </View>
    </ImageBackground>



  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,

  },
  font: {
    fontSize: 30,
    textAlign: "center",
    color: "#800000",
    marginTop: 20,
    marginLeft: 20,
  },
  welcomeFont: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 20,
  },
  btnBackground: {
    backgroundColor: "white",
    color: "white"
  },
  login: {
    marginTop: 20,
    marginLeft: 25,
    display: "flex",
    flexDirection:"row",
    gap: 4
  },
  textDecorate:{
   textDecorationLine:"underline",color:"#800000",

  }


})

export default SignUpScreen