import React from 'react';
import { View } from 'react-native';
import Starts from 'react-native-stars';
import { FontAwesome } from '@expo/vector-icons';
import {colors , width} from '../../styles';
import ComponentMessageText from '../message/index';
import styles from './styles';

const starSize = width * 0.046;

const assement = (props) => {
  return (

    <View style={styles.container}>

    <ComponentMessageText message={props.message} />

      
        <View style={styles.containerStars}>

          
              <Starts 

              default={0} 
              count={6} 
              half={false} 
              starSize={starSize} 
              fullStar={<FontAwesome name="star" size={starSize} color="#f1c40f" />}
              emptyStar={<FontAwesome name="star-o" size={starSize} color={colors.color_text} />}
              />

        </View>

    </View>
  
  );
}

export default assement;