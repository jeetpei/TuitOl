import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TouchableOpacity,TextInput,Button,Keyboard
} from 'react-native';
import { StackNavigator,
  useNavigation
} from '@react-navigation/native';
import {Actions} from 'react-native-router-flux';

export default class JoinWithoutLogin extends Component {
  static navigationOptions = ({navigation}) =>({
		  title: 'Login',
		  headerRight:
		  <TouchableOpacity
			onPress={() => navigation.navigate('SignIn')}
			style={{margin:10,backgroundColor:'orange',padding:10}}>
			<Text style={{color:'#ffffff'}}>Home</Text>
		  </TouchableOpacity>

	});
	constructor(props){
		super(props)
		this.state={
			sessId:''
		}
	}
  //const { navigation } = props
  session = () =>{
    const { navigation } = this.props;
    const that = this;
    const sessId = this.state;
    if(sessId==""){
      alert("Please enter session ID");
      this.setState({sess: 'Please enter Session ID'})

    }

    else
    {
    navigation.navigate('JitsiLogin', {item: sessId});
  }
  }
  render(){
    const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TuitOl</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Session Id..."
          placeholderTextColor="#003f5c"
          onChangeText={sessId => this.setState({sessId})}/>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={this.session}>
        <Text style={styles.buttonText}>Join Without Login</Text>
      </TouchableOpacity>
    </View>
  )
}

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
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"blue"
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
//export default JoinWithoutLogin;
