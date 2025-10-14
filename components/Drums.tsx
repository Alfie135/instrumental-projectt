import { loadAudioPlayers } from "@/helpers/audio";
import React from "react";
import { Text, View } from "react-native";

export default function Drums() {
    const players = loadAudioPlayers();
    
    return <View> 
        <Text>
            Drums Component
        </Text>
    </View>
}