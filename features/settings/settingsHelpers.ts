import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_SETTINGS, SETTINGS_STORAGE_KEY } from './settingsConstants';
import { SettingsState } from './settingsTypes';

export const loadSavedSettings = async (): Promise<SettingsState> => {
  try {
    const settingsStr = await AsyncStorage.getItem(SETTINGS_STORAGE_KEY);
    return settingsStr ? JSON.parse(settingsStr) : DEFAULT_SETTINGS;
  } catch (e) {
    return DEFAULT_SETTINGS;
  }
};

export const saveSettings = async (settings: SettingsState) => {
  try {
    const oldSettingsStr = localStorage.getItem(SETTINGS_STORAGE_KEY);
    const settingsStr = JSON.stringify(settings);
    if (oldSettingsStr === settingsStr) return false;

    await AsyncStorage.setItem(SETTINGS_STORAGE_KEY, settingsStr);

    return true;
  } catch (e) {
    return false;
  }
};

export const clearSettings = async () => {
  await AsyncStorage.removeItem(SETTINGS_STORAGE_KEY);
};
