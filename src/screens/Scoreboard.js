import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../assets/logo.svg';

import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { theme } from '../core/theme';
import { styles } from '../styles/ScoreboardStyle';
import { Text, View } from 'react-native';
import GraphBar from '../components/GraphBar';



const Scoreboard = ({ navigation }) => {

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
    <Header>Scoreboard</Header>
    <View style={styles.scoreboardBox}>
    <View style={styles.scoreboardChartBox}>
    <GraphBar color="#cc01fa" value={283} group="PLA"/>
    <GraphBar color="#30aaf3" value={129} group="MIC"/>
    <GraphBar color="#98cb12" value={332} group="NOV"/>
    <GraphBar color="#ffffff" value={26} group="SPA"/>
    <GraphBar color="#123456" value={51} group="PEP"/>
    <GraphBar color="#99bbff" value={101} group="PEB"/>

    </View>


    </View>

    </View>
   ) };
};

export default memo(Scoreboard);
