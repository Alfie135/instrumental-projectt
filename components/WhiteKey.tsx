import { AudioPlayer } from "expo-audio";
import { Pressable, StyleSheet, View } from "react-native";



interface WhiteKeyProps {
  player: AudioPlayer
}

export default function WhiteKey(props: WhiteKeyProps) {

  const {player}= props;
  const onPress = () => {
    player.seekTo(0); //Seek to time 0 of audio file
    player.play(); //Play
  }

    return (
      <Pressable onPress={onPress}
        style = {({pressed}) => [{ backgroundColor: pressed ? "rgba(165, 170, 180, 1)" : "white"}]}>
        <View style = {styles.WhiteKey}></View>
      </Pressable>
    );  
}

const styles = StyleSheet.create({
  WhiteKey: {
    width: 100,
    height: 300,
    borderWidth: 2,
    borderColor: "black",
  },
})