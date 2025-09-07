/**
 * Locations.tsx
 *
 * Locations page for finding nearby service locations.
 */

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Locations() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Locations
      </ThemedText>
      <ThemedText style={styles.description}>
        Find nearby service locations and ATMs.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 16,
  },
  description: {
    textAlign: 'center',
    opacity: 0.7,
  },
});
