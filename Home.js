import React, { Component } from 'react';
import {Text, TouchableOpacity, View} from 'react-native'

export default class Home extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Welcome</Text>

                <TouchableOpacity style={styles.logoutbutton}
                onPress =  {() => {this.props.naviagtion.navigate('Login')} }>
                    <Text style={styles.logoutbuttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoutbutton: {
      width:300,
      height:50,
      backgroundColor:'#3fb56b',
       borderRadius: 25,
        marginVertical: 15,
        paddingVertical: 13,
        justifyContent:'center'
    },
    logoutbuttonText: {
      fontSize:20,
      fontWeight:'500',
      color:'white',
      textAlign:'center'
    }
}
)