import React from 'react';
import BlogForm from './components/views/BlogForm/BlogForm';
import BlogList from './components/views/BlogList/BlogList';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPostButton from './components/layout/NewPostButton/NewPostButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Create a stack navigator
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BlogList"
        screenOptions={screenOptions}
      >
        <Stack.Screen 
        name="BlogList" 
        component={BlogList} 
        options={({ navigation }) =>{
          return{
            title: 'Listagem de posts',
            headerRight: () => (
              <NewPostButton onPress={() => navigation.navigate('BlogForm')} />
            )
          }
        }}
        />
        <Stack.Screen 
        name="BlogForm" 
        component={BlogForm} 
        options={{
          title: 'Criar novo post'
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: 'rgb(21, 148, 229)',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}