import React, { Component } from 'react';
import {KeyboardAvoidingView, Image, TouchableOpacity, Text, TextInput} from 'react-native'
import firebase from "@react-native-firebase/app"
import auth from '@react-native-firebase/auth'

export default class Login extends React.Component {
  state={
    email:"",
    password:""
  }
  userLogin(email, pass){
  firebase.auth().signInWithEmailAndPassword(email, pass)
  .then(()=>{
  this.props.navigation.navigate("Login")
  })
  .catch((err)=>{
    alert(JSON.stringify(err.message))
  })}

render(){
    return(
        <KeyboardAvoidingView style = {styles.container}>
            <Image source= {require('')}/>

            <TextInput
            style={styles.inputBox}
            placeholder="Email"
            placeholderTextColor="#ffffff"
            onChangeText={(text)=>this.setState({email:text})}
             />
            
            <TextInput
            style={styles.inputBox}   
            placeholder ="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={(text)=>this.setState({password:text})}
            />

            <TouchableOpacity 
            style={styles.loginbutton}
            onPress={()=>{this.userLogin(this.state.email, this.state.password)}}>
            
            
            
            
            <Text style = {styles.loginbuttonText}>Login</Text>
            </TouchableOpacity>

            <Text>Dont have an Account?</Text>

            <TouchableOpacity
            onPress =  {() => {this.props.naviagtion.navigate('Signup')} }>

                <Text style = {styles.signupText}>Signup</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputBox: {
        width:300,
        height:50,
        backgroundColor:'rgba(212, 212, 219, 0.5)',
        borderRadius:25,
        paddingHorizontal:20,
        fontSize:20,
        color:'#ffffff',
        marginVertical: 15
      },
      loginbutton: {
        width:300,
        height:50,
        backgroundColor:'#3fb56b',
         borderRadius: 25,
          marginVertical: 15,
          paddingVertical: 13,
          justifyContent:'center'
      },
      loginbuttonText: {
        fontSize:20,
        fontWeight:'500',
        color:'white',
        textAlign:'center'
      },
      text: {
        fontSize:20,
        
        color: '#A9A9A9'
      },
      signupText:{
          marginTop: 1,
        fontSize:19,
        fontWeight:'500',
        color:'#3fb56b',
      }
  });