import { StyleSheet } from 'react-native'
import { width , height , colors} from '../../styles';

const styles = StyleSheet.create({

    container:{

        backgroundColor:colors.light_green,
        color:'#fff',
        
        textAlign:'center',
        alignSelf:'center',
        width:'85%',
        padding:height * 0.020,
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


})

export default styles