import { ScrollView, StyleSheet, ImageBackground, Text, View, Image, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react';
import AppStyle from '../assets/common/AppStyle';
import AppImages from '../assets/common/AppImages';
import AppColor from '../assets/common/AppColors';
import Constants from '../assets/common/Constants';
import { List } from '../assets/common/List';


const Trends = ({navigation}) => {
    const [myData, setMyData] = useState(List);
    const [watchlist, setWatchlist] = useState([]);

    const [profileImage, setProfileImage] = useState('');

      

    const showList = ({ item, index }) => {
        return (
            
            <TouchableOpacity onPress={()=>navigation.navigate('DetailsPage', {videoId: item.id, path:item.videoURL})}
            style={styles.catScroller} key={index}>
              <Image
                source={item.image}
                style={styles.trendThumbnail}
              />
            </TouchableOpacity>
        );
    };
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
                            <Image source={AppImages.Back} style={{marginBottom:6}}/>
                            </TouchableOpacity>
                            <Text style={[AppStyle.subHeading, { paddingLeft: 10 }]}>Hot Trends</Text>
                        </View>
                        {/* <TouchableOpacity  onPress={()=>navigation.navigate('Profile')}>
                        {profileImage &&
                                <Image style={[AppStyle.displayPic, {borderRadius:25}]} source={{ uri: profileImage }} />
                            }
                        </TouchableOpacity> */}
                    </View>
                   
                    <View style={{ marginHorizontal: 15, marginTop:40 }}>
                        <FlatList
                            keyExtractor={(item) => item.id}
                            data={myData}
                            renderItem={showList}
                            numColumns={3}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

        

                </ScrollView>
                <View style={[AppStyle.footer, {marginHorizontal: 20}]}>
        
        <Image source={AppImages.HomeBlack} style={AppStyle.footerIcon}/>
        <Image source={AppImages.Search} style={AppStyle.footerIcon}/>
        <View style={{backgroundColor:'#fff', padding:5, borderRadius:15}}>
            <Image source={AppImages.WatchList} style={[AppStyle.footerIcon, {width:15, height:15}]}/>
            </View>
        <Image source={AppImages.HotDeals} style={AppStyle.footerIcon}/>
      </View>

</View>
        </ImageBackground>
    )
}

export default Trends;

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
        paddingTop:20,
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
        marginRight: 15,
        marginBottom:15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        color: 'white',
        // lineHeight: 28
    },
    catDetails: {
        fontSize: 12,
        color: 'white',
        lineHeight: 28,
    },
    searchBox: {
        backgroundColor: 'black',
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
        backgroundColor: 'black',
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
        width: Constants.screenWidth/3.5,
        // width:150,
       height:175,
        borderRadius: 5
    },
})