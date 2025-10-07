import { AudioPlayer } from "expo-audio";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";



interface BlackKeyProps {
  player: AudioPlayer
}

export default function BlackKey(props: BlackKeyProps) {

  const {player}= props;
  const onPress = () => {
    player.seekTo(0); //Seek to time 0 of audio file
    player.play(); //Play
  }

    return (
      <Pressable onPress={onPress}
        style = {({pressed}) => [{ backgroundColor: pressed ? "rgba(165, 170, 180, 1)" : "black", height: 200}]}>
        <View style = {[styles.BlackKey]}></View>
      </Pressable>
    );  
}

const styles = StyleSheet.create({
  BlackKey: {
    width: 60,
    height: 200,
    borderColor: "rgba(172, 151, 151, 1)",
  },
})