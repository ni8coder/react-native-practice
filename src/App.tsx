/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import UserProfile from './UserProfile';
import CounterClass from './components/CounterClass';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <CounterClass />
    </SafeAreaView>
  );
}

export default App;
