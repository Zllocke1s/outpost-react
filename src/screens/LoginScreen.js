import React, { memo, useState } from 'react';
import { TouchableOpacity, Text, View, KeyboardAvoidingView } from 'react-native';
import Background from '../components/Background';
import Logo from '../assets/logo.svg';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { styles } from '../styles/LoginScreenStyle'
import { emailValidator, passwordValidator } from '../core/utils';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';





const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

  navigation.navigate('Wrapper');
  };

  const [isLoaded] = useFonts({
    "SulphurPoint-Bold": require("../assets/fonts/SulphurPoint-Bold.ttf"),
    "SulphurPoint-Light": require("../assets/fonts/SulphurPoint-Light.ttf"),
    "SulphurPoint-Regular": require("../assets/fonts/SulphurPoint-Regular.ttf"),
    });
  if (!isLoaded) {
    return <AppLoading />;
  } else {
  return (

  <View style={[styles.container]}>
    <View style={[styles.fixed]}>
      <Background />
    </View>
    <ScrollView style={[styles.fixed, {backgroundColor: 'transparent'}]}>
    <View style={styles.container}><BackButton goBack={() => navigation.navigate('HomeScreen')} />

<Logo style={{marginBottom: 40,}}/>
<View style={styles.loginBox}>
<TextInput
  label="Email"
  returnKeyType="next"
  value={email.value}
  onChangeText={text => setEmail({ value: text, error: '' })}
  error={!!email.error}
  errorText={email.error}
  autoCapitalize="none"
  autoCompleteType="email"
  textContentType="emailAddress"
  keyboardType="email-address"
  underlineColorAndroid="transparent"
/>

<TextInput 
  label="Password"
  returnKeyType="done"
  value={password.value}
  onChangeText={text => setPassword({ value: text, error: '' })}
  error={!!password.error}
  errorText={password.error}
  
  secureTextEntry
/>
<View>
<View style={styles.forgotPassword}>
  <TouchableOpacity
    onPress={() => navigation.navigate('ForgotPasswordScreen')}
  >
    <Text style={styles.label}>Forgot your password?</Text>
  </TouchableOpacity>
  <Button style={styles.loginButton} mode="contained" onPress={_onLoginPressed}>
  <Text style={styles.loginButtonText} >Log In</Text>
</Button>

</View>

</View>
</View>

<View style={styles.row}>
  <Text style={styles.label}>Don’t have an account? </Text>
  <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
    <Text style={styles.link}>Sign up</Text>
  </TouchableOpacity>
</View></View>
</ScrollView>
</View>



   
  );
  }
};



export default memo(LoginScreen);
