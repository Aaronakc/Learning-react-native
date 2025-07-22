import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import RootStack from './src/navigation/RootStack';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import RootStack from './src/navigation/RootStack';
import { PersistGate } from 'redux-persist/integration/react';

import Toast, { BaseToast, InfoToast } from 'react-native-toast-message';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const toastConfig = {

  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderBottomColor: 'green',borderBottomWidth:4,borderLeftWidth:0, justifyContent: "center", alignItems: "center",marginTop:8 }}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        fontFamily:"serif"
      }}
      renderLeadingIcon={() => (
        <MaterialIcon name="check-circle" size={24} color="green" />
      )}

    />
  ),
  info: (props: any) => (
    <InfoToast
      {...props}
      style={{ borderBottomColor: 'orange',borderBottomWidth:4,borderLeftColor:0, justifyContent: "center", alignItems: "center",marginTop:8 }}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        fontFamily:"serif"
      }}
      renderLeadingIcon={() => (
        <MaterialIcon name="info" size={24} color="orange" />
      )}

    />
  ),
}


export default function App() {
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
