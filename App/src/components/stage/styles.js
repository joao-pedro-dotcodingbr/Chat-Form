import {StyleSheet} from 'react-native'
import { width , height , colors} from '../../styles';

export const borderInput ={

    borderColor:colors.color_text,
    
    
}
export const styles = StyleSheet.create({

    container:{
        width:'100%',
        display:'flex', 
        justifyContent:'space-between' , 
        padding:height * 0.025
        
    },

    containerSend:{

        display:'flex', 
        width:'100%',
        flexDirection:'row' , 
        alignItems:'center',
        height:height * 0.06,
        marginVertical:height * 0.013,
        marginHorizontal: width * 0.07,

    },

    containerInput:{

        width:'75%', 
        height:'100%',
        borderWidth:width * 0.003, 
        color:colors.color_text,
        paddingLeft:height * 0.020, 

    },
    containerButton:{

        borderRadius: width * 0.004,
        marginLeft: width * 0.02,
        width:width * 0.08,
        height: '100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.light_green
       
    },

})
