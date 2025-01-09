import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const Stack = createNativeStackNavigator();

export default function RealEstateApp() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen 
            name="PropertyDetails" 
            component={PropertyDetails} 
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
