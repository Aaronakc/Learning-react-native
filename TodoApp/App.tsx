import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
// import { persistor, store } from './src/store/store';
import RootStack from './src/navigation/RootStack';
// import { PersistGate } from 'redux-persist/integration/react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/config/toastConfig';
// import firestore from '@react-native-firebase/firestore';
import { Alert, PermissionsAndroid, Platform, Text } from 'react-native';
import messaging from '@react-native-firebase/messaging'


export default function App() {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '273941533530-sf0hfm9iuufafqojb7e1qhregbki74hq.apps.googleusercontent.com',
    });

  }, [])

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
        )
      }
      await messaging().registerDeviceForRemoteMessages()
      const token = await messaging().getToken()
      console.log("token", token)
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Toast.show({type:"success",text1:remoteMessage.notification?.body,text2:remoteMessage.notification?.title})
      })

      return unsubscribe
    })()
  }, [])


  return (
    // <Provider store={store}>
    //  <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <RootStack />
      <Toast config={toastConfig} position='bottom' />
    </NavigationContainer>
    //  </PersistGate> 
    // </Provider>
  );
}
