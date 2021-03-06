import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import AddChat from './Screens/AddChat';
import ChatScreen from './Screens/ChatScreen';

const Stack =createStackNavigator();
export default function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator /*initialRouteName={"Home"}*/ >
        <Stack.Screen name="Login" component={Login}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="Signup" component={Signup}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="Home" component={Home}
        options={{
        headerTitle: () => (

          <Text style={{fontWeight:'bold',fontSize:25,color:'white',textAlign:'center'}}>
            Signal
          </Text>
        ),
        }}

        />
        <Stack.Screen name ="AddChat" component={AddChat}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name ="Chat" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({


});