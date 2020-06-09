import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Welcome(props) {
  const { navigation } = props

const character = {
  room: 'roomTestJeet',
  roomtwo: 'Noroom'
}
//var room = 'newtest';
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TuitOl</Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Jitsi', {item: character})}>
        <Text style={styles.buttonText}>Join Without Login</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#eaecf0",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});

export default Welcome
