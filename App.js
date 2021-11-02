import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./vues/Register";
import Users from "./vues/Users";
import Login from "./vues/Login";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [screen, setScreen] = useState(null);

  const returnLoginScreen = () => {
    return <Login updateScreen={setScreen}/>
  }

  if (screen === null) {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login">
            {returnLoginScreen}
          </Tab.Screen>
          <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return <Users user={screen}/>;
  }
}
 

const styles = StyleSheet.create({
  container:{
    width: "100%",
    flex: 1,
    backgroundColor: '#E2D98F',
    alignItems: "center",
    justifyContent: "center",
  },
  input:{
    width: "95%",
    height: 50,
    borderWidth:1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
  },
  button:{
    height: 50,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 10,
    backgroundColor: "orange"
  }
})



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe2jkn0mPeD4TwgwPEmbrkvV_QDaZQuD8",
  authDomain: "messagerie-ab549.firebaseapp.com",
  projectId: "messagerie-ab549",
  storageBucket: "messagerie-ab549.appspot.com",
  messagingSenderId: "413268847526",
  appId: "1:413268847526:web:38a5355106215882533d67"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
