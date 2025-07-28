import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import RootStack from './src/navigation/RootStack';
import { PersistGate } from 'redux-persist/integration/react';
  import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/config/toastConfig';
import firestore from '@react-native-firebase/firestore';


export default function App() {

useEffect(()=>{
  GoogleSignin.configure({
    webClientId: '273941533530-sf0hfm9iuufafqojb7e1qhregbki74hq.apps.googleusercontent.com',
  });

},[])


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
        <Toast config={toastConfig} position='bottom' />
      </PersistGate>
    </Provider>
  );
}
