import { View, StyleSheet, ImageBackground} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Account from '../screens/Account';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Trends from '../screens/Trends';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import DetailsPage from '../screens/DetailsPage';
import React from 'react';



const MainStack = createNativeStackNavigator();
function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName={"Splash"}>
    <MainStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
<MainStack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
<MainStack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
  {/* <MainStack.Screen name="HomeStack" component={HomeStackScreen} options={{ headerShown: false }} /> */}
</MainStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator >
       <HomeStack.Screen name="Home" component={Home}
        options={{ headerShown: false }} />
      <HomeStack.Screen name="DetailsPage" component={DetailsPage}
        options={{ headerShown: false }} />

       </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    // <React.Fragment>
    // <ImageBackground style={{width: '100%', height: 60}}
    // // style={[styles.imageContainer]}
    //         resizeMode="center"
    //         source={require('../assets/Images/waves.png')}>
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      screenOptions={{
        // tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          // backgroundColor: '#ffffff',
          height: 70,
          borderTopWidth: 0,
          borderRadius:5,
          alignItems: 'center',
          opacity: 0.01
        },
      }}
    >
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
            headerShown: false,
        //   tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
            <View style={[styles.bottomBox, {backgroundColor:'white'}]}>
 
              <Foundation name="home" color={'#b9bfff'} size={24}
              // style={[styles.footer_Icon,
              //  ]}
               />


            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
            headerShown: false,
          tabBarLabel: 'Search',
        tabBarIcon: ({ focused }) => (
            <View style={styles.bottomBox}>
              <Feather name="file-text" color={'#ED1C24'} size={24}
             style={[styles.footer_Icon, 
           
          ]}
               />

            </View>
          ),

        }}
      />
       <Tab.Screen
        name="Login"
        component={Login}
        options={{
            headerShown: false,
        //   tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
            <View style={styles.bottomBox}>
 
              <AntDesign name="shoppingcart" color={'#ED1C24'} size={24}
              style={[styles.footer_Icon, 
               ]}
               />


            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trends"
        component={Trends}
        options={{
            headerShown: false,
        //   tabBarLabel: 'Trends',
          tabBarIcon: ({ focused }) => (
            <View style={styles.bottomBox}>
              <MaterialIcons name="favorite-border" color={'#ED1C24'} size={24}
             style={[styles.footer_Icon, 
              {color: focused ? '#ED1C24' : 'black',
              backgroundColor: focused ? 'white': '#ED1C24',
            }]}
               />

            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
            headerShown: false,
        //   tabBarLabel: 'Account',
        tabBarIcon: ({ focused }) => (
            <View style={styles.bottomBox}>
            <MaterialCommunityIcons name="account-outline" color={'#ED1C24'} size={24}
            style={[styles.footer_Icon, 
             {color: focused ? '#ED1C24' : 'black',
             backgroundColor: focused ? 'white': '#ED1C24',
           }]}
              />

           </View>
         ),
        }}
      />
    </Tab.Navigator>
  
  );
}


const styles = StyleSheet.create({
    footer_Icon: {
      
      borderRadius: 32,padding:5
    },
  
    bottomBox: {
      justifyContent: 'center', alignItems: 'center',
      backgroundColor:'white', 
    },
    imageContainer: {
      width: 200,
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      opacity:0.7,
      borderRadius: 15,
    },
  });

export default MainNavigator;
