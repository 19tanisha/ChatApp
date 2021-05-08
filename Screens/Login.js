import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View , TouchableOpacity,TextInput,KeyboardAvoidingView,Image, ImageBackground} from 'react-native';
import {Button ,Input} from 'react-native-elements'
import { auth } from "../Firebase";
import Signup from './Signup';
import Home from './Home';
const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
    const unsubscrbe   = auth.onAuthStateChanged((authUser) =>{
      
            if(authUser){
                console.log(authUser);
                navigation.replace('Home')
            }else{
              console.log("No user");
            }
        });
        return unsubscrbe;
    }, [])


    const SignIn =() => {
          auth
          .signInWithEmailAndPassword(email,password)
          .catch(error => alert(error))
    };
    return (
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>
        <ImageBackground 
        blurRadius={0.3}
        mode='cover'
        style={styles.img}
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVM0fmg6JSYT5hp8LINE9iSbiKW3olxv7vcg&usqp=CAU"}}>
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
          onSubmitEditing={SignIn}
        />
        <TouchableOpacity onPress={SignIn}>
          <View style={styles.button}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>
              Login 
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} >
          <View style={styles.button}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>
              Signup
            </Text>
          </View>
        </TouchableOpacity>
        
        </ImageBackground>
      </KeyboardAvoidingView>
    );

}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
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
      borderWidth: 1,
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
})
