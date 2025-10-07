import { AudioPlayer } from "expo-audio";
import React from "react";
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
        style = {({pressed}) => [{ backgroundColor: pressed ? 'rgba(0, 115, 255, 1)' : 'blue'}]}>
        <View style = {styles.WhiteKey}></View>
      </Pressable>
    );  
}

const styles = StyleSheet.create({
  WhiteKey: {
    width: 100,
    height: 300,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "black",
  },
})