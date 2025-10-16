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
        <WhiteKey player={players.d} />
        <BlackKey player={players.db} />
        <WhiteKey player={players.e} />
        <BlackKey player={players.eb} />
        <WhiteKey player={players.f} />
        <WhiteKey player={players.g} />
        <BlackKey player={players.gb} />
        <WhiteKey player={players.a} />
        <BlackKey player={players.ab} />
        <WhiteKey player={players.b} />
        <BlackKey player={players.bb} />
      </View>
      <Text>Press any key to play it's corresponding note!</Text>
    </View>
  );
}

const styles = StyleSheet.create({ // Formatting for container that holds the piano keys.
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 8,
    borderColor: "#3abecfff",
    backgroundColor: "#3abecfff",
  },
  mainview: { // Centres everything on the page.
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3abecfff",
    justifyContent: "center",
  }
})
