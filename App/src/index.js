import React from 'react';
import 'react-native-gesture-handler';
import Chat from './pages/chat/index';

import {useFonts , NunitoSans_400Regular , NunitoSans_600SemiBold} from '@expo-google-fonts/nunito-sans';
import AppLoading from 'expo-app-loading'

export default function src() {

  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

 return (
  <Chat/>
  );
}
