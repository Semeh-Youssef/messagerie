import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, BackHandler} from 'react-native';
import firebase from 'firebase';


export default function Chat({route}){
    const [message , setMessage] = useState('');
    const messageRef = userRef();


    console.log(route.params.emetter);
const transmiter = route.params.emetter;
const recepter = route.params.receiver;


const handleSubmit = () => {
    
}
return(
    <View style={StyleSheet.contenaier}>
        <View style={StyleSheet.top}> 
        <Text>emetteur: {transmiter}</Text>
        <Text>recepteur: {recepter}</Text>
       
        </View>
            <TextInput
          style={StyleSheet.input}
           placeholder="votre message"/>
            ref={messageRef}
            onChangeTEXT={E => setMessage(e)}
           <TouchableOpacity style={styles.button} onPress={handleSubmit}>

               <Text>send</Text>
           </TouchableOpacity>
        
        
        
        <Text>chat</Text>
        
    </View>
)

}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      width: "100%",
    },
    top:{
      flex: 22,
      width: "100%"
    },
    bottom:{
      flex: 3,
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    input:{
      height: 50,
      width: "100%",
      borderWidth:1,
      paddingLeft: 10
    },
    button:{
      height: 30,
      width: "20%",
      backgroundColor: "orange",
      borderRadius: 10,
      marginTop: 5,
      justifyContent: "center",
      alignItems: "center"
    }
  })