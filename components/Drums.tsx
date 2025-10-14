import { loadAudioPlayers } from "@/helpers/audio";
import { ImageBackground } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DrumKey from "./DrumKey";

const image = require('../assets/images/drumKit.png');

export default function Drums() {
    const players = loadAudioPlayers();

    return <View style ={styles.mainview}>
        <ImageBackground source={image} style ={styles.imageStyling}>
            <DrumKey player={players.snare} />
            <DrumKey player={players.hihat} />
            <DrumKey player={players.crashCymbal} />
            <DrumKey player={players.smallTom} />
            <DrumKey player={players.mediumTom} />
            <DrumKey player={players.rideCymbal} />
            <DrumKey player={players.floorTom} />
        </ImageBackground>
        <Text>Press on the drum to play its corresponding sound! </Text>
    </View>
}

const styles = StyleSheet.create({
    imageStyling: {
        height: 400,
        width: 600,
    },

    mainview: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3abecfff",
    justifyContent: "center",
  },
})
