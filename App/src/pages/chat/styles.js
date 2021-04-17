import {StyleSheet , Dimensions} from 'react-native'

const {height , width} = Dimensions.get('window')
const styles = StyleSheet.create({

    container:{
        flex:1,
        display:'flex'
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

        alignSelf:'center',
       
        borderRadius: width * 0.008,
        marginVertical: height * 0.03,
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },

    containerStage:{

        width:'100%',
        display:'flex', 
        justifyContent:'space-between' , 
        padding:height * 0.025
        
    }

})

export default styles