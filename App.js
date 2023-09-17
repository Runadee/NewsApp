import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import DetailsPage from './screens/DetailsPage';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='HomaPage'
      screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Home"
          component={HomePage}
          
        />
        <Stack.Screen name="Details" component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
