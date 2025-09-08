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
import { NotificationCard } from '@/components/home/NotificationCard';
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

    const handlePress = () => {
        console.log('Notification card pressed');
    };

    return (
        <ThemedView style={styles.container}>
            {/* Status bar with theme-aware styling */}
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

            {/* Full width image without margins */}
            {/* Background image as absolute positioned element */}
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

            {/* Notification card positioned absolutely in the center */}
            <NotificationCard
                title="Additional info needed"
                message="We need a quick document upload to finish your transfer..."
                timestamp="3m ago"
                logoSource={require('@/assets/images/logo-sonia.png')}
                logoBackgroundColor="#FF6100"
                visible={true}
                onPress={handlePress}
                lightColor="rgba(255, 255, 255, 0.9)"
                darkColor="rgba(40, 40, 40, 0.9)"
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    // Main container - fills entire screen and provides positioning context
    container: {
        flex: 1,
        backgroundColor: '#000000', // Fallback color while image loads
        position: 'relative', // Enable absolute positioning for children
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
    },

    // Background image styling - full screen coverage
    backgroundImage: {
        position: 'absolute', // Position behind other content
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
});
