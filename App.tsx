// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './assets/HomeScreen';
import CourseSelectionScreen from './assets/CourseSelectionScreen';
import MenuPage from './assets/MenuPage';
import AddMenuItemPage from './assets/AddMenuItemPage';
import EditMenuItemPage from './assets/EditMenuItemPage';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="CourseSelection" component={CourseSelectionScreen} options={{ title: 'Select Course' }} />
        <Stack.Screen name="MenuPage" component={MenuPage} options={{ title: 'Menu' }} />
        <Stack.Screen name="AddMenuItemPage" component={AddMenuItemPage} options={{ title: 'Add Menu Item' }} />
        <Stack.Screen name="EditMenuItemPage" component={EditMenuItemPage} options={{ title: 'Edit Menu Item' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;