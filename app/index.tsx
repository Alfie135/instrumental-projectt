import WhiteKey from "@/components/WhiteKey";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View
    style={styles.container}
    >
      <WhiteKey></WhiteKey>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  }
})
