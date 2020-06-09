import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  // Jeet Block

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
/// End Jeet Block
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>TuiTol</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={this.login}
        style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
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
