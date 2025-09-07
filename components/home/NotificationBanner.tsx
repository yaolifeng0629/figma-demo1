/**
 * NotificationBanner.tsx
 *
 * Notification banner component displaying important messages to users
 * with dismiss functionality and orange accent border.
 */

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export interface NotificationBannerProps {
  message: string;
  onDismiss?: () => void;
  visible?: boolean;
}

export function NotificationBanner({
  message,
  onDismiss,
  visible = true
}: NotificationBannerProps) {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText style={styles.messageText}>
          {message}
        </ThemedText>
      </View>

      {onDismiss && (
        <TouchableOpacity
          style={styles.dismissButton}
          onPress={onDismiss}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Dismiss notification"
        >
          <View style={styles.dismissIcon}>
            <ThemedText style={styles.dismissText}>×</ThemedText>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9F43',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  content: {
    flex: 1,
    paddingRight: 12,
  },

  messageText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333333',
  },

  dismissButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dismissIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dismissText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#999999',
  },
});
