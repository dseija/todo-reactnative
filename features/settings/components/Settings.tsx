import { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';

import {
  Text,
  View,
  ViewContainer,
  ViewContent,
} from '../../../shared/components';

const SettingsView = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode((prevVal) => !prevVal);

  return (
    <ViewContainer>
      <ViewContent>
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>Dark Mode</Text>
          <Switch onValueChange={toggleDarkMode} value={darkMode} />
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
