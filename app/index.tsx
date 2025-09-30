import WhiteKey from "@/components/WhiteKey";
import useOrientation from "@/hooks/useOrientation";
import { Orientation } from "expo-screen-orientation";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const screenOrientation = useOrientation();
  const output = (
    <View
    style = {styles.mainview}>
      <View
      style={styles.container}
      >
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
  if (screenOrientation === Orientation.LANDSCAPE_LEFT) 
    return output;
  if (screenOrientation === Orientation.LANDSCAPE_RIGHT)
    return output;
  else return <Text>Rotate Device to Landscape</Text>
}

function numberToOrientationValue(value: Orientation) {
  if (value === Orientation.UNKNOWN) return "unknown";
  if (value === Orientation.PORTRAIT_UP) return "portrait up";
  if (value === Orientation.PORTRAIT_DOWN) return "portrait down";
  if (value === Orientation.LANDSCAPE_LEFT) return "landscape left";
  if (value === Orientation.LANDSCAPE_RIGHT) return "landscape right";
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
