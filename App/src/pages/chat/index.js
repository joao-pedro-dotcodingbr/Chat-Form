import React, { Component } from 'react';
import { View } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

export default class chat extends Component {

 render(){
  return (
    <View style={styles.container}>

        <View style={styles.containerSub}>

        </View>

        <ScrollView style={styles.containerChat}>

        </ScrollView>
        
    </View>
   );
 }
}