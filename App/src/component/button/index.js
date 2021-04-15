import React from 'react';
import { ProgressViewIOSComponent, TouchableOpacity } from 'react-native';
import {colors , stylesFonts} from '../../styles';
import styles from './styles';

const button = (props) => {

    var visible = false;

    if(props.id === props.valueStage || props.id < props.valueStage){
  
      visible = true;
  
    }
  
  return (
  
        <TouchableOpacity 
        style={[

            styles.container , 
            stylesFonts.title,
            visible? {display:'flex'} : {display:'none'}

             ]} onPress={() => porps.event()}>

            {props.text}

        </TouchableOpacity>
  
    )


}

export default button;