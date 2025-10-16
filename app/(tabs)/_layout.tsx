import useOrientation from '@/hooks/useOrientation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";
import { Orientation } from 'expo-screen-orientation';
import { Text } from 'react-native';

export default function TabLayout() { // Function to decide what to do if screen orientation is not landscape
    const screenOrientation = useOrientation();
      if (screenOrientation === Orientation.PORTRAIT_UP) 
        return <Text>Rotate Device to Landscape</Text>;
      if (screenOrientation === Orientation.PORTRAIT_DOWN)
        return <Text>Rotate Device to Landscape</Text>;
      if(screenOrientation === Orientation.UNKNOWN)
        return <Text>Rotate Device to Landscape</Text>
    return ( 
        <Tabs  // Decides the formatting and image used for the tabs at the bottom of the screen.
            screenOptions={{tabBarActiveTintColor: '#03fc56ff'}}> 
            <Tabs.Screen
                name="piano"
                options={{ title: "Piano", headerShown: false,
                    tabBarIcon: ({ color }) => (<MaterialIcons name="piano" size={24} color="black" />),}}/> 
            <Tabs.Screen
                name="drums"
                options={{ title: "Drums", headerShown: false,
                    tabBarIcon: ({ color }) => (<FontAwesome5 name="drum" size={24} color="black"/>),}}/>
        </Tabs>
    );
}
