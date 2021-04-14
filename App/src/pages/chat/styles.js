import {StyleSheet , Dimensions} from 'react-native'

const {height} = Dimensions.get('window')
const styles = StyleSheet.create({

    container:{
        flex:1,

    },
    containerSub:{
        alignSelf:'center',
        width:'90%',
        height:height * 0.10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    containerChat:{
        flex:1,

    }

})

export default styles