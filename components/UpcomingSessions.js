import React from 'react';
import { Button, Text, StyleSheet, View, FlatList, Image } from 'react-native';
import { StackNavigator, useNavigation } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ListItem } from "react-native-elements"

export default class UpcomingSessions extends React.Component {
    constructor(props){
      super(props)
      this.state={
        sessId:''
      }

      const { route, navigation } = this.props;
      const { item } = route.params;
      const { sessId } = item;
      console.log(sessId)
    this.state = {
      dataSource: [{key:1, name:'const abc item'}, {key:2, name:'const def item'}],
    };
    this.getRemoteData();
}



  getRemoteData(props) {
    const { route, navigation } = this.props;
    const { item } = route.params;
    const { sessId } = item;
    console.log(sessId)
    var roomone = item.sessId;
    const formData = new FormData()
    formData.append('sess', 430);
    fetch('https://tuitol.com/Android/NewAPP.php',{
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
         console.log(responseJson);
        this.setState({
          data: responseJson
        });

      })
      .catch(error => {
        console.log("get data error from:" + error);
      });
  };

  capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderNativeItem = (item) => {
    const name = this.capFirstLetter(item.SessionRequestID) + ". "
      + this.capFirstLetter(item.Name);
      //+ this.capFirstLetter(item.name.last);
    return <ListItem
            roundAvatar
            title={SessionRequestID}
            subtitle={item.SessionRequestID}
            //avatar={{ uri: item.picture.thumbnail }}
            onPress={() => this.onPressItem(item)}
          />;
  }

  onPressItem = (item) => {
    const email = item.SessionRequestID;
    console.log("onPress with item: " + item.SessionRequestID);
    this.props.navigation.navigate('Detail', {item: item})
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => this.renderNativeItem(item)}
        />
        <Button
          title="Detail"
          onPress={() => this.props.navigation.navigate('Detail', {source: "UpcomingSessions"})}
        />
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    const source = this.props.navigation.state.params.source;
    const item = this.props.navigation.state.params.item;
    let name = "";
    let img = "";
    let email ="";
    if (item != null) {
      name = item.SessionRequestID;
      img = item.Duration;
      email = item.Status;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>name: {name}</Text>
        <Image
          style={{width: 128, height: 128}}
          source={{uri: img}}
        />
        <Text  style={styles.text}>{email}</Text>
        <Button title="Home" onPress={this._goHome} />
      </View>
    );
  }
  _goHome = async () => {
    this.props.navigation.navigate('UpcomingSessions');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  }
});
