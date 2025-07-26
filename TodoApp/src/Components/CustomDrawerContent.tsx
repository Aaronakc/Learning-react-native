import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { getAuth } from '@react-native-firebase/auth';

const CustomDrawerContent = (props: any) => {
  const[email,setEmail]=useState<string>('')

  useEffect(()=>{
    const user=getAuth().currentUser
    if(user && user.email){
      setEmail(user.email)
    }

  },[])
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/person2.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{email}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  profileImage: {
    width: 50,
    height: 60,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomDrawerContent;
