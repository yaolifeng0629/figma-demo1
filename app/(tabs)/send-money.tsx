/**
 * SendMoney.tsx
 *
 * Send Money page for initiating money transfers.
 */

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function SendMoney() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Send Money
      </ThemedText>
      <ThemedText style={styles.description}>
        Send money to your contacts quickly and securely.
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
