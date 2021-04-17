import React from 'react';
import { View , Text} from 'react-native';
import {stylesFonts , colors} from '../../styles'
import styles from './styles';

const message = (props) => {


  return (

    <View style={[styles.container]}>
        <Text style={[stylesFonts.text , {color:colors.color_text}]}>{props.message}</Text>
    </View>
  );
}

export default message;