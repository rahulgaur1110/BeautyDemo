import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {

    useEffect(() => {
            
                setTimeout(() => {
                navigation.replace('MyTabs');
                
            }, 2000); // amount of time the splash is shown from the time component is rendered
         
            
    
        
    }, []);
  return (
    <View style={{backgroundColor:'white', flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'#af69ee', fontSize:40, fontWeight:'bold'}}>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})