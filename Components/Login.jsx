import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SignupContextProvider, SignupContext} from '../Contexts/Context';
const Login = ({navigation}) => {
  const [userPassword, setPassword] = useState('');
  const [userEmail, setEmail] = useState('');
  const [loginMsg, setLoginMsg] = useState('');
  const {password, isLogedIn, email, setLogin} = SignupContext();
  const handleLogin = () => {
    if (userPassword === password && userEmail === email) {
      setLogin(true);

      setLoginMsg('invalid credentails    ');
    }
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={90}
      style={{flex: 1, backgroundColor: '#191720'}}
      behavior={Platform.OS === 'ios' ? 'height' : 'padding'}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,

          paddingHorizontal: 15,
          paddingTop: 80,
          gap: 50,
        }}>
        <View>
          <Text style={{fontSize: 35, fontWeight: '600', color: '#FFFFFF'}}>
            Let’s sign you in{' '}
          </Text>
          <Text style={{fontSize: 30, fontWeight: '400', color: '#FFFFFF'}}>
            Welcome back {'\n'} you’ve been missed !
          </Text>
        </View>
        <View style={{gap: 20}}>
          <TextInput
            onChangeText={Text => setEmail(Text)}
            style={{
              color: '#8F8F9E',
              backgroundColor: '#5D5D67',
              paddingHorizontal: 20,
            }}
            placeholder="Enter Your Email Address"
          />
          <TextInput
            onChangeText={Text => setPassword(Text)}
            style={{
              color: '#8F8F9E',
              backgroundColor: '#5D5D67',
              paddingHorizontal: 20,
            }}
            placeholder="Enter Your Password"
          />
        </View>
        <View style={{gap: 20}}>
          <View style={{flexDirection: 'row', gap: 4, alignSelf: 'center'}}>
            <Text style={{color: '#8F8F9E'}}>Don’t have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: 'white', fontWeight: '600'}}>Register</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{
                borderRadius: 15,
                backgroundColor: '#FFF',
                paddingHorizontal: 20,
                paddingVertical: 10,
                color: '#191720',
                textAlign: 'center',
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
