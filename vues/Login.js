import React, { useState , useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

export default function Login({updateScreen}){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const  emailRef = useRef();
    const  passwordRef =useRef();

    const handelSubmit = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
   updateScreen(email)
  })
  .catch((error) => {
    //var errorCode = error.code;
  
    var errorMessage = error.message;
    console.log(errorMessage);
  });
    }

    return(
        <View  style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={e => setEmail(e)}
            ref={emailRef}
            />

            <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={e => setPassword(e)}
            ref={passwordRef}
            />
            
            <TouchableOpacity style={styles.button} onPress={handelSubmit}>
            <Text style={styles.text}>Connexion</Text>
            </TouchableOpacity>

        </View>

    )
}

    const styles = StyleSheet.create({
        container: {
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        input:{
          height: 50,
          width: "95%",
          borderWidth: 1,
          borderRadius: 10,
          paddingLeft: 10,
          marginTop: 10,
        },
        button:{
          width: "95%",
          height: 50,
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginTop: 10
        },
        text:{
          fontSize: 25
        }
      })

