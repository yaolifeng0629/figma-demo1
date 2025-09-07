/**
 * Track.tsx
 *
 * Track page for monitoring transaction status.
 */

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Track() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Track
      </ThemedText>
      <ThemedText style={styles.description}>
        Track your money transfers and transaction history.
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
