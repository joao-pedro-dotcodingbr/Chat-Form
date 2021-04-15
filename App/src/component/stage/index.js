import React from 'react';
import { View , TextInput, TouchableOpacity , Text} from 'react-native';
import styles from './styles';
import ComponentMessageText from '../message/index';
import {stylesFonts , width , colors} from '../../styles';
import { Ionicons } from '@expo/vector-icons'; 

export default function input(props) {
 return (
   <View style={styles.container}>

        <ComponentMessageText message={props.message}/>

        <View style={styles.containerSend}>

            <TextInput 

              style={[styles.containerInput , stylesFonts.text , {color:colors.color_text} ]} 
              placeholder={props.placeholder}
              ref={props.Ref} 
              value={props.values} 
              onChangeText={props.handleChange}/>

              <TouchableOpacity style={styles.containerButton}>
                <Ionicons name="send" size={(width * 0.035)} color='white'/>
              </TouchableOpacity>

        </View>

   </View>
  );
}