import { loadAudioPlayers } from "@/helpers/audio";
import { ImageBackground } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DrumKey from "./DrumKey";

const image = require('../assets/images/drumKit.png');

export default function Drums() {
    const players = loadAudioPlayers(); // Adds in the keys and assigns sound to them. Also adjusts their position to be perfectly over each instrument.

    return <View style ={styles.mainview}> 
        <ImageBackground source={image} style ={styles.imageStyling}> 
            <DrumKey player={players.snare} top={165} left={46} />
            <DrumKey player={players.hihat} top={65} left={-2} />
            <DrumKey player={players.crashCymbal} top={160} left={-55}/>
            <DrumKey player={players.smallTom} top={70} left={-105}/>
            <DrumKey player={players.mediumTom} top={80} left={-110}/>
            <DrumKey player={players.rideCymbal} top={70} left={-110}/>
            <DrumKey player={players.floorTom} top={160} left={-245}/>
        </ImageBackground>
        <Text>Press on the drum to play its corresponding sound! </Text>
    </View>
}

const styles = StyleSheet.create({ // Formatting for the image used on the drums page
    imageStyling: {
        height: 350,
        width: 550,
        flexDirection: "row",
        display: "flex",
    },

    mainview: { //Aligns everything to the centre
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3abecfff",
    justifyContent: "center",
  },
})
