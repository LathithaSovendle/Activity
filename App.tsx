
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


function MainScreen({navigation})
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
    <TextInput style= {styles.InputBoxs} placeholder="Surname"></TextInput>


     
  
<Button title ="Add user"
 onPress ={()=>{
  navigation.navigate('ViewDetails');
  console.log("The user name is:" +Name +"Surname: " + Surname)
 }}/>

    </View>

  );
}

function ViewDetails() {
  return(
    <View style ={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Name: ### Surname:####</Text>
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












































































































