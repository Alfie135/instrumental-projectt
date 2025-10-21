import Drums from "@/components/Drums";
import useOrientation from "@/hooks/useOrientation";

export default function Index() { // Orientation function for the drum page
  const screenOrientation = useOrientation();
    return <Drums></Drums>;
}