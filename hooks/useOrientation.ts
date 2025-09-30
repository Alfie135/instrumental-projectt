import { Orientation, addOrientationChangeListener, getOrientationAsync } from 'expo-screen-orientation';
import { useEffect, useState } from "react"; // Import useState from React

export default function useOrientation() {
  const [ScreenOrientation, setOritentation] = useState(Orientation.UNKNOWN); // Variable/Function use state unknown orientation as default

  const loadOrientation = async () => {
    const currentOrientation = await getOrientationAsync(); // Get current orientation
    setOritentation(currentOrientation); // Update the orientation state with the current orientation
  }
  useEffect(() => {  // Use useEffect to load orientation on component mount
    loadOrientation();
    addOrientationChangeListener(loadOrientation)
  })
  return ScreenOrientation;
}