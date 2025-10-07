import { loadAudioPlayers } from "@/helpers/audio";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WhiteKey from "./WhiteKey";


export default function Piano() {
  const players = loadAudioPlayers();

  return (
    <View //Keys on the Piano. Assigned to an audio file (piano sound)
      style={styles.mainview}>
      <View style={styles.container}> 
        <WhiteKey player={players.c} /> 
        <WhiteKey player={players.d} />
        <WhiteKey player={players.e} />
        <WhiteKey player={players.f} />
        <WhiteKey player={players.g} />
        <WhiteKey player={players.a} />
        <WhiteKey player={players.b} />
      </View>
      <Text>Press any key to play it's corresponding note!</Text>
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
