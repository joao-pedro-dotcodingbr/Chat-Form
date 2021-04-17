import React from 'react';
import { View } from 'react-native';
import Starts from 'react-native-stars';
import { FontAwesome } from '@expo/vector-icons';
import {colors , width} from '../../styles';
import ComponentMessageText from '../message/index';
import styles from './styles';

const starSize = width * 0.046;

const assement = ({id , valueStage , SetStage , propsFormik , message}) => {

  var visible = false;

  if(id === valueStage || id < valueStage){

    visible = true;

  }

  const NextStage = (value) =>{

    if( id < valueStage || id === valueStage ){

    propsFormik.values.assement = value;

       SetStage(valueStage +1);

    }
    
  }

  return (

    <View style={[styles.container, visible? {display:'flex'} : {display:'none'}]}>

    <ComponentMessageText message={message} />

        <View style={styles.containerStars}>

              <Starts 

              default={0} 
              count={6} 
              half={false} 
              update={(val)=>{this.setState({stars: val})}}
              starSize={starSize} 
              fullStar={<FontAwesome name="star" size={starSize} color="#f1c40f" />}
              emptyStar={<FontAwesome name="star-o" size={starSize} color={colors.color_text} />}
              update={(value) => NextStage(value)}

              />

        </View>

    </View>
  
  );
}

export default assement;