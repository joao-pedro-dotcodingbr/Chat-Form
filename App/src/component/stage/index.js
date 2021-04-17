import React, { useState } from 'react';

import { View , TextInput, TouchableOpacity , Text} from 'react-native';
import {styles, borderInput} from './styles';
import ComponentMessageText from '../message/index';
import {stylesFonts , width , colors} from '../../styles';
import { Ionicons } from '@expo/vector-icons'; 

export default function input({id , propsFormik , keyFormik , message, valueStage , SetStage, ...rest }) {
  
  // validando a visualização da etapa
  var visible = false;
  var disabledButton = true;

  if(id === valueStage || id < valueStage){

    visible = true;

  }
  //

  //Alerte Error schema Input
  if(propsFormik.touched[keyFormik] && propsFormik.errors[keyFormik]){

    borderInput.borderColor = colors.red;
    disabledButton = true;

  }else{
    borderInput.borderColor = colors.color_text;
    disabledButton = false;
  
  }
//
  const NextStage = () =>{

    if(!propsFormik.errors[keyFormik]){
  
      if(id === valueStage){

        borderInput.borderColor = colors.color_text;
        SetStage(valueStage + 1)
      }

    }else{

      borderInput.borderColor = colors.red;
      disabledButton = true;

    }
    
  }

 return (

   <View style={[styles.container , visible? {display:'flex'} : {display:'none'}]}>

        <ComponentMessageText message={message}/>

          <Text style={[stylesFonts.text, {color:colors.red , textAlign:'center'}]}>
            {propsFormik.touched[keyFormik] && propsFormik.errors[keyFormik]}
          </Text>
          
        <View style={styles.containerSend}>

            <TextInput 

              style={[styles.containerInput , stylesFonts.text , borderInput]} 
              onChangeText={propsFormik.handleChange(keyFormik)}
              onBlur={propsFormik.handleBlur(keyFormik)}

              {...rest}
          
              />

              <TouchableOpacity disabled={disabledButton} 
              style={styles.containerButton} 
              onPress={() => NextStage()}>
                <Ionicons name="send" size={(width * 0.035)} color='white'/>
              </TouchableOpacity>

        </View>

   </View>
  );
}