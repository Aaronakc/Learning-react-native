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
import notifee, { AndroidImportance } from "@notifee/react-native"
import { setupPushNotifications } from './src/utils/setupNotifications';
import { navigationRef } from './src/navigation/RooteNavigation';
import { setupNotificationHandlers } from './src/utils/onPressNotifyHandler';


export default function App() {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '273941533530-sf0hfm9iuufafqojb7e1qhregbki74hq.apps.googleusercontent.com',
    });

  }, [])

useEffect(() => {
  let unsubscribe: (() => void) | undefined;

  const initializeNotifications = async () => {
    unsubscribe = await setupPushNotifications();
  }

  initializeNotifications();

  return () => {
    if (unsubscribe) {
      unsubscribe();
    }
  }
}, [])
  useEffect(() => {
     setupNotificationHandlers()
  }, []);



  return (
    // <Provider store={store}>
    //  <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer ref={navigationRef}>
      <RootStack />
      <Toast config={toastConfig} position='bottom' />
    </NavigationContainer>
    //  </PersistGate> 
    // </Provider>
  );
}
