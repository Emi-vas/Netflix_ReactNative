import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Home from './screens/Home';
import Soon from './screens/Soon';
import FocusedStatusBar from './components/FocusedStatusBar';
import NavigationBar from './components/NavigationBar';
import { COLORS } from './assets/constants';

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.black
  }
}

export default function App() {
    return (
        <NavigationContainer theme={theme}>
          <FocusedStatusBar />
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Soon" component={Soon} />
            </Stack.Navigator>
          <NavigationBar page="Home" />
        </NavigationContainer>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
