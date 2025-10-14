import Piano from "@/components/Piano";
import useOrientation from "@/hooks/useOrientation";
import { Orientation } from "expo-screen-orientation";
import React from "react";
import { Text } from "react-native";

export default function Index() { // Orientation function for the piano page
  const screenOrientation = useOrientation();

  if (screenOrientation === Orientation.LANDSCAPE_LEFT) 
    return <Piano></Piano>;
  if (screenOrientation === Orientation.LANDSCAPE_RIGHT)
    return <Piano></Piano>;
  else return <Text>Rotate Device to Landscape</Text>
}
