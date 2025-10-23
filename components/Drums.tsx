import { loadAudioPlayers } from "@/helpers/audio";
import { ImageBackground } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DrumKey from "./DrumKey";

const image = require('../assets/images/drumKit.png');

export default function Drums() {
    const players = loadAudioPlayers(); // Adds in the keys and assigns sound to them. Also adjusts their position to be perfectly over each instrument.

    return <View style ={styles.mainview}> 
        <ImageBackground source={image} style ={styles.imageStyling}> 
            <DrumKey player={players.snare} top={163} left={47} height={106} width={106}radius={53}/>
            <DrumKey player={players.hihat} top={60} left={-10} height={106} width={106}radius={53}/>
            <DrumKey player={players.crashCymbal} top={164} left={-61} height={86} width={86}radius={43}/>
            <DrumKey player={players.smallTom} top={95} left={-88} height={66} width={66}radius={33}/>
            <DrumKey player={players.mediumTom} top={95} left={-75} height={80} width={80}radius={40}/>
            <DrumKey player={players.rideCymbal} top={62} left={-65} height={112} width={112}radius={56}/>
            <DrumKey player={players.floorTom} top={168} left={-196} height={84} width={84}radius={42}/>
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
    userSelect: "none",
  },
})
