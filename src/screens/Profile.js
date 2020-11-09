import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../assets/logo.svg';

import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { theme } from '../core/theme';
import { styles } from '../styles/DashboardStyle';
import { Text, View } from 'react-native';



const Profile = ({ navigation }) => {

  const [isLoaded] = useFonts({
    "SulphurPoint-Bold": require("../assets/fonts/SulphurPoint-Bold.ttf"),
    "SulphurPoint-Light": require("../assets/fonts/SulphurPoint-Light.ttf"),
    "SulphurPoint-Regular": require("../assets/fonts/SulphurPoint-Regular.ttf"),
    });
  if (!isLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
    <Header>Profile</Header>
     <Paragraph>
      
    </Paragraph>
    </View>
   ) };
};

export default memo(Profile);
