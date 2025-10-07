import { loadAudioPlayers } from "@/helpers/audio";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BlackKey from "./BlackKey";
import WhiteKey from "./WhiteKey";


export default function Piano() {
  const players = loadAudioPlayers();

  return (
    <View //Keys on the Piano. Assigned to an audio file (piano sound)
      style={styles.mainview}>
      <View style={styles.container}> 
        <WhiteKey player={players.c} /> 
        <BlackKey player={players.db} />
        <WhiteKey player={players.d} />
        <BlackKey player={players.eb} />
        <WhiteKey player={players.e} />
        <WhiteKey player={players.f} />
        <BlackKey player={players.gb} />
        <WhiteKey player={players.g} />
        <BlackKey player={players.ab} />
        <WhiteKey player={players.a} />
        <BlackKey player={players.bb} />
        <WhiteKey player={players.b} />
      </View>
      <Text>Press any key to play it's corresponding note!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 8,
    borderColor: "rgba(100, 92, 92, 1)",
    backgroundColor: "rgba(100, 92, 92, 1)",
  },
  mainview: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "teal",
    justifyContent: "center",
  }
})
