import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./Home";
import MovieDetailsScreen from "../MovieDetailsScreen";
import { COLORS } from "../../assets/constants";

const Stack = createStackNavigator()


 const HomeStack = () => {
    return (
        <Stack.Navigator  initialRouteName="Home">
          <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen 
              name="MovieDetails" 
              component={MovieDetailsScreen} 
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: COLORS.black,
                },
                headerTintColor: "white",
              }}  
          />
        </Stack.Navigator>
    );
}

export default HomeStack;