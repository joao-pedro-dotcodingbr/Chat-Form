import React from 'react';
import { ProgressViewIOSComponent, TouchableOpacity } from 'react-native';
import {colors , stylesFonts} from '../../styles';
import styles from './styles';

const button = (porps) => {
  return (
  
        <TouchableOpacity style={[styles.container , stylesFonts.title , {color: 'white'}]} onPress={() => porps.event()}>

            {porps.text}

        </TouchableOpacity>
  
    )
}

export default button;