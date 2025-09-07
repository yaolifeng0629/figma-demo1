/**
 * TransferCard.tsx
 *
 * Transfer card component displaying recent transfer information
 * including recipient details, amount, status, and action buttons.
 */

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export interface TransferData {
  id: string;
  recipientName: string;
  amount: string;
  currency: string;
  status: string;
  date: string;
  avatarUrl?: string;
}

export interface TransferCardProps {
  transfer: TransferData;
  onSharePress?: (transfer: TransferData) => void;
  onCardPress?: (transfer: TransferData) => void;
}

export function TransferCard({
  transfer,
  onSharePress,
  onCardPress
}: TransferCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onCardPress?.(transfer)}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Transfer to ${transfer.recipientName}, ${transfer.amount} ${transfer.currency}`}
    >
      {/* Status Icon */}
      <View style={styles.statusIcon}>
        <View style={styles.clockIcon}>
          {/* Clock icon placeholder */}
          <View style={styles.clockCircle}>
            <View style={styles.clockHand} />
          </View>
        </View>
      </View>

      {/* Transfer Info */}
      <View style={styles.transferInfo}>
        <ThemedText style={styles.recipientName}>
          {transfer.recipientName}
        </ThemedText>
        <ThemedText style={styles.amount}>
          {transfer.amount} {transfer.currency}
        </ThemedText>
        <ThemedText style={styles.status}>
          {transfer.status} · {transfer.date}
        </ThemedText>
      </View>

      {/* Share Button */}
      <TouchableOpacity
        style={styles.shareButton}
        onPress={() => onSharePress?.(transfer)}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Share transfer"
      >
        <ThemedText style={styles.shareButtonText}>Share</ThemedText>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  statusIcon: {
    width: 48,
    height: 48,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  clockIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  clockCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  clockHand: {
    width: 2,
    height: 8,
    backgroundColor: '#CCCCCC',
    position: 'absolute',
    top: 4,
  },

  transferInfo: {
    flex: 1,
  },

  recipientName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },

  amount: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
    marginBottom: 4,
  },

  status: {
    fontSize: 14,
    color: '#999999',
  },

  shareButton: {
    backgroundColor: '#FFE5CC',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  shareButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
});
