import React from 'react';
import {Text, TextInput, View, StatusBar, TouchableOpacity} from 'react-native';
import {useState} from 'react';

import {SignupContext} from '../Contexts/Context';
const EditJob = ({route, navigation}) => {
  const {updatePost} = SignupContext();
  const {id, description, title} = route.params;
  const [editedTitle, setEditedTitle] = useState(title);

  const [editedDescription, setEditedDescription] = useState(description);

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
          onChangeText={text => {
            return setEditedTitle(text);
          }}
          selectionColor={'#8F8F9E'}
          placeholderTextColor={'#8F8F9E'}
          placeholder="Search keywords.."
          style={{
            backgroundColor: '#5D5D67',

            fontSize: 15,
            color: '#FFFFFF',
            paddingHorizontal: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#8F8F9E',
          }}
          value={editedTitle}
        />
        <TextInput
          onChangeText={text => setEditedDescription(text)}
          selectionColor={'#8F8F9E'}
          placeholderTextColor={'#8F8F9E'}
          placeholder="Enter description here..."
          style={{
            fontSize: 15,
            color: '#FFFFFF',
            backgroundColor: '#5D5D67',
            borderRadius: 5,

            borderWidth: 1,
            borderColor: '#8F8F9E',
          }}
          numberOfLines={8}
          value={editedDescription}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          // setEditedDescription(description);
          // setEditedTitle(title);
          updatePost(
            {
              todoMsg: editedDescription,
              Location: 'Pakistan, Karachi',
              title: editedTitle,
            },
            id,
          );
          navigation.navigate('Todos');
        }}
        style={{
          marginBottom: 60,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 600,
            color: '#191720',
            fontSize: 15,
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 20,
            borderRadius: 15,
            paddingVertical: 20,
          }}>
          Update Job
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditJob;
