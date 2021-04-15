import {StyleSheet , Dimensions ,} from 'react-native'
import { width , height , colors} from '../../styles';

const styles = StyleSheet.create({

    container:{
        width:'100%',
        display:'flex', 
        justifyContent:'space-between' , 
        padding:height * 0.025
        
    },

    containerTextMenssage:{

        paddingHorizontal: height * 0.03,
        paddingVertical: height * 0.015,
        marginVertical:height * 0.015,

        borderRadius: height * 0.007,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },

    containerSend:{

        display:'flex', 
        width:'100%',
        flexDirection:'row' , 
        height:height * 0.06,
        marginVertical:height * 0.015,
        marginHorizontal: width * 0.07,

    },

    containerInput:{

        width:'75%', 
        height:'100%',
        borderWidth:width * 0.003, 
        borderColor:'#000',
        paddingLeft:height * 0.020,

    },
    containerButton:{

        borderRadius: width * 0.004,
        marginLeft: width * 0.02,
        padding:width * 0.025,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.light_green
       
    },

})

export default styles