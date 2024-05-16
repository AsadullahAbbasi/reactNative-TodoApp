import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditJob from './Components/EditJob';
import Login from './Components/Login';
import Todos from './Components/Todos';
import {useState} from 'react';
import {SignupContextProvider} from './Contexts/Context';
import Signup from './Components/Signup';
import NewJob from './Components/NewJob';

const App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [posts, setPosts] = useState([]);
  const Stack = createNativeStackNavigator();

  const [isLogedIn, setLogin] = useState(false);
  const addPost = post => {
    setPosts(prevPosts => [...prevPosts, post]);
  };
  const updatePost = (newPost, id) => {
    setPosts(prevPosts =>
      prevPosts.map(post => (post.id === id ? {...post, ...newPost} : post)),
    );
  };

  const deletePost = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  return (
    <SignupContextProvider
      value={{
        setName,

        setPassword,
        setEmail,
        name,
        email,
        password,
        isLogedIn,
        setLogin,
        addPost,
        posts,
        updatePost,
        deletePost,
      }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isLogedIn ? 'Todos' : 'Signup'}>
          {isLogedIn ? (
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Todos"
              component={Todos}
            />
          ) : (
            <>
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                options={{
                  headerShadowVisible: false,
                  headerShown: false,
                }}
                name="Login"
                component={Login}
              />
            </>
          )}

          <Stack.Screen
            name="Edit job"
            component={EditJob}
            options={{
              headerStyle: {
                backgroundColor: '#1e1c24',
              },
              headerShadowVisible: false,
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            options={{
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#1e1c24',
              },
              headerTintColor: '#fff',
            }}
            name="Add New Job"
            component={NewJob}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SignupContextProvider>
  );
};

export default App;
