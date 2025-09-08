/**
 * NotificationCard.tsx
 *
 * A notification card component that displays important messages with a logo,
 * title, description, and timestamp. Designed to be overlaid on background
 * images with proper transparency and theming support.
 *
 * Features:
 * - Logo display with customizable background color
 * - Title, message, and timestamp display
 * - Theme-aware styling (light/dark mode)
 * - Touch interaction support
 * - Accessibility compliance
 * - Glassmorphism effect with backdrop blur
 *
 * @author Team
 * @created 2024-12-28
 */

import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export interface NotificationCardProps {
  /** Main title of the notification */
  title: string;

  /** Detailed message content */
  message: string;

  /** Timestamp or time indicator (e.g., "3m ago") */
  timestamp: string;

  /** Logo image source (require() or URI) */
  logoSource: any;

  /** Background color for the logo container */
  logoBackgroundColor?: string;

  /** Whether the notification is visible */
  visible?: boolean;

  /** Callback when the card is pressed */
  onPress?: () => void;

  /** Theme color overrides */
  lightColor?: string;
  darkColor?: string;
}

/**
 * NotificationCard - Displays notification information in a card format
 *
 * A glassmorphism-styled card that shows notification details including
 * a logo, title, message, and timestamp. Supports theme-aware styling
 * and can be overlaid on background images.
 *
 * @param props - NotificationCard component props
 * @returns JSX.Element - The rendered notification card
 */
export function NotificationCard({
  title,
  message,
  timestamp,
  logoSource,
  logoBackgroundColor = '#FF6100',
  visible = true,
  onPress,
  lightColor,
  darkColor,
}: NotificationCardProps) {
  // Get theme colors for consistent styling
  const backgroundColor = useThemeColor(
    { light: lightColor || 'rgba(255, 255, 255, 0.9)', dark: darkColor || 'rgba(40, 40, 40, 0.9)' },
    'background'
  );

  const textColor = useThemeColor(
    { light: '#1A1A1A', dark: '#FFFFFF' },
    'text'
  );

  const subtextColor = useThemeColor(
    { light: '#666666', dark: '#CCCCCC' },
    'text'
  );

  // Don't render if not visible
  if (!visible) {
    return null;
  }

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Notification: ${title}, ${message}, ${timestamp}`}
      accessibilityHint="Tap to view notification details"
    >
      {/* Logo Section */}
      <View style={[styles.logoContainer, { backgroundColor: logoBackgroundColor }]}>
        <Image
          source={logoSource}
          style={styles.logo}
          contentFit="contain"
          transition={200}
          accessible={true}
          accessibilityLabel="Notification logo"
        />
      </View>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <ThemedText
          style={[styles.title, { color: textColor }]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </ThemedText>

        {/* Message */}
        <ThemedText
          style={[styles.message, { color: subtextColor }]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {message}
        </ThemedText>

        {/* Timestamp */}
        <ThemedText
          style={[styles.timestamp, { color: subtextColor }]}
          numberOfLines={1}
        >
          {timestamp}
        </ThemedText>
      </View>

      {/* Action Indicator (optional visual cue) */}
      <View style={styles.actionIndicator}>
        <View style={[styles.chevron, { borderColor: subtextColor }]} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // Main container with glassmorphism effect
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 16,
    maxWidth: width - 40, // Ensure it doesn't exceed screen width minus margins
    // Glassmorphism shadow effect
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    // Border for better definition
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },

  // Logo container with rounded background
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  // Logo image styling
  logo: {
    width: 28,
    height: 28,
  },

  // Content area containing text elements
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  // Title text styling
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    marginBottom: 2,
  },

  // Message text styling
  message: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    marginBottom: 4,
  },

  // Timestamp text styling
  timestamp: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    opacity: 0.8,
  },

  // Action indicator container
  actionIndicator: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  // Chevron arrow indicator
  chevron: {
    width: 8,
    height: 8,
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    transform: [{ rotate: '45deg' }],
    opacity: 0.6,
  },
});
