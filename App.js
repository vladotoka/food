import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import ResutsShowScreen from './src/screens/ResutsShowScreen';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Business Search' }} />
      <Stack.Screen name="ResultsShow" component={ResutsShowScreen} options={ ({route}) => ({ title: route.params?.screenTitle })} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
