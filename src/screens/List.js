import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../assets/logo.svg';

import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { theme } from '../core/theme';
import { styles } from '../styles/ListStyle';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ComplexListItem from '../components/ComplexListItem';


const List = ({ navigation }) => {

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

<Button style={styles.logoutButton} mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      <Text style={styles.logoutButton} >Logout</Text>
  </Button> 

    <Text style={styles.welcome}>Plank</Text>
    
    
    <View borderwidth={1} style={styles.ListBox}>
    <Text style={styles.ListHeading}>Cleaning List</Text>
    <ScrollView style={{width: '90%'}} contentContainerStyle={{width: '100%'}}>
    <View style={styles.scrollViewContainer}>
    <ComplexListItem progress="10%" title="The Pool" people="3" />
    <ComplexListItem progress="70%" title="Cabin A" people="2" />
    <ComplexListItem progress="30%" title="Cabin B" people="2" />
    <ComplexListItem progress="50%" title="Cabin C" people="0" />
    <ComplexListItem progress="80%" title="Cabin D" people="3" />
    <ComplexListItem progress="20%" title="Cabin E" people="2" />
    <ComplexListItem progress="40%" title="Cabin F" people="2" />
    <ComplexListItem progress="35%" title="Cabin G" people="0" />
    <ComplexListItem progress="42%" title="Dining Hall" people="3" />    
    </View>
    </ScrollView></View>
    </View>
   ) };
};

export default memo(List);
