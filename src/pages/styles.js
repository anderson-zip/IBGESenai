import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight+90,
        justifyContent: 'center',
        alignItems:'center'
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign:'center',
    },

    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop:48,
        color: '#4682B4',
        fontWeight:'bold',
    },
    
    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    input:{
        marginTop:20,
        paddingHorizontal:20,
        paddingVertical:15,
        borderWidth:1,
        borderColor:'#c3c3c3',
    },

    buttonText:{
        textAlign:'center',
    },

    button:{
        marginTop:10,
        padding:20,
        borderWidth:1,
        borderColor:'#c3c3c3',
        backgroundColor:"#0093DD",
        borderRadius:10,
        width:200,
    },
    text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: '40%'
    },
});