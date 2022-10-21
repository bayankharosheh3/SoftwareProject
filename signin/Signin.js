import React from 'react';
import{StyleSheet,Button, TextInput, Image,View,Text,TouchableWithoutFeedback,Keyboard,Dimensions,TouchableOpacity}from "react-native";
import login_logo from './../../../assets/images/login_logo.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
function Signin(props) {
  

    return (
     
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
           <View style={styles.container}>

 <View style={styles.container1}>
  <View style={styles.container1_1}>
  <Image source={login_logo} 
   style={styles.logo}/>
  </View>

  <View style={styles.container1_2}>
  <Text style={styles.logintext}>Sign In</Text> 
  <Text style={styles.logindiscreption}>Please enter your credentials</Text>
  </View>

 </View>
 
 <View style={styles.container2}>

 <View style={styles.container2_1}>
       <Text style={styles.credentials}>
       Email</Text> 
 </View>

 <View style={styles.container2_2}>
 <TextInput
           placeholder={'Email'}
          style={styles.input}
        />
 </View>

          <View style={styles.container2_1}>
          <Text style={styles.credentials}>
          Password</Text> 
          </View>

         <View style={styles.container2_2}>
         <TextInput
         placeholder={'Password'}
         secureTextEntry={true}
         style={styles.input}
        />
         </View>
         </View>
        


      <View style={styles.container3}>
      <View style={[{ width: "90%", margin: 10, backgroundColor: "#7BC89C" }]}>
          <Button
            title="Sign in"
            color="#7BC89C"
          />
        </View> 
        <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
        </View> 
       
       
 
       
      </View>
    
      </TouchableWithoutFeedback>
         );
}
const styles = StyleSheet.create({
  
        container: {
         
          height: Dimensions.get('window').height,
          width:'100%',
          alignItems: 'center',
          backgroundColor: '#ecf0f1',
        },
        container1: {
          flex:1,
          width:'100%',
          backgroundColor: '#7BC89C',
        },
        container1_1: {
          flex:2,
          alignItems: 'flex-start', 
          justifyContent:'flex-start', 
          paddingLeft:'5%',
          paddingTop:'15%',
          backgroundColor: '#7BC89C',

        },
        container1_2: {
          flex:1,
          backgroundColor: '#7BC89C',
          paddingLeft:20,
       
        },
        container2: {
          flex:1,
           width:'100%', 
           backgroundColor: '#fff',
         },
         container2_1: {
        
           alignItems: 'flex-start', 
           justifyContent:'flex-start', 
           paddingLeft:'5%',
           paddingTop:'5%',
           paddingBottom:5,
           
         },
         container2_2: {
           width:'100%',
           alignItems: 'center', 
           justifyContent:'center', 
           backgroundColor: '#fff',
           
         },
         container3: {
          flex:1,
          width:'100%',
          alignItems: 'center', 
          justifyContent:'flex-start', 
           backgroundColor: '#fff',
         },

         credentials: {
           color:'#666967',
          fontSize:15,
         },
        input: {
          width: '90%',
          height: 44,
          padding: 10,
          borderWidth: .2,
          borderColor: '#b8dec7',
          marginBottom: 10,
          backgroundColor:'#f7faf9',
        },
        link: {
          fontWeight: 'bold',
          color: '#7BC89C',
        },
        login_button: {
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderColor: '#7BC89C',
          marginBottom: 10,
          backgroundColor:'#7BC89C',
        },
        logintext: {
          color:'white',
          fontSize:30,
        //  fontFamily: 'Arial',
          fontWeight: 'bold',
        },
        logindiscreption: {
          color:'white',
          fontSize:15,
        
        },
        logo: {
          width: 80,
          height: 80,
          
        
        },
        row: {
          flexDirection: 'row',
          marginTop: 4,
        },
    
});


export default Signin;


