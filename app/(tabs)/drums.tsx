import Drums from "@/components/Drums";
import useOrientation from "@/hooks/useOrientation";
import { Orientation } from "expo-screen-orientation";
import React from 'react';
import { Text } from 'react-native';

export default function Index() { // Orientation function for the drum page
  const screenOrientation = useOrientation();

  if (screenOrientation === Orientation.LANDSCAPE_LEFT) 
    return <Drums></Drums>;
  if (screenOrientation === Orientation.LANDSCAPE_RIGHT)
    return <Drums></Drums>;
  else return <Text>Rotate Device to Landscape</Text>
}