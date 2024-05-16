import React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import edit from '../icons/edit_icon.png';
import delete_icon from '../icons/delete_icon.png';
import {useNavigation} from '@react-navigation/native';
import {SignupContext} from '../Contexts/Context';
const TodoItem = ({description, title, id}) => {
  const navigation = useNavigation();
  const {deletePost} = SignupContext();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        backgroundColor: '#201E27',
        opacity: 0.8,
      }}>
      <View style={{gap: 5}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '600',
            color: '#FFFFFF',
            marginBottom: 8,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontWeight: '400',
            color: '#8F8F9E',
            fontSize: 12,
            paddingBottom: 5,
          }}>
          Karachi , Pakistan
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Edit job', {id, title, description})
          }>
          <Image source={edit} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deletePost(id)}>
          <Image source={delete_icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
