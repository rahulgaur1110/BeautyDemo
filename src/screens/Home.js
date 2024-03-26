import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, Dimensions, View, FlatList, ImageBackground } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { List } from '../assets/common/List';
import AppStyle from '../assets/common/AppStyle';
import AppImages from '../assets/common/AppImages';
import AppColor from '../assets/common/AppColors';
import Constants from '../assets/common/Constants';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Footer from '../componants/Footer';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({ navigation, item }) => {
  // const [myData, setMyData] = useState();
  const [topMovieData, setTopMovieData] = useState([]);

  const [myData, setMyData] = useState(List);
  const [trendData, setTrendData] = useState([]);
  const [index1, setIndex1] = useState(0)
  const isCarousel = useRef(null)
  const [profileImage, setProfileImage] = useState('');





  const topMovies = ({ item }) => {
    return (
      <View style={styles.catScroller}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailsPage', { videoId: item.id, path: item.videoURL })}
        >
          <Image style={styles.topMoviesImage} source={item.image} />

        </TouchableOpacity>
      </View>
    );
  };

  // const SLIDER_WIDTH = Dimensions.get('window').width + 80
  // const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

  const CarouselCardItem = ({ item, index }) => {
    return (

      <TouchableOpacity
        // onPress={()=>navigation.navigate('DetailsPage', {videoId: item.id,path:item.videoURL})}
        style={[styles.catScroller]} key={index}>
        <Image
          source={item.image}
          style={[styles.carousel]}
        />

      </TouchableOpacity>
    )
  }


  const showCategories = ({ item }) => {
    return (
      <View style={styles.catScroller}>
        <TouchableOpacity>
          <Image style={styles.catImage} source={item.catImage} />
          <View style={{ alignSelf: 'center' }}>
            <Text style={AppStyle.text}>{item.category}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View style={AppStyle.container}>

      <ScrollView >


        <View style={{}}>

          <Carousel
            layout="default"
            layoutCardOffset={7}
            ref={isCarousel}
            data={myData}
            renderItem={(item) => CarouselCardItem(item)}
            sliderWidth={Constants.screenWidth + 0}

            itemWidth={Constants.screenWidth + 0}
            // inactiveSlideShift={0}
            // useScrollView={true}
            autoplay={true}
            loop={true}
            autoplayDelay={2000}
            autoplayInterval={3000}
            onSnapToItem={index => setIndex1(index)}
          />
         <View style={{ marginTop:-55}}>
          <Pagination
            dotsLength={myData.length}
            activeDotIndex={index1}
            carouselRef={isCarousel}
            dotStyle={{
              width: 25,
              height: 12,
              borderRadius: 15,
              marginHorizontal: -5,
              backgroundColor: '#af69ee',

            }}
            inactiveDotStyle={{
              borderRadius: 15,
              backgroundColor: 'black',
              width: 17,
              height: 17
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
          </View>
        </View>



        <View style={{ marginBottom: 10, flexDirection: 'row' }}>

          <TouchableOpacity>
            <View style={styles.bottomBox}>
            {/* <LinearGradient colors={['#b9bfff', '#af69ee']} start={{x: 0, y: 0.85}} end={{x: 0, y: 1}} > */}
              <AntDesign name="gift" color={'#fff'} size={50}
                style={[styles.footer_Icon,
                ]}
              />
              <Text style={styles.catText}>Gift</Text>
              {/* </LinearGradient> */}
              </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.bottomBox}>
              <Entypo name="shop" color={'#fff'} size={50}
                style={[styles.footer_Icon,
                ]}
              />
              <Text style={styles.catText}> Center</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.bottomBox}>
              <Entypo name="scissors" color={'#fff'} size={50}
                style={[styles.footer_Icon,
                ]}
              />
              <Text style={styles.catText}>Hair cut</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.bottomBox}>
              <Entypo name="round-brush" color={'#fff'} size={50}
                style={[styles.footer_Icon,
                ]}
              />
              <Text style={styles.catText}>Make up</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.bottomBox, { backgroundColor: '#b947b1' }]}>
              <AntDesign name="filter" color={'#fff'} size={50}
                style={[styles.footer_Icon,
                ]}
              />
              <Text style={styles.catText}>Filter</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center' }}>
        <LinearGradient colors={['#b9bfff', '#af69ee']} start={{x: 0, y: 0.4}} end={{x: 0, y: 0.99}} style={{ borderRadius: 25,}}>
          <View style={{  justifyContent: 'center', alignItems: 'center',  borderRadius: 25, flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 6, width: 185, }}>
            <MaterialCommunityIcons name="map-marker" color={'#fff'} size={26}
              style={[styles.footer_Icon,
              ]}
            />
            <Text style={[styles.catText, { fontSize: 15 }]}> Find your Location</Text></View>
            </LinearGradient>
        </View>

        <View style={{ marginVertical: 8 }}>

          <View style={{flexDirection:'row'}}>

            <View style={[styles.mainContainer]}>
            {/* <LinearGradient colors={['#333', '#444']} start={{x: 0, y: 0}} end={{x: 0, y: 0.99}} style={[styles.mainContainer]}> */}

          <ImageBackground style={[styles.imageContainer]}
            resizeMode="stretch"
            source={require('../assets/Images/Nail_Art.jpg')}>
             
              <Text style={styles.mainText}> Nail Art</Text>
            </ImageBackground>
            {/* </LinearGradient> */}

            </View>

            <View 
            style={[styles.mainContainer]}
            >
            {/* <LinearGradient colors={['#333', '#444']} start={{x: 0, y: 0}} end={{x: 0, y: 0.99}} style={[styles.mainContainer]}> */}

            <ImageBackground style={[styles.imageContainer]}
            resizeMode="stretch"
            source={require('../assets/Images/Makeup.jpg')}>
              <Text style={styles.mainText}>Make up</Text>
            </ImageBackground>
            {/* </LinearGradient>  */}
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <View style={[styles.mainContainer]}>
          <ImageBackground style={[styles.imageContainer]}
            resizeMode="stretch"
            source={require('../assets/Images/HairSpa.jpeg')}>
              <Text style={styles.mainText}>Hair Spa</Text>
            </ImageBackground>
            </View>
            <View style={[styles.mainContainer]}>
            <ImageBackground style={[styles.imageContainer]}
            resizeMode="stretch"
            source={require('../assets/Images/BodySpa.jpg')}>
              <Text style={styles.mainText}>Body Spa</Text>
            </ImageBackground>
            </View>
          </View>
        </View>


      
      </ScrollView>
