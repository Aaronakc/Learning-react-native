import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import RootStack from './src/navigation/RootStack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import BottomTabs from './src/navigation/BottomTabs';
import RootStack from './src/navigation/RootStack';




export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    </Provider>



  );
}
