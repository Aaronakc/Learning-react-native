import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import InputElem from '../Components/InputElem'
import { StyleSheet } from 'react-native'
import { saveUserProfile } from '../utils/fireStore'
import { RootStackScreenProps } from '../types/navigation'
import Loader from '../Components/Loader'

const EditProfileScreen = ({ route, navigation }: RootStackScreenProps<'EditProfileScreen'>) => {
  const { nickname: initialNickname, phone: initialPhone } = route.params ?? {}

  const [nickname, setNickname] = useState(initialNickname || '')
  const [phone, setPhone] = useState(initialPhone || '')
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)
    try {
      await saveUserProfile(nickname, phone)
      Alert.alert('Success', 'Profile updated successfully')
      navigation.goBack()
    } catch (error) {
      Alert.alert('Error', 'Failed to save profile')
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <View style={{ padding: 20 }}>
      <InputElem text="Nickname" input={nickname} onChangeText={setNickname} />
      <InputElem text="Phone" input={phone} onChangeText={setPhone} />
      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20
  },
  text: {
    color: "white",
    paddingVertical: 10,
    textAlign: "center",
  }
})

export default EditProfileScreen
