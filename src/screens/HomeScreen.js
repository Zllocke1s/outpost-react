import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../assets/logo.svg';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { theme } from '../core/theme';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';


const HomeScreen = ({ navigation }) => {
  const [isLoaded] = useFonts({
    "SulphurPoint-Bold": require("../assets/fonts/SulphurPoint-Bold.ttf"),
    "SulphurPoint-Light": require("../assets/fonts/SulphurPoint-Light.ttf"),
    "SulphurPoint-Regular": require("../assets/fonts/SulphurPoint-Regular.ttf"),
    });
  if (!isLoaded) {
    return <AppLoading />;
  } else {
  return (    
  
  <Background>
    <Logo />
    <Header>Welcome to Outpost</Header>

    <Paragraph>
      Lorem Ipsum
    </Paragraph>
    <Button color={theme.colors.lightGreen} mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
    
  </Background> ) };
};

export default memo(HomeScreen);
