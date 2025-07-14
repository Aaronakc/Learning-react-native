/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import {StyleSheet, View } from 'react-native';

import UiScreen from './src/screens/UiScreen';
import FlightScreen from './src/screens/FlightScreen';
import PlumbingUi from './src/screens/PlumbingUi';

function App() {


  return (
    <View style={styles.container}>
      {/* <UiScreen/> */}
      {/* <FlightScreen/> */}
      <PlumbingUi/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
