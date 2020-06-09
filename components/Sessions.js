import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';

var { height } = Dimensions.get('window');

var box_count = 6;
var box_height = height / box_count;

export default class Sessions extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
            <View style={[styles.box, styles.box4]}></View>
            <View style={[styles.box, styles.box5]}></View>
            <View style={[styles.box, styles.box6]}></View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  },
  box4: {
    backgroundColor: '#2196F3'
  },
  box5: {
    backgroundColor: '#8BC34A'
  },
  box6: {
    backgroundColor: '#e3aa1a'
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
