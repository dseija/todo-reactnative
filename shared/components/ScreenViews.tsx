import { StyleSheet } from 'react-native';
import { View, ViewProps } from './Themed';

export const ViewContainer = (props: ViewProps) => {
  return <View style={styles.container} {...props} />;
};

export const ViewContent = (props: ViewProps) => {
  return <View style={styles.content} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    width: '100%',
    maxWidth: '396px',
  },
});
