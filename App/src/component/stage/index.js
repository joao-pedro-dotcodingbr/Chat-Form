import React from 'react';

import { View , TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import ComponentMessageText from '../message/index';
import {stylesFonts , width , colors} from '../../styles';
import { Ionicons } from '@expo/vector-icons'; 

export default function input(props) {

  var visible = false;

  if(props.id === props.valueStage || props.id < props.valueStage){

    visible = true;

  }

  const NextStage = () =>{

    props.SetStage(props.valueStage +1)
    
  }

 return (

   <View style={[styles.container , visible? {display:'flex'} : {display:'none'}]}>

        <ComponentMessageText message={props.message}/>

        <View style={styles.containerSend}>

            <TextInput 

              style={[styles.containerInput , stylesFonts.text , {color:colors.color_text} ]} 
              placeholder={props.placeholder}
              ref={props.Ref} 
              value={props.values} 
              onChangeText={props.handleChange}/>

              <TouchableOpacity style={styles.containerButton} onPress={() => NextStage()}>
                <Ionicons name="send" size={(width * 0.035)} color='white'/>
              </TouchableOpacity>

        </View>

   </View>
  );
}