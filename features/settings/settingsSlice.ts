import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_SETTINGS } from './settingsConstants';
import { SettingsState } from './settingsTypes';

const initialState: { settings: SettingsState } = {
  settings: DEFAULT_SETTINGS,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setAllSettings: (state, { payload }: PayloadAction<SettingsState>) => {
      state.settings = { ...payload };
    },
    toggleThemeMode: (state) => {
      const { themeMode } = state.settings;
      state.settings.themeMode = themeMode === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { setAllSettings, toggleThemeMode } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
