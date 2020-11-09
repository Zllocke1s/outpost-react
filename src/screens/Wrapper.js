import * as React from 'react';
import { memo } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../core/theme';
import style from '../styles/WrapperStyle';
import Logo from '../assets/logo.svg';
import Score from './Scoreboard';
import Calendar from './Calendar';
import List from './List';
import Profile from './Profile';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';


function ScoreScreen() {
  return (
    <Score />
  );
}

function DashboardScreen() {
  return (
    <Dashboard />
  );
}

function ProfileScreen() {
  return (
    <Profile />
  );
}
function CalendarScreen() {
  return (
    <Calendar />
  );
}

function ListScreen() {
  return (
    <List />
  );
}

const Tab = createBottomTabNavigator();

const Wrapper = ({ navigation }) => {
      
  const [isLoaded] = useFonts({
    "SulphurPoint-Bold": require("../assets/fonts/SulphurPoint-Bold.ttf"),
    "SulphurPoint-Light": require("../assets/fonts/SulphurPoint-Light.ttf"),
    "SulphurPoint-Regular": require("../assets/fonts/SulphurPoint-Regular.ttf"),
    });
  if (!isLoaded) {
    return <AppLoading />;
  } else {
  return (

    <NavigationContainer>
      <Tab.Navigator initialRouteName='Dashboard' tabBarOptions={{showLabel: false, activeTintColor: '#c1ff9a', inactiveTintColor: '#c1ff9a', inactiveBackgroundColor: '#77b7f2', activeBackgroundColor: '#387389',
      adaptive: 'true',
    }}
    >
        <Tab.Screen name="List" options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={size} />
          ),
        }} children={() => (
          <List
            navigation={navigation}
          />
        )} />
        <Tab.Screen name="Scoreboard" options={{
          tabBarLabel: 'Scoreboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
          ),
        }} 
        children={() => (
          <Score
            navigation={navigation}
          />
        )} />
        <Tab.Screen name="Dashboard" options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ focused, color, size }) => (
        
        <View
        style={[focused ? {
          position: 'absolute',
          bottom: 0, // space from bottombar
          height: 80,
          width: 80,
          marginBottom: 10,
          borderRadius: 58,
          backgroundColor: '#387389',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100,
        } : {position: 'absolute',
        bottom: 0, // space from bottombar
          height: 80,
          width: 80,
          marginBottom: 10,
          borderRadius: 58,
        backgroundColor: '#77b7f2',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,}]}>
       <Logo width={50} />
      </View>   
             ),
        }} 
        children={() => (
          <Dashboard
            navigation={navigation}
          />
        )}
        
        />
        <Tab.Screen name="Calendar" options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="calendar-month" color={color} size={size} />
          ),
        }}  children={() => (
          <Calendar
            navigation={navigation}
          />
        )} />
        <Tab.Screen name="Profile" options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }} children={() => (
          <Profile
            navigation={navigation}
          />
        )} />
        
      </Tab.Navigator>
    </NavigationContainer>
  ) };
};

export default memo(Wrapper);
