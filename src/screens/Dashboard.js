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
import { ScrollView } from 'react-native-gesture-handler';
import TodayItem from '../components/TodayItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import Announcement from '../components/Announcement';

const Dashboard = ({ navigation }) => {
  const [showAnn, setAnnouncements] = React.useState(false); //Announcement Box trigger
  const [showAnnBut, setAnnouncementExists] = React.useState(true); //Announcement Button trigger

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
    
    <View style={[showAnn ? styles.announcementBoxShow : styles.announcementBoxHide ]}>
      <Text style={styles.announcementHeading}>
        Announcements!
      </Text>
      <ScrollView style={{width: "80%"}}>
        <Announcement heading="Cleaning Update" children="Negwer Hall is 50% complete."/>
        <Announcement heading="Cleaning Update" children="Rec Center is complete!"/>
        <Announcement heading="Cleaning Update" children="Cabin A has not been started."/>
        <Announcement heading="Calendar Update" children="Plank has claimed Morning Devotion for Wednesday."/>
        <Announcement heading="Cleaning Update" children="Rec Center has been approved."/>
        <Announcement heading="Cleaning Update" children="Negwer Hall is complete!"/>
        <Announcement heading="Calendar Update" children="Micro unclaimed Night Game for Monday."/>
        <Announcement heading="Cleaning Update" children="Negwer Hall has been approved."/>
        
      </ScrollView>
    </View>



<Button style={styles.logoutButton} mode="outlined" onPress={() => {navigation.navigate('HomeScreen')}}>
      <Text style={styles.logoutButton} >Logout</Text>
  </Button> 

  <Button style={[showAnnBut ? styles.announcementButton : styles.announcementButtonHide ]} mode="outlined" onPress={() => setAnnouncements(!showAnn)}>
  <Icon name="exclamation" style={{width: 100}} size={25} color={theme.colors.lightGreen} />;
   </Button>


    <Text style={styles.welcome}>Welcome!</Text>
    <Header>Your Tasks</Header>
    
    <View borderwidth={1} style={styles.dashboardBox}>
    <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
    <View style={styles.scrollViewContainer}>
    <TodayItem title="Morning Devotion" time="10:00 am" />
    <TodayItem title="Meal Host" time="10:00 am" />
    <TodayItem title="Bible Study" time="10:00 am" />
    <TodayItem title="Night Game" time="5:00 pm" />
    <TodayItem title="Campfire" time="8:00 pm" />
    </View>
    </ScrollView></View>
    </View>
   ) };
};

export default memo(Dashboard);
