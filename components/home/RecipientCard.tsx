/**
 * RecipientCard.tsx
 *
 * Recipient card component displaying recent recipient information
 * including name, bank details, and country flag.
 */

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export interface RecipientData {
  id: string;
  firstName: string;
  lastName: string;
  bankName: string;
  accountNumber: string;
  avatarUrl?: string;
  flagUrl?: string;
  countryCode?: string;
}

export interface RecipientCardProps {
  recipient: RecipientData;
  onMorePress?: (recipient: RecipientData) => void;
  onCardPress?: (recipient: RecipientData) => void;
}

export function RecipientCard({
  recipient,
  onMorePress,
  onCardPress
}: RecipientCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onCardPress?.(recipient)}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Recipient ${recipient.firstName} ${recipient.lastName}`}
    >
      {/* More Options Button - positioned absolutely in top right */}
      <TouchableOpacity
        style={styles.moreButton}
        onPress={() => onMorePress?.(recipient)}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="More options"
      >
        <View style={styles.moreDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </TouchableOpacity>

      {/* Avatar with Flag Badge */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <View style={styles.bankIcon}>
            {/* Bank building icon placeholder */}
            <View style={styles.buildingIcon}>
              <View style={styles.buildingTop} />
              <View style={styles.buildingBody} />
              <View style={styles.buildingColumns}>
                <View style={styles.column} />
                <View style={styles.column} />
                <View style={styles.column} />
              </View>
            </View>
          </View>
        </View>

        {/* Country Flag Badge */}
        <View style={styles.flagBadge}>
          <View style={styles.flagIcon} />
        </View>
      </View>

      {/* Recipient Info */}
      <View style={styles.recipientInfo}>
        <ThemedText style={styles.firstName}>
          {recipient.firstName}
        </ThemedText>
        <ThemedText style={styles.lastName}>
          {recipient.lastName}
        </ThemedText>
        <ThemedText style={styles.bankName}>
          {recipient.bankName}
        </ThemedText>
        <ThemedText style={styles.accountNumber}>
          {recipient.accountNumber}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    minHeight: 140,
    width: (width - 52) / 2, // Half width minus padding and gap
    maxWidth: 160, // Prevent getting too narrow on small screens
    minWidth: 140, // Ensure minimum width for content
  },

  avatarContainer: {
    position: 'relative',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  bankIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buildingIcon: {
    width: 20,
    height: 20,
    position: 'relative',
  },

  buildingTop: {
    width: 16,
    height: 3,
    backgroundColor: '#999999',
    position: 'absolute',
    top: 0,
    left: 2,
  },

  buildingBody: {
    width: 20,
    height: 12,
    backgroundColor: '#CCCCCC',
    position: 'absolute',
    top: 3,
    left: 0,
  },

  buildingColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 6,
    left: 2,
    width: 16,
  },

  column: {
    width: 2,
    height: 8,
    backgroundColor: '#999999',
  },

  flagBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flagIcon: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FF4444', // Red placeholder for flag
  },

  recipientInfo: {
    flex: 1,
    width: '100%', // Ensure full width usage
  },

  firstName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
    flexShrink: 1, // Allow text to shrink if needed
  },

  lastName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
    flexShrink: 1, // Allow text to shrink if needed
  },

  bankName: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 2,
    flexShrink: 1, // Allow text to shrink if needed
  },

  accountNumber: {
    fontSize: 14,
    color: '#999999',
    flexShrink: 1, // Allow text to shrink if needed
  },

  moreButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  moreDots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 16,
    height: 4,
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#999999',
  },
});
