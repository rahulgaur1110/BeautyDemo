/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 
 import { NavigationContainer } from '@react-navigation/native';
 import MyTabs from './src/navigation/MainNavigator';
 import Login from './src/screens/Login';
 import SignUp from './src/screens/SignUp';
 import DetailsPage from './src/screens/DetailsPage';
 import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
 
 
 
 const App = () => {
 
 
   return (
     <View style={{flex:1, backgroundColor:'white'}}>
              <StatusBar backgroundColor='#af69ee' />
             
        <Home/>

       
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 
