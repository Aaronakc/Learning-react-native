import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import RootStack from './src/navigation/RootStack';
import { PersistGate } from 'redux-persist/integration/react';

import Toast from 'react-native-toast-message';
import { toastConfig } from './src/config/toastConfig';


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
