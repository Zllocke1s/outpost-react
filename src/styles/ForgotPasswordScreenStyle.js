import { Dimensions, StyleSheet } from 'react-native'
import { theme } from '../core/theme'

export const styles = StyleSheet.create({
    
    fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0   
    },
    container: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
            flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    },
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
      fontFamily: 'SulphurPoint-Regular',
      flexDirection: 'row-reverse',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
      fontFamily: 'SulphurPoint-Regular',
    },
    label: {
      color: theme.colors.secondary,
      fontFamily: 'SulphurPoint-Regular',
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
      fontFamily: 'SulphurPoint-Regular',
    },
    forgotPassBox: {
      height: 'auto',
      width: '80%',
      backgroundColor: theme.colors.medBlue,
      padding: 10,
      borderRadius: 20,
      fontFamily: 'SulphurPoint-Regular',
      
    },
    forgotPassSubmissions: {

    },
    forgotPassButton: {
        height: 'auto',
        borderRadius: 20,
        backgroundColor: theme.colors.lightGreen,
        color: '#000000',
        width: '100%'
    },
    forgotPassButtonText: {
        fontFamily: 'SulphurPoint-Regular',        
    },
    forgotPassField: {
        borderRadius: 20,
        color: "#ffffff",
        fontFamily: 'SulphurPoint-Regular',
        fontWeight: 'normal'
    },
    heading: {
      fontFamily: 'SulphurPoint-Regular'
    }
  });