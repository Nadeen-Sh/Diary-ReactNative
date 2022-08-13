import 'react-native-gesture-handler'
import * as React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeScreen from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/Redux/store'
import DiaryMood from './src/screens/Diary/DiaryMood';
import RegisterScreen from "./src/screens/Register"
import MoodScreen from './src/screens/Mood/Mood';
import MoodTextScreen from './src/screens/Mood/InputMood';
import MoodEmoji from './src/screens/Diary/MoodEmoji';
import {View, Text} from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return <Text>made with love</Text>
}

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer >
    <Drawer.Navigator initialRouteName="Register"  >
    <Drawer.Screen name="Register" component={RegisterScreen}  options={{headerShown: false}} />
      <Drawer.Screen name="Insert Mood" component={MoodScreen} />
      <Drawer.Screen name="Insert Diary" component={MoodTextScreen} />
      <Drawer.Screen name="My Diary" component={DiaryMood} />
      <Drawer.Screen name="My Mood" component={MoodEmoji} />
    </Drawer.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

export default App