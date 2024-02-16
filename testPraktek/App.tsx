import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigations from './src/Screen/Navigations';
import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.sectionContainer}>
        <Navigations />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
