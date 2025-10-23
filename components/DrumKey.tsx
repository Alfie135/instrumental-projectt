import { AudioPlayer } from "expo-audio";
import { Pressable } from "react-native";

interface DrumKeyProps {
  player: AudioPlayer,
  top: number,
  left: number,
  radius: number,
  height: number,
  width: number
}

export default function WhiteKey(props: DrumKeyProps) {

  const {player, top, left, radius, height, width}= props;
  const onPress = () => {
    player.seekTo(0); //Seek to time 0 of audio file
    player.play(); //Play
  }

    return (
      <Pressable onPress={onPress} // When the button is pressed, change colour to colour listed:
        style = {({pressed}) => [{ backgroundColor: pressed ? "rgba(165, 170, 180, 1)" : "white", top:top, left:left, opacity: 0.05, borderRadius:radius, width:width, height:height}]}>
      </Pressable>
    );  
}