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

export default class Login extends Component {
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
			userEmail:'',
			userPassword:''
		}
	}
  // Jeet Block
  //const character = {
  //  room: 'roomTestJeet',
  //  roomtwo: 'Noroom'
  //}

  	login = () =>{
      const { navigation } = this.props;
      //const that = this;
  		const {userEmail,userPassword} = this.state;
      let reg = /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-+]+)*(\+[A-Za-z0-9-]+)?\u0040[A-Za-z0-9-.]+(\.[A-Za-z0-9]+)$/ ;
      //let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  		if(userEmail==""){
  			alert("Please enter Email address");
  		  this.setState({email:'Please enter Email address'})

  		}

  		else if(reg.test(userEmail) === false)
  		{
  		alert("Email is Not Correct");
  		this.setState({email:'Email is Not Correct'})
  		return false;
  		  }

  		else if(userPassword == ''){
        alert("Please enter password");
      this.setState({email:'Please enter password'})
  		}
  		else{
        const formData = new FormData()
        formData.append('email', userEmail);
        formData.append('password', userPassword);

  		fetch('https://tuitol.com/Android/Api.php?apicall=login',{
  			method:'post',
  			header:{
  				'Accept': 'application/json',
          'Content-type': 'multipart/form-data'
  				//'Content-type': 'application/json'
  			},
        body: formData
  			/*body:JSON.stringify({
  				// we will pass our input data to server
  				email: userEmail,
  				password: userPassword
  			})*/

  		})
  		.then((response) => response.json())
  		 .then((responseJson)=>{
        // let data = responseJson;
        //let error = responseJson.find(obj => obj.error === "false");
        //Jeet Checking Block
        global.sess = responseJson.SignupId;
        //console.log(check);
         console.log(sess);
         //console.log(data);
// Jeet Checking Block End
      //   console.log(data[1]);
  			 if(responseJson.error == false){
  				 // redirect to profile page

  				 alert("Successfully Login");

           navigation.navigate('Detail', {item: sess});
           //Actions.SignIn()
  				 //that.props.navigation.push("SignIn");
           console.log("passing");
  			 }else{
  				 alert("Username or password incorrect");
  			 }
  		 }
     )
  		 .catch((error)=>{
  		 console.error(error);
  		 });
  		}


  		Keyboard.dismiss();
  	}
/// End Jeet Block
  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>TuitOl</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={userEmail => this.setState({userEmail})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={userPassword => this.setState({userPassword})}/>
        </View>
        <TouchableOpacity
        onPress={() => {alert("Please Contact your Administrator")}}>
          <Text style={styles.forgot}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={this.login}
        //onPress={() => {this.login navigation.navigate('JitsiLogin')}}
        style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {navigation.navigate('JoinWithoutLogin')}}>
          <Text style={styles.loginText}>Join Without Login</Text>
        </TouchableOpacity>


      </View>
    );
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
