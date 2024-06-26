import React, {useContext, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {SignupContext} from '../Contexts/Context';
const Signup = ({navigation}) => {
  const {setName, setPassword, setEmail, name, password, email} =
    SignupContext();
  const [localEmail, setLocalEmail] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [localName, setLocalName] = useState('');
  const handleSignup = () => {
    if ((localEmail !== '' && localPassword !== '') || localName !== '') {
      setEmail(localEmail);
      setPassword(localPassword);
      setName(localName);
      setLocalName('');
      setLocalEmail('');
      setLocalPassword('');
      navigation.navigate('Login');
    }
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={40}
      style={{flex: 1, backgroundColor: '#191720'}}
      behavior={Platform.OS === 'ios' ? 'height' : 'padding'}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#191720',
          paddingHorizontal: 15,
          paddingTop: 80,
          gap: 50,
        }}>
        <View>
          <Text style={{fontSize: 35, fontWeight: '600', color: '#FFFFFF'}}>
            Let's sign you up
          </Text>
          <Text style={{fontSize: 30, fontWeight: '400', color: '#FFFFFF'}}>
            Welcome{'\n'}Join the community!
          </Text>
        </View>
        <View style={{gap: 20}}>
          <TextInput
            value={localName}
            onChangeText={e => setLocalName(e)}
            style={{
              color: '#8F8F9E',
              backgroundColor: '#5D5D67',
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
            selectionColor={'#8F8F9E'}
            placeholder="Enter Your Full Name"
          />
          <TextInput
            onChangeText={Text => setLocalEmail(Text)}
            style={{
              color: '#8F8F9E',
              backgroundColor: '#5D5D67',
              paddingHorizontal: 20,
            }}
            placeholder="Enter Your Email Address"
            selectionColor={'#8F8F9E'}
            value={localEmail}
          />
          <TextInput
            onChangeText={Text => setLocalPassword(Text)}
            style={{
              color: '#8F8F9E',
              backgroundColor: '#5D5D67',
              paddingHorizontal: 20,
            }}
            placeholder="Enter Your Password"
            selectionColor={'#8F8F9E'}
            value={localPassword}
          />
        </View>
        <View style={{gap: 20}}>
          <View style={{flexDirection: 'row', gap: 4, alignSelf: 'center'}}>
            <Text style={{color: '#8F8F9E'}}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: 'white', fontWeight: '600'}}>Sign in</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleSignup}>
            <Text
              style={{
                borderRadius: 15,
                backgroundColor: '#FFF',
                paddingHorizontal: 20,
                paddingVertical: 10,
                color: '#191720',
                textAlign: 'center',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={{height: 60}} />
        </View>
        {/* </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
