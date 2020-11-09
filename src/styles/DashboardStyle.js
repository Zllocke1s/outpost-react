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
    backgroundColor: theme.colors.lightBlue,
    },
    dashboardPassword: {
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
    welcome: {
      fontSize: 20,
      fontFamily: 'SulphurPoint-Bold',
      marginTop: 100,
      color: theme.colors.darkBlue,
      flex: 0.1
    },
    dashboardBox: {
      flex: 1,
      width: '100%',
      backgroundColor: "#ffffff",
      padding: 10,
      borderWidth: 1,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderTopColor: '#000000',
      borderBottomWidth: 0,
      fontFamily: 'SulphurPoint-Regular',
      
      
    },
    scrollViewContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    registerSubmissions: {

    },
    logoutButton: {
        height: 'auto',
        borderRadius: 20,
        backgroundColor: theme.colors.lightGreen,
        color: '#000000',
        fontFamily: 'SulphurPoint-Bold',   
        width: 'auto',
        position: 'absolute',
        right: 10,
        top: 30,
        
    },
    announcementButton: {
      borderRadius: 20,
      backgroundColor: theme.colors.medBlue,
      color: '#000000',
      fontFamily: 'SulphurPoint-Bold',   
      width: 50,
      position: 'absolute',
      left: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      top: 50,
      justifyContent: "center",
      margin: 0,
      padding: 0,
  },
  announcementButtonHide: {
    
    display: 'none',
    
},
  annIcon: {
    height: 100,
    
  },
    registerField: {
        borderRadius: 20,
        color: "#ff0000",
        fontFamily: 'SulphurPoint-Regular',
        
    },

    
  label: {
    color: theme.colors.secondary,
  },

  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  announcementBoxShow: {
    display: "flex",
    position: "absolute",
    top: 140,
    left: "10%",
    backgroundColor: "#ffffff",
    width: "80%",
    height: Dimensions.get("window").height-200,
    zIndex: 1000,
    borderRadius: 14,
    alignItems: "center",
    shadowOffset:{  width: 10,  height: 10,  },
shadowColor: 'black',
shadowOpacity: 10.0,
    elevation: 25,
  },
  announcementBoxHide: {
    display: "none"
  },
  announcementHeading: {
    fontFamily: "SulphurPoint-Bold",
    fontSize: 26,
    textDecorationLine: "underline",
    marginTop: 10
  }
  });