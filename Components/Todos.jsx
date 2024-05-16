import React from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {useState, useEffect} from 'react';
import {SignupContext} from '../Contexts/Context';
import TodoItem from './TodoItem';
import add_icon from '../icons/plusButton.png';
import {Image, View} from 'react-native';
import logout_icon from '../icons/logout_icon.png';
const Todos = ({navigation}) => {
  const {
    posts,
    name,

    setLogin,
  } = SignupContext();

  const [searched, setSearched] = useState('');

  const handleSearch = text => {
    setSearched(text);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searched.toLowerCase()),
  );

  return (
    <View
      style={{
        backgroundColor: '#191720',
        flex: 1,
      }}>
      <View
        style={{
          paddingLeft: 14,
          paddingTop: 40,
          paddingBottom: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: 2,
            }}>
            Welcome
          </Text>
          <Text style={{color: '#FFFFFF', fontSize: 25}}>{name} Asad</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setLogin(false);
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={logout_icon}
          />
        </TouchableOpacity>
      </View>

      <View style={{paddingHorizontal: 10, marginBottom: 10}}>
        <TextInput
          placeholderTextColor="#8F8F9E"
          selectionColor={'#8F8F9E'}
          placeholder="Search keywords.."
          onChangeText={text => handleSearch(text)}
          style={{
            fontSize: 15,
            backgroundColor: '#1E1C24',
            borderWidth: 1,
            borderColor: '#8F8F9E',
            color: '#FFFFFF',
            paddingHorizontal: 20,
            borderRadius: 15,
          }}
        />
      </View>
      <FlatList
        data={filteredPosts.length > 0 ? filteredPosts : posts}
        renderItem={({item}) => (
          <TodoItem
            title={item.title}
            id={item.id}
            description={item.todoMsg}
          />
        )}
        keyExtractor={({id}) => id.toString()} // keyExtractor is outside of renderItem
      />

      {/* Apply shadow to create a shadow around the circle */}

      <TouchableOpacity
        onPressIn={() => navigation.navigate('Add New Job')}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30, // Half of width and height for a perfect circle
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 40,
          right: 20,
        }}
        onPress={() => navigation.navigate('Add New Job')}>
        <Image
          source={add_icon}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Todos;
