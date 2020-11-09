import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  myOwnProperty: true,

  colors: {
    ...DefaultTheme.colors,
    primary: '#77b7f2',
    secondary: '#414757',
    error: '#f13a59',
    medBlue: '#77b7f2',
    lightGreen: '#c1ff9a',
    darkBlue: '#387389',
    lightBlue: '#cbe6ff',
  },
};
