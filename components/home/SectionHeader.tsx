/**
 * SectionHeader.tsx
 *
 * Reusable section header component with title and optional "View all" link.
 */

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export interface SectionHeaderProps {
  title: string;
  showViewAll?: boolean;
  onViewAllPress?: () => void;
}

export function SectionHeader({
  title,
  showViewAll = true,
  onViewAllPress
}: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>
        {title}
      </ThemedText>

      {showViewAll && (
        <TouchableOpacity
          onPress={onViewAllPress}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={`View all ${title.toLowerCase()}`}
        >
          <ThemedText style={styles.viewAllText}>
            View all
          </ThemedText>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
});
