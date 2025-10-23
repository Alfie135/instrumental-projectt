import Piano from "@/components/Piano";
import RotateMessage from "@/components/RotateMessage";
import useOrientation from "@/hooks/useOrientation";
import { Orientation } from "expo-screen-orientation";

export default function Index() { // Orientation function for the piano page
    const screenOrientation = useOrientation();
      if (screenOrientation === Orientation.PORTRAIT_UP) 
        return <RotateMessage></RotateMessage>;
      if (screenOrientation === Orientation.PORTRAIT_DOWN)
        return <RotateMessage></RotateMessage>;
      if(screenOrientation === Orientation.UNKNOWN)
        return <RotateMessage></RotateMessage>
    return <Piano></Piano>;
}
