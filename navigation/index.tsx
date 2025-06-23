import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

import Home from '../screens/Home';
import UserDetails from '../screens/UserDetails';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      onPress={() => navigation.goBack()}
      style={{
        padding: 10,
        marginRight: 8
      }}
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="UserDetails" 
        component={UserDetails}
        options={{
          headerTitle: 'User Details',
          headerLeft: () => <HeaderLeft />,
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
