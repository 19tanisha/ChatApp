import React, { useState, useLayoutEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Button, Input } from "react-native-elements";
import {auth } from '../Firebase'
import Login from './Login';
const Signup = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

useLayoutEffect(()=>{
    navigation.setOptions({
        headerBackTitle:'Back'
    });
},[navigation])

  const register = () => {
      auth.createUserWithEmailAndPassword(email,password)
      .then((authUser)=>{
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://fgcucdn.fgcu.edu/_resources/images/faculty-staff-male-avatar-200x200.jpg",
        });

      }).catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <ImageBackground 
        blurRadius={0.5}
        mode='cover'
        style={styles.img}
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVM0fmg6JSYT5hp8LINE9iSbiKW3olxv7vcg&usqp=CAU"}}>
      
      <TextInput
      style={styles.input}
        placeholder="Name:"
        type="name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
      style={styles.input}
        placeholder="Email:"
        type="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
      style={styles.input}
        placeholder="Password:"
        secureTextEntry
        type="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
      style={styles.input}
        placeholder="ImageUrl (optional):"
        type="imageUrl"
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
        onSubmitEditing={register}
      />
      <TouchableOpacity  onPress={register}>
          <View style={styles.button}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>
              SignIn
            </Text>
          </View>
        </TouchableOpacity>
    
      </ImageBackground>
      
    </KeyboardAvoidingView>
  );
};

export default  Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width:"100%",
    height:"100%",
    alignItems:'center',
    justifyContent:'center',
},
input:{
  backgroundColor: "white",
  height: 45,
  width: "80%",
  borderRadius: 20,
  paddingLeft: 10,
  color: "black",
  fontSize: 15,
  borderWidth: 2,
  borderColor: "black",
  borderBottomWidth: 4,
  margin: 5,
},
button: {
  backgroundColor: "#81b214",
  height: 35,
  width: 90,
  alignItems: "center",
  justifyContent: "center",
  margin: 8,
  borderRadius: 20,
  borderWidth: 2,
  borderColor: "black",
  borderBottomWidth: 4,
},
});
