import {StyleSheet} from 'react-native'
import { width , height , colors} from '../../styles';

const styles = StyleSheet.create({

    container:{
        width:'100%',
        display:'flex', 
        justifyContent:'space-between' , 
        padding:10
    },

    containerStars:{

        marginVertical:height * 0.015,
        width:'90%',
        padding:width * 0.03,
        alignSelf:'center',
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

  

})

export default styles