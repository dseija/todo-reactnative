import { StyleSheet, Switch } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import {
  Text,
  View,
  ViewContainer,
  ViewContent,
} from '../../../shared/components';
import { toggleThemeMode } from '../settingsSlice';

const SettingsView = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings.settings);

  const toggleDarkMode = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <ViewContainer>
      <ViewContent>
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>Dark Mode</Text>
          <Switch
            onValueChange={toggleDarkMode}
            value={settings.themeMode === 'dark'}
          />
        </View>
      </ViewContent>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  listItemText: {
    fontSize: 16,
  },
});

export default SettingsView;
