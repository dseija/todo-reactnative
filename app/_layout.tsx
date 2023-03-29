import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { SettingsThemeMode } from '../features/settings';
import { loadSavedSettings } from '../features/settings/settingsHelpers';
import store from './store';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [themeMode, setThemeMode] = useState<SettingsThemeMode>('dark');

  const loadSettings = async () => {
    const settings = await loadSavedSettings();
    setThemeMode(settings.themeMode);
    setSettingsLoaded(true);
  };

  const appReady = () => fontsLoaded && settingsLoaded;

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;

    loadSettings();
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!appReady() && <SplashScreen />}
      {appReady() && <RootLayoutNav themeMode={themeMode} />}
    </>
  );
}

function RootLayoutNav({ themeMode }: { themeMode: SettingsThemeMode }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider value={themeMode === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </ThemeProvider>
      </Provider>
    </>
  );
}
