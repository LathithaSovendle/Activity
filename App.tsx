
import { StyleSheet, Text, View, TextInput,Button, Image} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
return(
 <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name ="Home" component={MainScreen}/>
<Stack.Screen name ="ViewDetails" component={ViewDetails}/>
</Stack.Navigator>
</NavigationContainer>
);
};
/*any means i dont want to see a red line, because the navigation is javascript, and we work on typescript file*/
function MainScreen({navigation}:any)
 {

  const[Name, setName] = useState('');
  const[Surname, setSurname] = useState('');

  console.log("App starting up now.")
  return (
   
    <View>
<View style ={styles.maiPicture}>
    <Image style ={styles.ImageSize}
    source ={require('./img/welcome_to_react.png')}/>
</View>

    <Text style ={styles.welcomeText}>Welcome my react App!</Text>

    <View style={styles.InputFlex}>
    <Text style ={styles.HeadingText}>Enter Name:</Text>
    <TextInput style ={styles.InputBoxs}
     placeholder ="First Name"
     onChangeText = {newText => setName(newText)}

     />

</View>
    <Text style = {styles.HeadingText}>Enter Surname:</Text>
    <TextInput style= {styles.InputBoxs}
     placeholder="Surname"
    onChangeText = {newText => setSurname(newText)}
   />
  
<Button title ="Add user"
 onPress ={()=>{
  /*This is the code that send data to another screen*/
  navigation.navigate('ViewDetails', {NameSend : Name, 
    SurnameSend: Surname});
  console.log("The user name is:" +Name +"Surname: " + Surname)

 }}/>
    </View>
  );
}

/*route passes the information, the information cannot pass without variable rout*/
/*any means i dont want to see a red line, because the navigation is javascript, and we work on typescript file*/
function ViewDetails({navigation, route} :any) {

  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend

  /*return have everything that appears on the scree, everything that is not going to appear on the screen is outside return*/
  return(
    <View style ={{flex:1, alignItems:'center', backgroundColor:'blue', justifyContent:'center'}}>
      <Text style={{fontSize:34, color:'white'}}>
        Name:{NameGet} Surname:  {SurnameGet}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  welcomeText:{
    backgroundColor:'#E3ECED',
    paddingTop: 40,
    color:'blue',
    fontWeight:'bold',
    fontSize: 48,
    textAlign: 'center',
  },
  ImageSize: {
    width: 350,
    height: 350
  },
maiPicture:{
paddingTop: 40,
backgroundColor:'#E3ECED',
justifyContent:'center',
alignItems: 'center',

},
InputFlex:{
  backgroundColor:'#D2E5E9',
 
  flexDirection:'row',
  marginTop:30,

},
InputBoxs: {
  backgroundColor:'#D2E5E9',
  fontSize: 23,
},
HeadingText: {
fontSize:32
}
});












































































































