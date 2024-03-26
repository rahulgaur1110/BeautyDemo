import { ScrollView, StyleSheet, ImageBackground, Text, View, Image, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

import AppStyle from '../assets/common/AppStyle';
import AppImages from '../assets/common/AppImages';
import AppColor from '../assets/common/AppColors';
import { List } from '../assets/common/List';

const Account = ({navigation}) => {
    const [myData, setMyData] = useState(List);

  
    return (
        <ImageBackground style={[styles.mainContainer]}
            resizeMode="stretch"
            source={AppImages.background}>
            <View style={styles.overlay}>
                <ScrollView >
                    <View style={styles.header}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start', alignItems: 'center'
                        }}>
                            <TouchableOpacity onPress={()=>navigation.goBack()}>
                                <Image source={AppImages.Back} />
                                </TouchableOpacity>
                            <Text style={[AppStyle.subHeading, { paddingLeft: 10 }]}>Account</Text>
                        </View>
                        {/* <Image source={AppImages.DisplayPic} style={AppStyle.displayPic} /> */}
                    </View>
                   
                   <View style={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={AppImages.ProfilePic}  />
                    <TouchableOpacity style={styles.editButton} >
                        <Image source={AppImages.Edit} />
                        <Text style={[styles.text, {paddingBottom:5, textAlignVertical:'center'}]}> Edit</Text>
                        </TouchableOpacity>
                   </View>

                   <View>
                    <TouchableOpacity >
                    <Text style={styles.options}>Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <Text style={styles.options}>Watchlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    // onPress={()=>navigation.navigate('DetailsPage')}
                    >
                    <Text style={styles.options}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    // onPress={()=>navigation.navigate('DetailsPage')}
                    >
                    <Text style={styles.options}>Help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.options}>Sign Out</Text>
                    </TouchableOpacity>
                   </View>

        

                </ScrollView>

</View>
        </ImageBackground>
    )
}

export default Account;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        // height: null,
        width: null,

    },
    overlay: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)'

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: 20
    },
    catScroller: {
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        color: AppColor.white,
        // lineHeight: 28
    },
    catDetails: {
        fontSize: 12,
        color: AppColor.white,
        lineHeight: 28,
    },
    searchBox: {
        backgroundColor: AppColor.black,
        // borderRadius: 5,
        paddingLeft: 20,
        paddingVertical: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    textInput: {
        color: 'black',
        fontSize: 14,
        backgroundColor: AppColor.black,
        borderRadius: 5,
        paddingLeft: 10,
        paddingVertical: 7
    },
    ImageStyle: {

        height: 20,
        width: 20,
        resizeMode: 'contain',
        alignItems: 'center',
    },
    trendThumbnail: {
        width: 124,
        height: 75,
        borderRadius: 5
    },
    editButton: {
        backgroundColor: AppColor.primaryColor,
        borderRadius:20,
        flexDirection: 'row',
        width: 85,
        paddingHorizontal:10,flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 15,
    },
    text: {
        color: AppColor.white,
        fontSize: 13,
        alignItems:'center',
        paddingTop:5
    },
    options: {
        color: '#E0F1FF',
        fontSize: 15,
        lineHeight: 24,
        marginTop: 30,
        marginHorizontal:20
    },
})