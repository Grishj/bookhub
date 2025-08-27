import {
  SplashScreen,
  Stack,
  useRouter,
  useSegments,
  useRootNavigationState,
} from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "../components/SafeScreen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const navigationState = useRootNavigationState();
  const { checkAuth, user, token } = useAuthStore();

  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  // Check auth on app start
  useEffect(() => {
    checkAuth();
  }, []);

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Handle navigation based on auth state
  useEffect(() => {
    // Wait for navigation to be ready AND fonts to be loaded
    if (!navigationState?.key || !fontsLoaded) return;

    const inAuthScreen = segments[0] === "(auth)";
    const isSignedIn = user && token;

    // Add a small delay to ensure navigation is fully ready
    const timer = setTimeout(() => {
      if (!isSignedIn && !inAuthScreen) {
        router.replace("/(auth)");
      } else if (isSignedIn && inAuthScreen) {
        router.replace("/(tabs)");
      }
    }, 100); // Small delay to ensure navigation is ready

    return () => clearTimeout(timer);
  }, [user, token, segments, navigationState, fontsLoaded]);

  // Don't render navigation until everything is ready
  if (!navigationState?.key || !fontsLoaded) {
    return null; // Keep splash screen visible
  }

  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeScreen>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
