import { memo } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { theme } from '../core/theme';
import CheckBox from 'react-native-check-box'
import * as React from 'react';
import CheckedBox from '../assets/checkedBox.svg';
import UncheckedBox from '../assets/uncheckedBox.svg';


const TodayItem = ({ title, time, style, children, ...props }) => {
  
const [checked, setChecked] = React.useState(false);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 26,
    color: theme.colors.secondary,
    marginBottom: 14,
    textAlign: 'center',
    fontFamily: "SulphurPoint-Regular",
    marginLeft: 40,
  },
  header: {
    fontSize: 24,
    lineHeight: 24,
    color: theme.colors.secondary,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: "SulphurPoint-Bold",    
    marginLeft: 40,
  },
  container:
  {
    lineHeight: 26,
    backgroundColor: theme.colors.lightBlue,
    marginBottom: 14,
    width: '90%',
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
  }

  
});


return (
  <View style={styles.container} onStartShouldSetResponder={ () => setChecked(!checked) } ><View style={styles.checkboxContainer}><CheckBox checkboxStyle={styles.checkbox} unCheckedImage={<UncheckedBox />} checkedImage={<CheckedBox />} isChecked={checked ? true : false} onClick={() => setChecked(!checked)  } /></View><Text style={styles.header}>{title}</Text><Text {...props} style={styles, styles.text}>{time}</Text></View>
   );
};
export default memo(TodayItem);
