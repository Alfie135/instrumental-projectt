import { loadAudioPlayers } from "@/helpers/audio";
import { useAudioPlayer } from "expo-audio";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import WhiteKey from "./WhiteKey";

const sound = require("../helpers/notes/piano/A4.mp3");

export default function Piano() {
  const audioPlayer = useAudioPlayer(sound);
  const players = loadAudioPlayers();

  function onPress() {
    audioPlayer.seekTo(0); //Seek to time 0 of audio file
    audioPlayer.play(); //Play
  }

  return (
    <View
      style={styles.mainview}>
      <Pressable onPress={onPress}>
        <View style={styles.container}>
          <WhiteKey player={players.c}/>
          <WhiteKey player={players.d}/>
          <WhiteKey player={players.e}/>
          <WhiteKey player={players.f}/>
          <WhiteKey player={players.g}/>
          <WhiteKey player={players.a}/>
          <WhiteKey player={players.b}/>
        </View>
      </Pressable>
      <Text>Hello there</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
  },
  mainview: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "cyan",
    justifyContent: "center",
  }
})
