import { StyleSheet, Text, View } from "react-native";
import WhiteKey from "./WhiteKey";

export default function Piano() {
  return (
    <View
    style = {styles.mainview}>
      <View style={styles.container}>
        <WhiteKey></WhiteKey>
        <WhiteKey></WhiteKey>
        <WhiteKey></WhiteKey>
        <WhiteKey></WhiteKey>
        <WhiteKey></WhiteKey>
        <WhiteKey></WhiteKey>
        <WhiteKey></WhiteKey>
      </View>
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
