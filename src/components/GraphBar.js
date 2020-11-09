import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../core/theme';

const GraphBar = ({value, color, group}) => {

const styles = StyleSheet.create({
  bar: {
    backgroundColor: color, 
    height: value, 
    width: 40,
    borderWidth: 1,
    borderBottomWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 1

  },
  barLabel: {
    fontFamily: "SulphurPoint-Regular",
    fontSize: 18, 
    textShadowColor: "#000000",
    textShadowRadius: 4,
    color: "#ffffff",
    
  },
  barGroup: {
    position: "absolute",
    bottom: -20,
    fontFamily: "SulphurPoint-Regular",

  }
});

return (
<View style={styles.bar}><Text style={styles.barLabel}>{value}</Text><Text style={styles.barGroup}>{group}</Text></View>


);

};
export default memo(GraphBar);
