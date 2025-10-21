import Piano from "@/components/Piano";
import useOrientation from "@/hooks/useOrientation";

export default function Index() { // Orientation function for the piano page
  const screenOrientation = useOrientation();
    return <Piano></Piano>;
}
