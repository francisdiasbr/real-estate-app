import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function PropertyDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PropertyDetails</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
  }
});

