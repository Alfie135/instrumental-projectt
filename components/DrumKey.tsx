import { AudioPlayer } from "expo-audio";
import { Pressable, StyleSheet, View } from "react-native";

interface DrumKeyProps {
  player: AudioPlayer,
  top: number,
  left: number,
}

export default function WhiteKey(props: DrumKeyProps) {

  const {player, top, left}= props;
  const onPress = () => {
    player.seekTo(0); //Seek to time 0 of audio file
    player.play(); //Play
  }

    return (
      <Pressable onPress={onPress} // When the button is pressed, change colour to colour listed:
        style = {({pressed}) => [{ backgroundColor: pressed ? "rgba(165, 170, 180, 1)" : "white", height: 100, top:top, left:left, opacity: 0.02, borderRadius: 50}]}>
        <View style = {styles.DrumKey}></View>
      </Pressable>
    );  
}

const styles = StyleSheet.create({ // Formatting for the pressable buttons
  DrumKey: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "black",
  },
})