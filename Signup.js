import React, { Component } from 'react';
import {KeyboardAvoidingView, Image, TouchableOpacity, Text, TextInput} from 'react-native'
import firebase from "@react-native-firebase/app"
import auth from '@react-native-firebase/auth'
import ValidationComponent from 'react-native-form-validator';

export default class Login extends React.Component {
  constructor(props){
    super(props);
  state={
    email:"",
    newPassword:"",
    confirmPassword:"",
    myArray:[]
  }}
  onPressButton() {
    // Call ValidationComponent validate method
    this.validate({
      email: {email: true},
      confirmPassword : {equalPassword : this.state.newPassword}
    });
  }

  userSignup(email, pass){
    firebase.auth().createUserWithEmailAndPassword(email, pass);

    var userId = auth().currentUser.uid;

    const users = database().ref('Users/' + userId)
    users.set({
      email,
      pass
    })
    users.on("value",datasnap=>{
      console.log(datasnap.val())
     // alert(JSON.stringify(datasnap.val()));
     if(datasnap.val() !== null){

       this.setState({myArray:Object.values(datasnap.val()) })
     } else {
       this.setState({myArray:[]})
     }
     
    })
            this.props.navigation.navigate("Login")
  
  }
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
            ref="newPassword" 
            onChangeText={(newPassword)=>this.setState({newPassword:text})}
            value={this.state.newPassword}
            />
            <TextInput
            style={styles.inputBox}   
            placeholder ="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            ref="confirmPassword" 
 onChangeText={(confirmPassword) => this.setState({confirmPassword})} value={this.state.confirmPassword} 
            />
            {this.isFieldInError('confirmPassword') && this.getErrorsInField('confirmPassword').map(errorMessage => <Text style = {color="red"}>{errorMessage}</Text> )}


            <TouchableOpacity 
            style={styles.signupbutton}
            
            onPress =  {() => {this.props.naviagtion.navigate('Login')
            this.validate({email:true, confirmPassword : {equalPassword : this.state.newPassword} })} }>
            
            <Text style = {styles.signupbuttonText}>Signup</Text>
            </TouchableOpacity>

           
           
           
            <Text>Already have an Account?</Text>

            <TouchableOpacity
            onPress =  {()=>this.userSignup(this.state.email, this.state.newPassword)}>
                <Text style = {styles.loginText}>Login</Text>
            </TouchableOpacity>

            <Text>
            {this.getErrorMessages()}
          </Text>
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
    stretch: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
      },
    inputBox: {
        width:300,
        height:50,
        backgroundColor:'rgba(212, 212, 219, 0.5)',
        borderRadius:25,
        paddingHorizontal:20,
        fontSize:20,
        color:'#ffffff',
        marginVertical: 12
      },
      signupbutton: {
        width:300,
        height:50,
        backgroundColor:'#3fb56b',
         borderRadius: 25,
          marginVertical: 15,
          paddingVertical: 13,
          justifyContent:'center'
      },
      signupbuttonText: {
        fontSize:20,
        fontWeight:'500',
        color:'white',
        textAlign:'center'
      },
      text: {
        fontSize:20,
        color: '#A9A9A9'
      },
      loginText:{
        fontSize:20,
        fontWeight:'500',
        color:'#3fb56b',
        textAlign:'center'
      }
  });