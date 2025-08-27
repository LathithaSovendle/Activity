
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, SafeAreaView, Animated} from 'react-native';
// you can open another line
import { useState, useRef, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  // acroll view is inside the safe area view
return(
 <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name ="Home" component={MainScreen}/>
<Stack.Screen name ="ViewDetails" component={ViewDetails}/>
</Stack.Navigator>
</NavigationContainer>
);
};
//Animation Component
const FadeInView = (props:any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim, { 
      toValue: 1,
      duration: 3000,
      useNativeDriver: false
    }
  ).start();
},[fadeAnim]);
//return means everything inside this, will appear on the screen
return(
  <Animated.View
  style={{
    ...props.style,
    opacity: fadeAnim,
  }}
>
{props.children}
</Animated.View>
);
};

//any means i dont want to see a red line, because the navigation is javascript, and we work on typescript file
function MainScreen({navigation}:any)
 {
  const[Name, setName] = useState('');
  const[Surname, setSurname] = useState('');

  console.log("App starting up now.")
  //Outside return you use this for commenting
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
<View style ={styles.maiPicture}>
    <Image style ={styles.ImageSize}
    source ={require('./img/welcome_to_react.png')}/>
</View>
<FadeInView>
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
  /*(inside return you use this comment)This is the code that send data to another screen*/
  navigation.navigate('ViewDetails', {NameSend : Name, 
    SurnameSend: Surname});
  console.log("The user name is:" +Name +"Surname: " + Surname)
 }}/>
 </FadeInView>
 </ScrollView>
 </SafeAreaView>
    </View>
  );
}
/*route passes the information, the information cannot pass without variable route*/
/*any means i dont want to see a red line, because the navigation is javascript, and we work on typescript file*/
function ViewDetails({navigation, route} :any) {

  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend

  /*return have everything that appears on the scree, everything that is not going to appear on the screen is outside return*/
  return(
    <View style ={{flex:1, alignItems:'center', backgroundColor:'#E3ECED', justifyContent:'center'}}>
      <Text style={{fontSize:34, color:'blue'}}>
        Name:{NameGet} Surname:{SurnameGet}</Text>
        
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












































































