<ImageBackground style={{
                height: 90,
                width: '100%', position:'absolute', bottom:-11
            }}
            resizeMode="contain"
            source={require('../assets/Images/waves2.png')}>
 
<Footer/>

</ImageBackground>
      </View>
  )
}


export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex:2,
    height: 170,
    
   
    borderRadius: 15,
    margin:5
},
imageContainer: {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  opacity:0.4,
  borderRadius: 15,
},
fImageContainer:{
// position:'absolute',
// bottom:0,
// left:0,
height:100,
alignItems:'center',
justifyContent:'center'
},
mainText:{
  color: 'white',
  fontWeight: 'bold',
  fontSize:18,
  textTransform:'uppercase'
},
tab_icon:{
  backgroundColor:'white', padding:7,
  alignItems:'center'
},
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  carousel: {
    width: '100%',
    height: 280,

  },
  topMoviesImage: {
    width: 110,
    height: 140,
    borderRadius: 5
  },
  catScroller: {
    // marginRight:0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselPage: {

  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: AppColor.white,
    borderRadius: 50,
    marginHorizontal: 5
  },
  catImage: {
    width: 60,
    height: 60
  },
  bottomBox: {
    backgroundColor: '#b9bfff',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80, marginRight: 3
  },
  catText: {
    color: 'white',
    fontWeight: 'bold'
  }

})