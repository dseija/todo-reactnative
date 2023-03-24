import { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';

import { Text, View } from '../../../shared/components/Themed';

export default function SettingsView() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode((prevVal) => !prevVal);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>Dark Mode</Text>
          <Switch onValueChange={toggleDarkMode} value={darkMode} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: 20,
    width: '100%',
    maxWidth: '396px',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  listItemText: {
    fontSize: 16,
  },
});
