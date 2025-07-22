import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/person2.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>user@example.com</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
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
