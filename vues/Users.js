import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Liste from './Liste';
import Chat from './Chat';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function Users({user}){
  
    const returnListScreen = () => {
        return <Liste user={user}/>
    }

  return(
      <NavigationContainer> 
      <Stack.Navigator>
      <Stack.Screen name="Liste" component={Liste} initialParams={{itemId: user}}/>
          {/*{returnListScreen}</Stack.Screen>*/}
      <Stack.Screen name="Chat" component={Chat} /> 
    </Stack.Navigator></NavigationContainer>
   
  )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      width: "100%",
      // justifyContent: "center",
      alignItems: "center",
    },
    user:{
      height: 50,
      width: "95%",
      justifyContent:"center",
      alignItems:"center",
      marginTop: 5,
      backgroundColor: "gray"
    },
    text:{
      fontSize: 25
    }
  })