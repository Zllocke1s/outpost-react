import { memo } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { theme } from '../core/theme';
import CheckBox from 'react-native-check-box'
import * as React from 'react';
import CheckedBox from '../assets/checkedBox.svg';
import UncheckedBox from '../assets/uncheckedBox.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const TodayItem = ({ progress, title, people, style, children, ...props }) => {
  
const [checked, setChecked] = React.useState(false);

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    lineHeight: 26,
    color: theme.colors.lightGreen,
    textAlign: 'right',
    fontFamily: "SulphurPoint-Bold",
    flex: 1,
    textAlignVertical: "bottom"
    
  },
  header: {
    fontSize: 24,
    lineHeight: 24,
    color: theme.colors.secondary,
    textAlign: 'left',
    fontFamily: "SulphurPoint-Bold",    
    flex: 0.5,
    textAlignVertical: "bottom"
  },
  container:
  {
    lineHeight: 26,
    backgroundColor: theme.colors.medBlue,
    marginBottom: 14,
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer:
  {
    flexDirection: 'row',
    padding: 0,
    marginTop: 20,
    marginBottom: 10
  },
  checkbox:
  {
    
  },
  checkboxContainer:
  {
    position: 'absolute',
    left: 20,
    top: '22%',
    overflow: 'visible',
  },
  bar:
  {
    width: progress,
    backgroundColor: theme.colors.lightGreen,
    borderRadius: 4,

  },
  barBackground:
  {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  people:
  {
    flex: 0.5,
    textAlign: 'right',
    flexDirection: 'row',

  }

  
});


return (
  <View style={styles.container} onStartShouldSetResponder={ () => setChecked(!checked) } ><View style={styles.barBackground}><View style={styles.bar}><Text></Text></View></View><View style={styles.subContainer}><Text style={styles.header}>{title}</Text><View style={styles.people}><Text {...props} style={styles, styles.text}>{people} </Text><MaterialCommunityIcons name="account-multiple" color={theme.colors.lightGreen} size={20}/></View></View></View>
   );
};
export default memo(TodayItem);
