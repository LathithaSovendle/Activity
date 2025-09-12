
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, SafeAreaView, Animated} from 'react-native';
// you can open another line
import { useState, useRef, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton } from 'react-native-paper';
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
  }}>

{props.children}
</Animated.View>
);
};
//isEmpy function
//any to get rid of a red line
function isEmpty(value : any) {
  return(
    //null or undefined
    (value == null) ||
    //has length and its's zero
    (value.hasOwnProperty('length') && value.length === 0) ||
    //is an object and has no keys
    (value.constructor === Object && Object.keys(value).length === 0)
  )
};
//any means i dont want to see a red line, because the navigation is javascript, and we work on typescript file
function MainScreen({navigation}:any)
 {
  const[Name, setName] = useState('');
  const[Surname, setSurname] = useState('');
  //we want to decalre our if statements
  const [Error, setError] = useState('');
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
    <Text style ={styles.welcomeText}>Welcome my react App!</Text>
    <FadeInView>
      <Text style = {styles.red}>
        {Error}
      </Text>
    <View style={styles.InputFlex}>

    <Text style ={styles.HeadingText}>Enter Name:</Text>
    <TextInput style ={styles.InputBoxs}
     placeholder ="First Name"
     onChangeText = {newText => setName(newText)}
     />
</View>
    <Text style = {styles.HeadingText }>Enter Surname:</Text>
    <TextInput style= {styles.InputBoxs}
     placeholder="Surname"
    onChangeText = {newText => setSurname(newText)}
   />
<Button title ="Add user"
 onPress ={()=>{
  if ((isEmpty(Name) == false) && (isEmpty(Surname)==false))
  {
    /*call the navigator, i want to go to screen two*/

    navigation.navigate('ViewDetails', {
      NameSend : Name,
      SurnameSend : Surname });
      console.log("Name: " + Name +
                  "Surname: " + Surname);
                  setError("");
  }
else
{
  setError("Please add all the field");
}
  /*(inside return you use this comment)This is the code that send data to another screen*/
  navigation.navigate('ViewDetails', {NameSend : Name, SurnameSend: Surname});
  console.log("The user name is:" +Name +"Surname: " + Surname)
  //if it is empty doesn't mean it is empty, if it is not empty means it is empty
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
  const [selectedValue, setSelectedValue] = useState ('0');
  const [ImageBlock, setImage] = useState(source = (''));
  /*return have everything that appears on the scree, everything that is not going to appear on the screen is outside return*/
  return(
    <View style ={{flex:1, alignItems:'center', backgroundColor:'#E3ECED', justifyContent:'center'}}>
      <View style = {{ flex: 0, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:34, fontWeight:"bold", color:'blue'}}>Welcome {NameGet} {SurnameGet}
        </Text> 
        <Text style = {{fontSize: 24, color: 'green'}}> Please select what is your favourite programming language:</Text>  
        <Button title= "Process"
        onPress={() => {
          
          switch (selectedValue)
          {
            case "1":
              setImage(require('./img/react.png'));
              break;
              case"2":
              setImage(require('./img/kotlin.png'));
              break;
              case"3":
              setImage(require('./img/html.png'));
              break;
              default:
                setImage((''));
          }
        }}/>
        <View style = {styles.container}>
          <Image source ={ImageBlock} style={styles.ViewImage}>
          </Image>
        </View>
    </View>

    <View style = {StyleSheet.RadioContainer}>
      <View style = {StyleSheet.radioGroup}>
        
        <View style ={styles.radioButton}>
          <RadioButton.Android
          value="1"
          status={selectedValue=='1' ?
            'checked' : 'unchecked'}
            onPress={() => setSelectedValue('1')}
            color="#007BFF"
            />
            <Text style = {styles.radioLabel}>
              Reaxt Native
            </Text>
        </View>

        <View style={styles.radioButton}>
           <RadioButton.Android
           value="2"
           status={selectedValue == '2' ?
               'checked' : 'unchecked'}
               onPress = {() => setSelectedValue ('2')}
               color="#007BFF"
               />

               <Text style={styles.radioLabel}>
                Kotlin
               </Text>
               </View>
               <View style = {styles.radioButton}>
                <RadioButton.Android
                value="3"
                status={selectedValue == '3' ?
                  'checked' : 'unchecked'}
                  onPress = { ()=> setSelectedValue ('3')}
                  color="#007bff"
                  />
                  <Text style = {styles.radioLabel}>
                    HTML and CSS
                  </Text>
        </View>
      </View>
  </View>
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
    textAlign: 'center'
  },
  ImageSize: {
    width: 350,
    height: 350
  },
maiPicture:{
paddingTop: 40,
backgroundColor:'#E3ECED',
justifyContent:'center', 
alignItems: 'center'
},
InputFlex:{
  backgroundColor:'#D2E5E9',
 
  flexDirection:'row',
  marginTop:30
},
InputBoxs: {
  backgroundColor:'#D2E5E9',
  fontSize: 23 
},
HeadingText: {
fontSize:32
},
red:{
color:'red',
fontWeight:'bold',
fontSize:26,
textAlign: 'center'
},
RadioButton : {
  flex: 0,
  backgroundColor: '#F5F5FE',
  justifyContent: 'center',
  alignItems:'center',
},
radioGroup:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-around',
  marginTop: 20,
  borderRadius: 8,
  backgroundColor: 'white',
  padding: 16,
  elevation: 14,
  shadowOffset: {
    width: 0,
    height:2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  },
radioButton :{
flexDirection:'row',
alignItems: 'center',
},
radioLabel: {
  marginLeft: 8,
  fontSize: 16,
  color:'#333',
},
ViewImage:{
  width: 350,
  height:350,
  alignContent:'center'
}
});












































































































