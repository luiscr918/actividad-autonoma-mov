import { StyleSheet } from "react-native";
import { BUTTON_COLOR, INPUT_COLOR, NORMAL_TEXT_COLOR, SECONDARY_COLOR, THIRD_COLOR } from "./colorsByMe/const";

export const styles=StyleSheet.create({
    title:{
        textAlign:'left',
        color:SECONDARY_COLOR,
        fontSize:35,
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:10,
        padding:5 
        
    },
    body:{
        backgroundColor:THIRD_COLOR,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:35,
        paddingTop:40,
        justifyContent:'space-around'
    },
    imgHome:{
        alignSelf:'center',
        width: 300, 
        height: 300,
        borderRadius:15
    },
    bodyTextHome:{
        color:SECONDARY_COLOR,
        textAlign:'center',
        fontSize:20
    },
    textInputs:{
        margin:15,
        backgroundColor: INPUT_COLOR,
        color:NORMAL_TEXT_COLOR,
        padding:10,
        width:'70%'
    },
    button:{
        backgroundColor:BUTTON_COLOR,
        borderRadius:15,
        alignItems:'center',
        marginTop:10,
        padding:10,
        alignSelf:'center',
        width:'50%',
    },
    buttonText:{
        fontSize:20,
        color:SECONDARY_COLOR
    },
    textResultado:{
        fontSize:20,
        marginTop:15,
        textAlign:'center',
        color:SECONDARY_COLOR
    },
    resutlado:{
        fontWeight:'bold',
        fontSize:20,
        color:SECONDARY_COLOR
    },
    containerTextInput:{
        alignItems:'center'
    }
});