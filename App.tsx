
import { StyleSheet, Text, View, TextInput,Button, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<View>
    <Image source ={require('./Activity/assets/welcome_to_react.png')}/>
</View>

    <Text style ={styles.welcomeText}>Welcome your react App!</Text>

    <Text style ={{fontSize:23}}>Enter Name:</Text>
    <TextInput placeholder ="First Name"/>
    <Text style ={{fontSize:23}}>Enter Surname:</Text>
    <TextInput placeholder="Surname"></TextInput>
<Button title ="Add user"></Button>

    </View>
    
  );
}
const styles = StyleSheet.create({
  welcomeText:{
    backgroundColor:'black',
    paddingTop: 40,
    color:'purple',
    fontWeight:'bold',
    fontSize: 38,
    textAlign: 'center',
  }
});












































































































