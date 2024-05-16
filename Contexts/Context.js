import {createContext, useContext} from 'react';

export const UserContext = createContext({
  name: 'Dummy Name',
  email: 'XXXXXXXXXXXXXXX',
  password: 'XXXXXXXXXXXXXXX',
  setName: () => null,
  setEmail: () => null,
  setPassword: () => null,
  isLogedIn: false,
  setLogin: () => null,
  posts: [
    {
      title: 'Dummy Title',
      id: Date.now(),

      todoMsg: 'Dummy TodoMSg',
    },
  ],
  addPost: () => null,
  updatePost: () => null,
  deletePost: () => null,
});

export const SignupContext = () => useContext(UserContext);

export const SignupContextProvider = UserContext.Provider;
