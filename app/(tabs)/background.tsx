/**
 * Background.tsx
 *
 * A dedicated page that displays the home_bg.png image as a full-screen background.
 * This component focuses solely on showcasing the background image with optimal
 * display properties and theme support.
 *
 * Features:
 * - Full-screen image display
 * - Responsive image scaling
 * - Theme-aware status bar
 * - Memory-efficient image loading
 *
 * @author Team
 * @created 2024-12-28
 */

import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Get device dimensions for responsive layout
const { width, height } = Dimensions.get('window');

/**
 * Background - Full-screen background image display component
 *
 * Renders the home_bg.png image as a full-screen background with optimized
 * display properties. The image covers the entire screen while maintaining
 * aspect ratio and providing smooth loading transitions.
 *
 * @returns JSX.Element - The rendered background display component
 */
export default function Background() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={styles.container}>
      {/* Status bar with theme-aware styling */}
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

      {/* Full width image without margins */}
      <Image
        source={require('@/assets/temp/home_bg.png')}
        style={styles.backgroundImage}
        contentFit="contain"
        transition={300}
        cachePolicy="memory-disk"
        priority="high"
        // Accessibility support
        accessible={true}
        accessibilityLabel="Home background image"
        accessibilityRole="image"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  // Main container - fills entire screen without any padding or margin
  container: {
    flex: 1,
    backgroundColor: '#000000', // Fallback color while image loads
    justifyContent: 'center', // Center the image vertically
    alignItems: 'center', // Center the image horizontally
  },

  // Background image styling - full width with auto height, no margins
  backgroundImage: {
    width: '100%', // Full screen width (100%)
    height: '100%', // Full available height
  },
});
