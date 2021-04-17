import React from 'react';
import {TouchableOpacity , ActivityIndicator} from 'react-native';
import {stylesFonts, height} from '../../styles';
import styles from './styles';

const button = ({propsFormik , text , id , valueStage}) => {

    var visible = false;

    if(id === valueStage || id < valueStage){
  
      visible = true;
  
    }
  
  return (

    <>

        {propsFormik.isSubmitting?(<ActivityIndicator style={{marginVertical:height * 0.015}} size={height * 0.05}/>) : (

            <TouchableOpacity 
            style={[

                styles.container , 
                stylesFonts.title,
                visible? {display:'flex'} : {display:'none'}

                ]} onPress={propsFormik.handleSubmit}>

                {text}

            </TouchableOpacity>

          )}
  
      </>
  
    )


}

export default button;