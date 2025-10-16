import { AudioPlayer } from "expo-audio";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";



interface BlackKeyProps {
  player: AudioPlayer
}

export default function BlackKey(props: BlackKeyProps) { //Black key function

  const {player}= props;
  const onPress = () => {
    player.seekTo(0); //Seek to time 0 of audio file
    player.play(); //Play
  }

    return (
      <View style={styles.KeyContainer}> 
      <Pressable onPress={onPress} // When the button is pressed, change colour to colour listed:
        style = {({pressed}) => [{ backgroundColor: pressed ? "rgba(165, 170, 180, 1)" : "black", height: 200}, styles.BlackKey]}>
      </Pressable>

      </View>
    );  
}

const styles = StyleSheet.create({ // Formatting for the pressable buttons
  BlackKey: {
    width: 60,
    height: 200,
    position: "relative",
    left: -130,
  },
  KeyContainer: {
    width: 0,
  }
})