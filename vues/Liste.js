import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from 'firebase';



export default function Liste({route, navigation}){
    const [users, setUsers] = useState([]);
    const user1= route.params.itemId

    useEffect(() => {
     // console.log(route);
      getUserListe();
    },[])
  
    const getUserListe = () => {
      const db = firebase.firestore();
      db.collection("users").get()
      .then((querySnapshot) => {
        const userstab = Array();
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          //userstab.push(doc.data());
          const user ={
              id: doc.id,
              data: doc.data(),
          }
          
          userstab.push(user);
        });
        const newuserstab= userstab.filter(item => item.id != user1);
        console.log(newuserstab) 
        setUsers(newuserstab);
      });
    }
    return(
        <View style={styles.container}>
      <Text style={styles.text}>Users list</Text>
      {/* {
        avec la méthode map au moment de définir la fonction flechée si on utilise des acolades après la flêche il faut mettre un return
        si on utilise des parenthèses on ne met pas le return 
        users.map((user) => {
          return(
            <Text>{user.name}</Text>
          )
        })
      } */}
      {
        users.map((user) => (
          <TouchableOpacity key={user.id} style={styles.user}
          onPress={()=> navigation.navigate("Chat", {emetter:user1, receiver:user.id})}>
          <Text style={styles.text}>{user.data.name}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
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