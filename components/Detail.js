import React, { Component, useEffect } from 'react';
import Login from './Login';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';

export default class Detail extends Component {

  static navigationOptions = ({navigation}) =>({
      title: 'Login',
      headerRight:
      <TouchableOpacity
      onPress={() => navigation.navigate('SignIn')}
      style={{margin:10,backgroundColor:'orange',padding:10}}>
      <Text style={{color:'#ffffff'}}>Home</Text>
      </TouchableOpacity>

  });
  /*function Detail(props) {
  const { route, navigation } = props;
  const { item } = route.params;
  const { sessId } = item;
  var roomone = item.sessId;
  console.log('sessId');*/
  constructor(props)
  {


    super(props);
    this.state = {
    isLoading: true

  }
}

  componentDidMount() {

    const { route, navigation } = this.props;
    const { item } = route.params;
    const { sess } = item;
    console.log(sess);
    const formData = new FormData()
    formData.append('sess', global.sess);
return fetch('https://tuitol.com/Android/NewAPP.php',{
       method:'post',
       header:{
             'Accept': 'application/json',
             'Content-type': 'multipart/form-data'
             //'Content-type': 'application/json'
       },
       body: formData
     })
     .then((response) => response.json())
     .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson,
             //sessId: responseJson.SessionRequestID
           }, function() {
             console.log(responseJson);
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
     getSessId = () => {
       const { route, navigation } = props;
       const { item } = route.params;
       const { sessId } = item;
       var roomone = item.sessId;
     }

FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetFlatListItem (StartTime, RequestStartDate) {
    Alert.alert("Session on:" + RequestStartDate + " Start on:" + StartTime);
    //const { navigation } = this.props;
    //const that = this;
    //const { sessId } = this.state;
    //var sessId = SessionRequestID;
    //navigation.navigate('JitsiLogin', {item: sessId});


  }
  ListEmpty = () => {
    return (
      //View to show when list is empty
      <View style={styles.MainContainer}>
        <Text style={styles.FlatListItemStyle}>No Upcoming Session Is availabe</Text>
      </View>
    );
  };


  render() {
  const { navigation } = this.props;
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20,}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (

<View style={styles.MainContainer}>

       <FlatList

          data={ this.state.dataSource }

          ItemSeparatorComponent = {this.FlatListItemSeparator}

          renderItem={({item}) => <Text style={styles.FlatListItemStyle}  onPress={() => {this.props.navigation.navigate('JitsiLogin', {item: item.SessionRequestID})}} > Session ID : {item.SessionRequestID} Subject : {item.SubjectName} By {item.Name} on {item.RequestStartDate} at {item.StartTime}</Text>}
          //renderItem={({item}) => <Text style={styles.FlatListItemStyle}  onPress={this.GetFlatListItem.bind(this, item.StartTime, item.RequestStartDate)} > Session ID : {item.SessionRequestID} Subject : {item.SubjectName}</Text>}

          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={this.ListEmpty}
          //extraData={this.props.navigation.navigate('JitsiLogin', {item: item.SessionRequestID})}
         />


</View>

    );
  }
}

const styles = StyleSheet.create({

MainContainer :{
backgroundColor: '#003f5c',
justifyContent: 'center',
flex:1,
//margin: 10,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,

},

FlatListItemStyle: {
    textAlign: 'center',
    //padding: 10,
    fontSize: 18,
    color:"#eaecf0",
    height: 44,
  },

});
