/**
 * HomeHeader.tsx
 *
 * Header component for the home screen containing:
 * - User avatar on the left
 * - "Refer and earn" button in the center
 * - Help/info button on the right
 */

import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export interface HomeHeaderProps {
  onReferPress?: () => void;
  onHelpPress?: () => void;
  onProfilePress?: () => void;
}

export function HomeHeader({
  onReferPress,
  onHelpPress,
  onProfilePress
}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Left Profile Avatar */}
      <TouchableOpacity
        style={styles.profileButton}
        onPress={onProfilePress}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Open profile"
      >
        <View style={styles.profileAvatar}>
          {/* User avatar icon instead of home icon */}
          <View style={styles.avatarIcon}>
            <View style={styles.avatarHead} />
            <View style={styles.avatarBody} />
          </View>
        </View>
      </TouchableOpacity>

      {/* Right side container for Refer button and Help button */}
      <View style={styles.rightContainer}>
        {/* Refer and Earn Button */}
        <TouchableOpacity
          style={styles.referButton}
          onPress={onReferPress}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Refer and earn"
        >
          <View style={styles.referContent}>
            <IconSymbol name="paperplane.fill" size={16} color="#2D7D32" />
            <ThemedText style={styles.referText}>Refer and earn</ThemedText>
          </View>
        </TouchableOpacity>

        {/* Help Button */}
        <TouchableOpacity
          style={styles.helpButton}
          onPress={onHelpPress}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Help and support"
        >
          <View style={styles.helpIcon}>
            <ThemedText style={styles.helpText}>?</ThemedText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },

  profileButton: {
    width: 44,
    height: 44,
  },

  profileAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  // Avatar icon styles
  avatarIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarHead: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#666666',
    marginBottom: 2,
  },

  avatarBody: {
    width: 14,
    height: 8,
    borderRadius: 7,
    backgroundColor: '#666666',
  },

  // Right container for refer button and help button
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 16,
  },

  referButton: {
    marginRight: 12,
  },

  referContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8F5E8',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    minHeight: 44,
  },

  referText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D7D32',
    marginLeft: 8,
  },

  helpButton: {
    width: 44,
    height: 44,
  },

  helpIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  helpText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666666',
  },
});
