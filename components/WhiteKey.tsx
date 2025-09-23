import { StyleSheet, View } from "react-native";

export default function WhiteKey() {

    return (
        <View
        style = {styles.WhiteKey}
        >
        </View>
    );  
}

const styles = StyleSheet.create({
  WhiteKey: {
    width: 100,
    height: 300,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "black",
  }
})