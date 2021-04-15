import { StyleSheet } from 'react-native'
import { width , height } from '../../styles';

const styles = StyleSheet.create({

    container:{

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


})

export default styles