import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground, ScrollView } from 'react-native';
import React, { useState, useMemo, useContext } from 'react';


import AppImages from '../assets/common/AppImages';
import Constants from '../assets/common/Constants';
import AppStyle from '../assets/common/AppStyle';
import Feather from 'react-native-vector-icons/Feather';


const Login = ({ navigation }) => {
  const [checked, setChecked] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const forgotPassword = async () => {

 Alert.alert('Success');

  }

  const validateEmail = (email) => {
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError(null);
    return true;
  }

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }
    setPasswordError(null);
    return true;
  }



  const SignInCall = async () => {

    console.log(email)
    navigation.navigate('Home');

  }




  return (


      <View style={{flex:1, width:'100%', backgroundColor:'black',
      justifyContent:'center', alignContent:'center', alignItems:'center', padding:20, paddingTop:200}}>

      <ScrollView style={styles.overlay}>

        <View style={styles.action}>

          <TextInput
            placeholder="Email"
            value={email}
            placeholderTextColor="#9E9E9E"
            style={[styles.textInput]}
            autoCapitalize="none"
            onChangeText={(val) => setEmail(val)}
            maxLength={30}
            // secureTextEntry={data.secureTextEntry ? true : false}
            returnKeyType="next"
            onSubmitEditing={() => { Password1.focus(); }}
            blurOnSubmit={false}
          />



        </View>
        {emailError && <Text style={{ color: 'red' }}>{emailError}</Text>}

        {/* {data.isValidPassword ? null :
                                <View>
                                    <Text style={styles.errormsg}>Password must be 8 characters long.</Text>
                                </View>
                            } */}

        <View style={{
          flexDirection: 'row', alignItems: 'center', backgroundColor: '#1F222A',
          borderRadius: 5, marginTop: 15, justifyContent: 'space-between',
          paddingRight: 10,
          paddingVertical: 2
        }}>
          <TextInput
            placeholder="Password"
            value={password}
            placeholderTextColor="#9E9E9E"
            maxLength={30}
            style={[AppStyle.textInput]}
            secureTextEntry={!passwordVisible}
            autoCapitalize="none"
            // secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => setPassword(val)}
            ref={(input) => { Password1 = input; }}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={{
            backgroundColor: '#1F222A',
            borderRadius: 5, paddingright: 10,
          }}>
            {passwordVisible ?
              <Feather
                name="eye"
                color="grey"
                size={20}
              />
              :
              <Feather
                name="eye-off"
                color="grey"
                size={20}
              />
            }
          </TouchableOpacity>

        </View>

        {passwordError && <Text style={{ color: 'red' }}>{passwordError}</Text>}


        <TouchableOpacity style={styles.linkButton}        
         onPress={()=>navigation.navigate('MyTabs')}

        >
          <Text style={styles.linkButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => forgotPassword()}><Text style={styles.linkText}>  Forgot password? </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.checkText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
              <Text style={styles.linkText}> Sign Up </Text>
            </TouchableOpacity>
          </View>
        </View>
     
                </ScrollView >
        </View >


    )
}

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // flexDirection: 'column',
    width: null,
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
    paddingBottom: 10
  },
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  logoContainer: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    lineHeight: 26,
    marginVertical: 5,
    alignSelf: 'center'
  },
  logInText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 22,
    marginVertical: 5
  },

  logo: {
    width: 250,
    height: 170,
    marginVertical: 20,
    alignSelf: 'center'
  },
  action: {
    backgroundColor: 'black',
    marginTop: 15
  },
  textInput: {
    color: 'white',
    fontSize: 14,
    backgroundColor: '#1F222A',
    borderRadius: 5,
    paddingLeft: 10,

  },

  linkButton: {
    backgroundColor: '#ED1C24',
    marginTop: 20,
    borderRadius: 25,
    padding: 12
  },
  linkButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  checkText: {
    color: 'white',
    fontSize: 13,
    // marginTop: 10,
  },
  linkText: {
    color: '#ED1C24',
    fontSize: 13,
    marginVertical: 15,
  },
  // checkbox: {
  //     alignSelf: "center",
  //     marginRight: 8,
  //     backgroundColor: 'transparent',
  //     alignItems: 'center'
  // },
});