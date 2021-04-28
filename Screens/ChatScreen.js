import React, { useState, useLayoutEffect }  from 'react'
import { TouchableOpacity } from 'react-native';

import { Touchable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Avatar} from 'react-native-elements/dist/avatar/Avatar'
import {AntDesign,SimpleLineIcons, FontAwesome, Ionicons} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { db,auth} from '../Firebase';
import * as firebase from 'firebase'
const ChatScreen = ({navigation, route}) => {
const [input,setInput] = useState("")
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chat',
            headerStyle: {backgroundColor:'dodgerblue'},
            headerTintColor:"white",
            headerTitleAlign:'left',
            headerBackTitleVisible:false,
            headerTitle:()=>(
                <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                }}>
                    <Avatar 
                        rounded
                        size={40}
                        source={{ 
                            uri:
                                "https://st2.depositphotos.com/2703645/5669/v/600/depositphotos_56695433-stock-illustration-female-avatar.jpg"}}
                        
                    />
                    <Text style={{color:'white',fontSize:18,marginLeft:10, fontWeight:'700'}}>
                        {route.params.chatName}
                    </Text>
                    
                </View>   
            ),
            headerLeft:()=>(
                <TouchableOpacity activeOpacity={0.5} style={{marginLeft:15}}
                onPress={navigation.goBack}>
                    <AntDesign
                    name='leftcircle'
                    color='white'
                    size={25}/>
                </TouchableOpacity>
            ),
            headerRight:()=>(
                <View style={{flexDirection:'row', width:90,alignItems:'center',paddingRight:15, justifyContent:'space-between'}}>
                <TouchableOpacity activeOpacity={0.5}>
                    <FontAwesome name='video-camera' size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Ionicons name="call" size={24} color='white'/>
            </TouchableOpacity>
            </View>
            )
        });
    },[navigation]);
    /*const sendMessage=()=>{
        Keyboard.dismiss();
        db.collection('chats').docs(route.params.id).collection('messages').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email:auth.currentUser.email,
            photoURL:auth.currentuser.photoURL,
        })  
        
        setInput('')
    };*/

    const sendMessage = () => {
        Keyboard.dismiss();
    
        db.collection("chats").doc(route.params.id).collection("messages").add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          message: input,
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          photoURL: auth.currentUser.photoURL,
        });
    
        setInput("");
      };
   
return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <>
        <ScrollView>{/* chats */}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            placeholder="Enter message"
            value={input}
            style={styles.inmsg}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
            <Ionicons name="send" size={26} color="dodgerblue" />
          </TouchableOpacity>
        </View>
        </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 15,
  },
  inmsg: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    color: "black",
    borderRadius: 30,
    backgroundColor: "#edeef7",
  },
});
