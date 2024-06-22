import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Text, View } from "react-native";
import LoginScreen from "../components/LoginScreen";

export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/OpenSans_Condensed-Regular.ttf'),
    'outfit-light': require('./../assets/fonts/OpenSans_Condensed-Light.ttf'),
    'outfit-bold': require('./../assets/fonts/OpenSans_Condensed-Bold.ttf')

  })
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>

  );
}
