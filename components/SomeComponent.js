import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTheme } from '../contexts/ThemeContext/ThemeContext';

const SomeComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={{ color: theme.textColor }}>This is themed text!</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} color={theme.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SomeComponent;
