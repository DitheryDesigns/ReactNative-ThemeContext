import React from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';

export default function App() {
  const {height} = useWindowDimensions();

  return (
    <View style={[styles.container, {height}, StyleSheet.absoluteFill]}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
