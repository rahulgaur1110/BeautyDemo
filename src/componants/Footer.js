import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Footer = ({navigation}) => {
    return (

        <ImageBackground
            style={{
                height: 80,
                width: '100%',
            }}
            resizeMode="contain"
            source={require('../assets/Images/waves2.png')}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', opacity: 0.8 }}>
                <View>
                    <TouchableOpacity>
                        <View style={styles.tab_icon}>
                            <Foundation name="home" color={'#b9bfff'} size={42}
                            />
                            <Text style={{ color: '#b9bfff', fontWeight: 'bold' }}>Home</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => 
                navigation.navigate('Search')}>
                        <View style={styles.tab_icon}>
                            <Feather name="file-text" color={'#000'} size={40}
                            />
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>Orders</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View >
                
                <TouchableOpacity>
                    {/* <View style={{
                        backgroundColor:'#b9bfff', }}> */}
                            <LinearGradient colors={['#b9bfff', '#af69ee']} start={{x: 0.5, y: 0.3}} end={{x: 0.8, y: 1}} style={{width:75, paddingVertical: 8, marginTop:-18,
                        alignItems:'center', borderRadius:35, marginBottom:12, marginLeft:25, paddingHorizontal:7, }}>
                    <AntDesign name="shoppingcart" color={'#000'} size={38}
                        
                    />
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Cart</Text>
                    </LinearGradient>
                    </TouchableOpacity></View>
                {/* </View> */}
                {/* </ImageBackground> */}
                <View>
                    <TouchableOpacity>
                        <View style={styles.tab_icon}>
                            <MaterialIcons name="favorite-border" color={'#000'} size={40}
                            />
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>Favorites</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={styles.tab_icon}>
                            <MaterialCommunityIcons name="account-outline" color={'#000'} size={40}
                            />
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Footer

const styles = StyleSheet.create({
    tab_icon: {
        paddingHorizontal: 7,
        paddingVertical:10,
        alignItems: 'center'
    },
})