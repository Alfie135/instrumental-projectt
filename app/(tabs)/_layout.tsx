import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function TabLayout() { // Function to create tabs at the bottom of the screen for Piano and Drums
    return ( 
        <Tabs  // Decides the formatting and image used for the tabs at the bottom of the screen.
            screenOptions={{tabBarActiveTintColor: '#03fc56ff'}}> 
            <Tabs.Screen
                name="piano"
                options={{ title: "Piano", headerShown: false,
                    tabBarIcon: () => (<MaterialIcons name="piano" size={24} color="black" />),}}/> 
            <Tabs.Screen
                name="drums"
                options={{ title: "Drums", headerShown: false,
                    tabBarIcon: () => (<FontAwesome5 name="drum" size={24} color="black"/>),}}/>
        </Tabs>
    );
}
