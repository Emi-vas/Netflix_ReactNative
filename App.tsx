import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 


import Home from './screens/Home';
import Soon from './screens/Soon';
import FocusedStatusBar from './components/FocusedStatusBar';
import { COLORS } from './assets/constants';

const tab = createBottomTabNavigator()

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
           <tab.Navigator
              screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName;
            
                  if (route.name == "Home") {
                    return <AntDesign name="home" size={24} color={focused ? "white" : COLORS.gray}/>
                  } else if (route.name == "Soon") {
                    return <MaterialIcons name="video-library" size={24} color={focused ? "white" : COLORS.gray}/>
                  }
                },
                tabBarActiveTintColor: 'white', //text
                tabBarInactiveTintColor: 'gray',

                tabBarStyle: {
                    height : 50,
                    paddingVertical: 5,
                    backgroundColor: COLORS.black,
                    position: 'absolute',
                    borderTopWidth: 0,
                    paddingBottom: 5
                }
              })}
           >
              <tab.Screen name="Home" component={Home} />
              <tab.Screen name="Soon" component={Soon} />
           </tab.Navigator>
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
