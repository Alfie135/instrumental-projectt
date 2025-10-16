import { Stack } from "expo-router";

export default function RootLayout() { // Tabs at the bottom for Piano/Drums
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
