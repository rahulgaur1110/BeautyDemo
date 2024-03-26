import { Image, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import React, {useState, useRef, useEffect} from 'react';


import { List } from '../assets/common/List';
import AppStyle from '../assets/common/AppStyle';
import AppImages from '../assets/common/AppImages';
import Constants from '../assets/common/Constants';




const DetailsPage = ({navigation, route}) => {
    console.log('Route',route)


    const [topData, setTopData] = useState(List);
    const [videoData, setVideoData] = useState(route.params.videoId);
    const [videoPath, setVideoPath] = useState(route.params.path);
    console.log(videoPath);
    const playerRef = useRef()

 
    const isCarousel = useRef(null);
    const [fullScreen, setFullScreen] = useState(false);
    
    
    const onReady = React.useCallback(() => {
        const timeToStart = (7 * 60) + 12.6;
        playerRef.current.seekTo(10, 'seconds');
      }, [playerRef.current]);

    presentFullscreenPlayer = () => {
      setFullScreen(true)
      Orientation.lockToLandscape()
    };
  
    dismissFullscreenPlayer = () => {
      setFullScreen(false)
      Orientation.lockToPortrait()
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
        <View style={{ backgroundColor: 'black', }}>
            <StatusBar backgroundColor={'black'}/>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{margin:5,marginTop:25}}>
                        <Image source={AppImages.Back} style={{height:15, width:15}}/>
                        </TouchableOpacity>
                       
               
                   <View style={{backgroundColor: 'black', height:250}} 
                  //  style= {fullScreen ?  styles.fullscreenVideo : styles.video }
                   >
                    {/* <Video 
                    source={{uri: videoPath}}       
      style={{position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,}} controls={true} 
      onFullscreenPlayerWillPresent={presentFullscreenPlayer}
      onFullscreenPlayerDidDismiss={dismissFullscreenPlayer}
      fullscreen = {fullScreen}
      resizeMode="cover"
      seek={40}
      ref={playerRef}
      onReady={onReady}
      /> */}
                    
                     
      
            </View>
            <ScrollView style={{ backgroundColor: 'black', marginTop:30}}>

            <View style={{paddingHorizontal:15 }}>
                <View style={styles.movieHeading}>
                    <View style={{flexDirection:'row',justifyContent: 'flex-start',
        alignItems: 'flex-start', }}>
                    <Image style={{width:Constants.screenWidth/5,height:130}} 
source={require('../assets/Images/TopMovies1.png')}
                    />
                    <View style={styles.headingDetails}>
                        <Text style={styles.title}>The Fury</Text>
                        <Text style={styles.catDetails}>Kids <Text style={{color:'#ED1C24'}}>| </Text>English</Text>
                        <Text style={styles.catDetails}>2022</Text>
 </View>
                    </View>
                    <TouchableOpacity style={styles.watchList}>
                        <Image source={AppImages.MenuAdd} />
                        <Text style={{ color: 'white',  fontSize: 12 }}>Watchlist</Text>
                    </TouchableOpacity>
                </View>
               
         

            <View style={{ paddingTop:15}}>
 <Text style={{color:'white', lineHeight:20}}>
 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
 </Text>
</View>

<View style={{marginTop:30, backgroundColor:'black'}}>
            <Text style={AppStyle.subHeading}>Top Movies</Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={topData}
          renderItem={topMovies}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        </View>
             

           <View style={{height:370}}/>
        </View>
        </ScrollView>
        </View>
    )
}

export default DetailsPage

const styles = StyleSheet.create({
    fullscreenVideo:{
        backgroundColor: 'black',
        ...StyleSheet.absoluteFill,
        elevation: 1,
                
    },
    seconds: {
        fontSize: 12,
        color: 'white'
    },
    movieHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        

    },
    watchList: {
        flexDirection: 'row', width: 90, height: 30, alignItems: 'center',
        backgroundColor: '#ED1C24',

        borderRadius: 25,
        paddingVertical: 2,
        paddingHorizontal: 10
    },
    headingDetails: {
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 18,
        color: 'white',
        
    },
    catDetails: {
        fontSize: 13,
        color: 'white',
        lineHeight: 28
    },
    catScroller: {
        marginRight:20,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'black'
    },
    topMoviesImage: {
        width:110,
        height:140,
        borderRadius: 5
    },
    description: {
        color: 'white',
        fontSize: 12,
        
    },
})