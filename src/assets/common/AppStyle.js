import { StyleSheet } from 'react-native';
import AppColors from './AppColors';

const AppStyle = StyleSheet.create({
    container:{
        backgroundColor: AppColors.black,
        flex:1,
        // paddingHorizontal:15,
        // paddingtop:15,
        // paddingBottom:30
    },
    logo: {
        width: 256,
        height: 160,
        alignSelf:'center'
    },
    logoText:{
        color:AppColors.primaryColor,
        fontSize: 25,
        fontWeight:'bold'
    },
    displayPic:{
        width:46,
        height:46
    },
    heading: { 
        color: AppColors.white, fontSize: 24 
    },
    subHeading: {
        color: AppColors.white, 
        fontSize: 18, 
        marginBottom:10 
    },
    linkButton: {
        backgroundColor: AppColors.primaryColor,
        marginTop:15,
        borderRadius: 25,
        padding:12
    },
    linkButtonText: {
        color: AppColors.white,
        textAlign:'center',
        fontSize:16,
        fontWeight: 'bold',
    },
    headerText: {
        color: AppColors.white,
        fontSize: 23,
        fontWeight:'bold',
        lineHeight: 26,
        marginVertical: 5,
        alignSelf:'center'
    },
    linkText: {
        color: AppColors.primaryColor,
        fontSize: 13,
        marginVertical: 15,
    },
    textInput: {
        color: 'white',
        fontSize: 13,
        backgroundColor: '#1F222A',
        borderRadius: 5,
        paddingLeft: 10,
        paddingVertical:7
    },
    text:{
        color: AppColors.white,
        fontSize: 13,
        marginTop:10,
        
    },
    footer: {
        backgroundColor: AppColors.primaryColor,
        borderRadius: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical: 15,
        paddingHorizontal:25,
        marginTop: 15
    },
    footerIcon:{
        width: 17,
        height:17,
        resizeMode: 'contain'
    },
});

export default AppStyle;