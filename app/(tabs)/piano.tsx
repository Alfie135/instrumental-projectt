import Piano from "@/components/Piano";
import useOrientation from "@/hooks/useOrientation";
import { Orientation } from "expo-screen-orientation";
import { Text } from "react-native";

export default function Index() {
  const screenOrientation = useOrientation();

  if (screenOrientation === Orientation.LANDSCAPE_LEFT) 
    return <Piano></Piano>;
  if (screenOrientation === Orientation.LANDSCAPE_RIGHT)
    return <Piano></Piano>;
  else return <Text>Rotate Device to Landscape</Text>
}
