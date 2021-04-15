import {StyleSheet , Dimensions} from 'react-native';

export const {height , width} = Dimensions.get('window');


export const colors = {
    light_green:'#1dd1a1',
    dark_green:'#1dd1a1',
    color_text:'#424242',
}

export const stylesFonts = StyleSheet.create({

    title:{
        fontSize: width * 0.035,
        fontFamily:'NunitoSans_600SemiBold',
        
    },
    text:{
        fontSize: width * 0.025,
        fontFamily:'NunitoSans_400Regular',
        
    }

})