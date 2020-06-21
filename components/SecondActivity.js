class SecondActivity extends Component
{
 static navigationOptions =
 {
    title: 'SecondActivity',
 };

 constructor(props) {

       super(props)

       this.state={

        IdHolder : '',
        NameHolder : '',
        SemesterHolder : '',
        DepartmentHolder : '',
        PhoneNumberHolder : ''

       }

     }

 componentDidMount(){

    fetch('https://tuitol.com/Android/NewApp.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          // Getting the id.
          id: this.props.navigation.state.params.ListViewClickItemHolder

        })

      }).then((response) => response.json())
            .then((responseJson) => {

              this.setState({

                IdHolder : responseJson[0].id,
                NameHolder : responseJson[0].name,
                SemesterHolder : responseJson[0].semester,
                DepartmentHolder : responseJson[0].department,
                PhoneNumberHolder : responseJson[0].phone_number

              })

            }).catch((error) => {
              console.error(error);
            });

 }

 render()
 {
    return(
       <View style = { styles.MainContainer }>

        <View style={{flex:1, flexDirection: 'column'}} >

         <Text style={styles.textViewContainer} > {'id = ' + this.state.IdHolder} </Text>

         <Text style={styles.textViewContainer} > {'Name = ' + this.state.NameHolder} </Text>

         <Text style={styles.textViewContainer} > {'Department = ' + this.state.DepartmentHolder} </Text>

         <Text style={styles.textViewContainer} > {'Semester = ' + this.state.SemesterHolder} </Text>

         <Text style={styles.textViewContainer} > {'Phone Number = ' + this.state.PhoneNumberHolder} </Text>

        </View>

      </View>
    );
 }
}
