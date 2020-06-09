import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TouchableOpacity,TextInput,Button,Keyboard
} from 'react-native';
import { StackNavigator,
  useNavigation,
  NavigationActions,
} from '@react-navigation/native';



export default class SignIn extends Component {
	static navigationOptions= ({navigation}) =>({
		  title: 'Login',
		  headerRight:
		  <TouchableOpacity
			onPress={() => navigation.navigate('Login_beauty')}
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

	login = () =>{
		const {userEmail,userPassword} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(userEmail==""){
			//alert("Please enter Email address");
		  this.setState({email:'Please enter Email address'})

		}

		else if(reg.test(userEmail) === false)
		{
		//alert("Email is Not Correct");
		this.setState({email:'Email is Not Correct'})
		return false;
		  }

		else if(userPassword==""){
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
      var data = responseJson.SignupId;
       console.log(responseJson.error);
       console.log(data);

    //   console.log(data[1]);
			 if(responseJson.error == false){
				 // redirect to profile page
				 alert("Successfully Login");
				 this.props.navigation.navigate("App");
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

  render() {
    return (
	<View style={styles.container}>
	<Text style={{padding:10,margin:10,color:'red'}}>{this.state.email}</Text>

	<TextInput
	placeholder="Enter Email"
	style={{width:200, margin:10}}
	onChangeText={userEmail => this.setState({userEmail})}
	/>

	<TextInput
	placeholder="Enter Password"
	style={{width:200, margin:10}}
	onChangeText={userPassword => this.setState({userPassword})}

	/>


	<TouchableOpacity
	onPress={this.login}
	style={{width:200,padding:10,backgroundColor:'magenta',alignItems:'center'}}>
	<Text style={{color:'white'}}>Login</Text>
	</TouchableOpacity>


     </View>

   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('SignIn', () => SignIn);
