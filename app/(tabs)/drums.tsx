import Drums from "@/components/Drums";
import RotateMessage from "@/components/RotateMessage";
import useOrientation from "@/hooks/useOrientation";
import { Orientation } from "expo-screen-orientation";

export default function Index() { // Orientation function for the drum page
  const screenOrientation = useOrientation();
  if (screenOrientation === Orientation.PORTRAIT_UP)
    return <RotateMessage></RotateMessage>;
  if (screenOrientation === Orientation.PORTRAIT_DOWN)
    return <RotateMessage></RotateMessage>;
  if (screenOrientation === Orientation.UNKNOWN)
    return <RotateMessage></RotateMessage>
  return <Drums></Drums>;
}