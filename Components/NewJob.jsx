import React from 'react';
import {Text, TextInput, View, StatusBar, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {SignupContext} from '../Contexts/Context';
const NewJob = ({route, navigation}) => {
  const [Title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {addPost} = SignupContext();

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: '#1e1c24',
        paddingTop: 60,
        paddingHorizontal: 8,
      }}>
      <View style={{flex: 1, gap: 20}}>
        <TextInput
          selectionColor={'#8F8F9E'}
          onChangeText={text => {
            return setTitle(text);
          }}
          style={{
            backgroundColor: '#5D5D67',

            fontSize: 15,
            background: '#8F8F9E',

            paddingHorizontal: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#8F8F9E',
          }}
          placeholder="Enter position name"
        />
        <TextInput
          onChangeText={text => setDescription(text)}
          selectionColor={'#8F8F9E'}
          style={{
            backgroundColor: '#5D5D67',
            fontSize: 15,
            background: '#8F8F9E',
            paddingHorizontal: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#8F8F9E',
          }}
          numberOfLines={8}
          placeholder="Describe Requirement..."
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          addPost({
            id: Date.now(),
            todoMsg: description,
            Location: 'Pakistan, Karachi',
            title: Title,
          });
          navigation.navigate('Todos');
        }}
        style={{
          marginBottom: 60,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 400,
            color: '#191720',
            fontSize: 15,
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 20,
            borderRadius: 5,
            paddingVertical: 20,
          }}>
          Add job
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewJob;
