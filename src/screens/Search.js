import { ScrollView, StyleSheet, TouchableOpacity, ImageBackground, Text, View, Image, FlatList, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStyle from '../assets/common/AppStyle';
import AppImages from '../assets/common/AppImages';
import AppColor from '../assets/common/AppColors';
import Constants from '../assets/common/Constants';
import { List } from '../assets/common/List';

const Search = ({ navigation }) => {
    const [search, setSearch] = useState([]);
    const [topTrendData, setTopTrendData] = useState([]);

    const [filteredDataSource, setFilteredDataSource] = useState(List);
    const [myData, setMyData] = useState(List);
    const [profileImage, setProfileImage] = useState('');

   

   

    const handleSearch = (value) => {
        if (!value.length) return setSearch(List);

        const filterData = List.filter((item) =>
            item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );

        if(filterData.length){
            setSearch(filterData);
        } else {
            setSearch(List);
        }
    }

    

 
   
    const showTrends = ({ item, index }) => {
        return (
            <View style={styles.catScroller}>
          <TouchableOpacity>
            <Image style={styles.topMoviesImage} source={item.image} />
            
          </TouchableOpacity>
        </View>
        );
    };
    const topMovies = ({ item }) => {
        return (
          <View style={styles.catScroller}>
            <TouchableOpacity>
              <Image style={styles.topMoviesImage} source={item.image} />
              
            </TouchableOpacity>
          </View>
        );
      };
    
    return (
        <ImageBackground style={[styles.mainContainer]}
            resizeMode="stretch"
            source={AppImages.background}>
            <View style={styles.overlay}>
                <View style={styles.header}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start', alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={AppImages.Back} style={{ marginBottom: 7 }} />
                        </TouchableOpacity>
                        <Text style={[AppStyle.subHeading, { paddingLeft: 10 }]}>Search</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        {profileImage &&
                            <Image style={[AppStyle.displayPic, { borderRadius: 25 }]} source={{ uri: profileImage }} />
                        }
                    </TouchableOpacity>
                </View>
                <ScrollView >

                    <View style={styles.filterBox}>
                        <View style={styles.searchBox}>
                            <Image source={AppImages.SearchGrey} style={styles.ImageStyle} />
                            <TextInput
                                placeholder="Search"
                                placeholderTextColor="#767676"
                                // backgroundColor="#111111"
                                value={search}
                                onChangeText={(value) => handleSearch(value)}
                                style={[styles.textInput]}
                                autoCapitalize="none" />
                              
                        </View>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                            <Ionicons name="filter" color={AppColor.primaryColor} size={20} />
                        </TouchableOpacity> */}
                    </View>
                  
                    <View style={{marginVertical:30, marginHorizontal:10}}>
            <Text style={AppStyle.subHeading}>Top Movies</Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={myData}
          renderItem={topMovies}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        </View>
                   
                </ScrollView>

                {/* <View style={[AppStyle.footer, { marginHorizontal: 20 }]}>

                    <Image source={AppImages.HomeBlack} style={AppStyle.footerIcon} />
                    <View style={{ backgroundColor: '#fff', padding: 5, borderRadius: 15 }}>
                        <Image source={AppImages.Search} style={[AppStyle.footerIcon, { width: 15, height: 15 }]} />
                    </View>
                    <Image source={AppImages.Menu} style={AppStyle.footerIcon} />
                    <Image source={AppImages.HotDeals} style={AppStyle.footerIcon} />
                </View> */}
            </View>
        </ImageBackground>
    )
}

export default Search;

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
        paddingTop: 20,
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
    topMoviesImage: {
        width:110,
        height:140,
        borderRadius: 5
    },
    catScroller: {
        marginRight:20,
        justifyContent: 'center',
        alignItems:'center'
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
        // backgroundColor: 'black',
        // borderRadius: 5,
        // paddingLeft: 20,
        // paddingVertical: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    filterBox: {
        backgroundColor: '#111111',
        borderRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10, 
        marginHorizontal:5
    },
    textInput: {
        color: 'white',
        fontSize: 14,
        // backgroundColor: 'black',
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
        width: 100,
        height: 130,
        borderRadius: 5,
        resizeMode: 'cover'
    },
    footer_Icon: {

        borderRadius: 32, padding: 5
    },
})