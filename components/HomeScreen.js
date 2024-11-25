import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./About";
import Home from "./Home";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="About"
                component={About}
                options={{title: "Acerca de"}} />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{title: "Inicio"}} />  
        </Stack.Navigator>
    );
}
