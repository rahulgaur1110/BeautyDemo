import { Image, StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, Alert, ImageBackground, ScrollView, Button } from 'react-native';
import React, { useState, useMemo } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AppImages from '../assets/common/AppImages';
import AppStyle from '../assets/common/AppStyle';




const SignUp = ({ navigation }) => {
    const [checked, setChecked] = useState(0);
    const [agree, setagree] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [email, setemail] = useState('');
    // const [countryCode, setCountryCode] = useState(27);
    const [mobile, setmobile] = useState('');
    const [country, setCountry] = useState('');
    // const [country, setCountry] = useState<Country>(null)

    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [cpasswordError, setCPasswordError] = useState(null);
    const [mobileError, setMobileError] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [showModalPicker, setShowModalPicker] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [phoneNubmer, setPhoneNumber] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);


    const signUpCall = async () => {

      console.log(email)
      navigation.navigate('Watchlist');

    }
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    
    const toggleConfirmPasswordVisibility = () => {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    };
    // const togglePasswordVisibility = () => {
    //     setPasswordVisible(!passwordVisible);
    // };
    // const toggleConfirmPasswordVisibility = () => {
    //     setConfirmPasswordVisible(!confirmPasswordVisible);
    // };
    return (


        // <ImageBackground style={[styles.mainContainer]}
        //     resizeMode="stretch"
        //     source={AppImages.background}>
           
                <View style={{ flex: 1, width: '100%', backgroundColor: 'black' }}>

                <ScrollView style={styles.overlay}>
                    <View style={[styles.logoContainer, {height:120}]}>
                       

                    </View>
                    <View style={styles.container}>

                        <View>
                            <Text style={AppStyle.headerText}>Create Your Account</Text>
                        </View>

                        <View>
                            <View style={styles.action}>
                                <TextInput
                                    placeholder="First Name"
                                    placeholderTextColor="#9E9E9E"
                                    value={firstname}
                                    backgroundColor="#000"
                                    style={AppStyle.textInput}
                                    autoCapitalize="none"
                                    require
                                    onChangeText={
                                        (value) => setFirstname(value)
                                    }
                                    // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                                    returnKeyType="next"
                                    onSubmitEditing={() => { lastname1.focus(); }}
                                    blurOnSubmit={false}
                                />

                            </View>

                            <View style={styles.action}>
                                <TextInput
                                    placeholder="Last Name"
                                    value={lastname}
                                    placeholderTextColor="#9E9E9E"
                                    style={AppStyle.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(value) => setLastname(value)}
                                    returnKeyType="next"
                                    onSubmitEditing={() => { email1.focus(); }}
                                    blurOnSubmit={false}
                                    ref={(input) => { lastname1 = input; }}
                                />

                            </View>

                            <View style={styles.action}>
                                <TextInput
                                    placeholder="Email"
                                    value={email}
                                    placeholderTextColor="#9E9E9E"
                                    style={AppStyle.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(value) => setemail(value)}
                                    returnKeyType="next"
                                    onSubmitEditing={() => { country1.focus(); }}
                                    blurOnSubmit={false}
                                    ref={(input) => { email1 = input; }}
                                />

                            </View>
                            {/* {emailError && <Text style={{color: 'red'}}>{emailError}</Text>} */}



                            {mobileError && <Text style={{ color: 'red' }}>{mobileError}</Text>}
                            <View style={styles.action}>
                                <TextInput
                                    placeholder="Your Country"
                                    value={country}
                                    placeholderTextColor="#9E9E9E"
                                    style={AppStyle.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(value) => setCountry(value)}
                                    returnKeyType="next"
                                    // onSubmitEditing={() => { mobile1.focus(); }}
                                    blurOnSubmit={false}
                                    ref={(input) => { country1 = input; }}
                                />



                            </View>
          


                            <View style={{ backgroundColor: '#1F222A', marginTop: 15, borderRadius: 5 }}>
                             

                            </View>
                            <View style={{
                                flexDirection: 'row', alignItems: 'center', backgroundColor: '#1F222A',
                                borderRadius: 5, marginTop: 1, justifyContent: 'space-between',
                                paddingRight: 10,
                                paddingVertical: 2
                            }}>
                                <TextInput
                                    placeholder="Password"
                                    value={password}
                                    placeholderTextColor="#9E9E9E"
                                    style={AppStyle.textInput}
                                    autoCapitalize="none"
                                    secureTextEntry={!passwordVisible}
                                    onChangeText={(value) => setpassword(value)}
                                    returnKeyType="next"
                                    onSubmitEditing={() => { cPassword1.focus(); }}
                                    blurOnSubmit={false}
                                    ref={(input) => { password1 = input; }}
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
                                {/* </View> */}

                            </View>
                            {passwordError && <Text style={{ color: 'red' }}>{passwordError}</Text>}


                            <View style={{
                                flexDirection: 'row', alignItems: 'center', backgroundColor: '#1F222A',
                                borderRadius: 5, marginTop: 15, justifyContent: 'space-between',
                                paddingRight: 10,
                                paddingVertical: 2
                            }}>
                                <TextInput
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    placeholderTextColor="#9E9E9E"
                                    secureTextEntry={!confirmPasswordVisible}
                                    style={AppStyle.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(value) => setconfirmPassword(value)}
                                    ref={(input) => { cPassword1 = input; }}
                                />
                                <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={{
                                    backgroundColor: '#1F222A',
                                    borderRadius: 5, paddingright: 10,
                                }}>
                                    {confirmPasswordVisible ?
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
                            <View style={{ paddingHorizontal: 0 }}>
                                <View style={{ marginTop: 5,  paddingRight: 10, 
                                flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
                                   
{/*                              
                                    <View style={{ alignSelf: 'center', alignItems: 'flex-start', flexDirection: 'row' }}>

                                        <Text style={[AppStyle.text,{}]}>I agree to
                                        </Text>
                                        <TouchableOpacity style={{ paddingTop: 10 }}
                                            onPress={(item) => navigation.navigate('StaticPage', { slug: Config.TermsOfUseSlug })}>
                                            <Text style={{ color: '#ED1C24',}} >  Terms of Usage </Text>
                                        </TouchableOpacity>
                                        <Text style={AppStyle.text}> and </Text>
                                        <TouchableOpacity style={{}}
                                            onPress={(item) => navigation.navigate('StaticPage', { slug: Config.PrivacyPolicySlug })}
                                        ><Text style={{ color: '#ED1C24', paddingTop: 10 }}>  Privacy Policy  </Text>
                                        </TouchableOpacity>

                                    </View> */}

                                </View>
                                {/* <Text style={{ color: AppColors.white,
        fontSize: 13, marginLeft:45,
        }}>
                                            of  WOWtv  Africa.</Text> */}
                            </View>

        
                            <TouchableOpacity style={[AppStyle.linkButton,]}
                                // disabled={!agree}
                                onPress={()=>navigation.navigate('MyTabs')}
                            >
                                <Text style={AppStyle.linkButtonText}>Create Account</Text>
                            </TouchableOpacity>

                            <View style={{ marginTop: 10, alignSelf: 'center', alignItems: 'flex-start', flexDirection: 'row' }}>

                                <Text style={AppStyle.text}>Already have an account?</Text>
                                <TouchableOpacity style={{}} onPress={() => navigation.navigate('Login')}>
                                    <Text style={{ color: '#ED1C24', paddingTop: 10 }} > Sign In </Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </ScrollView>
        </View>


    )
}

export default SignUp;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        resizeMode: 'contain',
        width: '100%'
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginHorizontal: 30,
        paddingBottom: 10
    },
    overlay: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    logoContainer: {
        width: '100%',
        paddingHorizontal: 30,
        paddingVertical: 10,
        // alignItems: 'center',
        // marginBottom:10,
        // backgroundColor: 'black',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    logInText: {
        color: 'white',
        fontSize: 18,
        lineHeight: 22,
        marginVertical: 5
    },


    action: {
        backgroundColor: 'black',
        marginTop: 15
    },

    errormsg: {
        color: 'pink',
        fontSize: 10
    },

    checkbox: {
        alignSelf: "center",
        marginRight: 8,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
});