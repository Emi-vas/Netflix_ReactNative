import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 


import Home from './screens/Home';
import Soon from './screens/Soon';
import Search from "./screens/Search"
import Download from "./screens/Download"
import FocusedStatusBar from './components/FocusedStatusBar';
import { COLORS } from './assets/constants';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import HomeStack from './screens/Home/HomeStack';

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
                  } else if (route.name == "Search") {
                    return <Ionicons name="search" size={24} color={focused ? "white" : COLORS.gray} />
                  } else if (route.name == "Download") {
                    return <AntDesign name="download" size={24} color={focused ? "white" : COLORS.gray}/>
                  }
                },
                tabBarActiveTintColor: 'white', //text
                tabBarInactiveTintColor: 'gray',

                tabBarStyle: {
                    height : 50,
                    paddingVertical: 5,
                    backgroundColor: COLORS.black,
                    borderTopWidth: 0,
                    paddingBottom: 5
                },
                headerShown: false
                
              })}
           >
              <tab.Screen name="Home" component={HomeStack} />
              <tab.Screen name="Soon" component={Soon} />
              <tab.Screen name="Search" component={Search} />
              <tab.Screen name="Download" component={Download} />
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
