/**
 * CustomTabBar.tsx
 *
 * A custom tab bar component that replicates the design from the provided image.
 * Features a prominent center button (Send Money) with rounded orange background,
 * and four other tab items with icons and labels.
 *
 * Features:
 * - 5 tab items with custom styling
 * - Prominent center button with orange background
 * - Icon and text labels for each tab
 * - Theme-aware colors
 * - Responsive design
 *
 * @author Team
 * @created 2024-12-28
 */

import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

// Get device dimensions for responsive layout
const { width } = Dimensions.get('window');

export interface TabItem {
  key: string;
  title: string;
  icon: string;
  onPress: () => void;
  isActive?: boolean;
}

export interface CustomTabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onTabPress: (tabKey: string) => void;
}

/**
 * CustomTabBar - Custom tab bar component with prominent center button
 *
 * Renders a horizontal tab bar with 5 items, where the center item (Send Money)
 * has a prominent orange circular background. Other tabs have standard styling
 * with icons and labels.
 *
 * @param tabs - Array of tab items to display
 * @param activeTab - Currently active tab key
 * @param onTabPress - Callback when a tab is pressed
 * @returns JSX.Element - The rendered custom tab bar
 */
export function CustomTabBar({ tabs, activeTab, onTabPress }: CustomTabBarProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  /**
   * Renders a standard tab item with icon and text
   */
  const renderTabItem = (tab: TabItem, index: number) => {
    const isActive = activeTab === tab.key;

    // Render standard tab items
    return (
      <TouchableOpacity
        key={tab.key}
        style={styles.tabContainer}
        onPress={() => onTabPress(tab.key)}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={tab.title}
        accessibilityState={{ selected: isActive }}
      >
        <IconSymbol
          name={tab.icon}
          size={24}
          color={isActive ? '#000000' : '#666666'}
        />
        <ThemedText
          style={[
            styles.tabLabel,
            {
              color: isActive ? '#000000' : '#666666',
            }
          ]}
        >
          {tab.title}
        </ThemedText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      {/* Main tab bar container with center cutout */}
      <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
        {/* Tab items container */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab, index) => {
            // Render center tab inline with others but with special styling
            if (index === 2) {
              return (
                <TouchableOpacity
                  key={tab.key}
                  style={styles.centerTabContainer}
                  onPress={() => onTabPress(tab.key)}
                  accessible={true}
                  accessibilityRole="button"
                  accessibilityLabel={tab.title}
                  accessibilityState={{ selected: activeTab === tab.key }}
                >
                  <View style={styles.centerTabButton}>
                    <IconSymbol
                      name={tab.icon}
                      size={28}
                      color="#FFFFFF"
                    />
                  </View>
                  <ThemedText style={styles.centerTabLabel}>
                    {tab.title}
                  </ThemedText>
                </TouchableOpacity>
              );
            }
            return renderTabItem(tab, index);
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Wrapper for the entire tab bar with FAB
  wrapper: {
    position: 'relative',
  },

  // Main container for the tab bar
  container: {
    paddingBottom: 20, // Extra padding for safe area
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
  },

  // Container for all tab items (including center button)
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end', // Align to bottom to accommodate taller center button
    paddingHorizontal: 10,
    paddingBottom: 5,
  },

  // Standard tab item container
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },

  // Center tab container
  centerTabContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },

  // Center tab button styling (larger, elevated)
  centerTabButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: -20, // Lift the button up slightly to make it prominent
  },

  // Center tab label styling
  centerTabLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },

  // Tab label text styling
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
    textAlign: 'center',
  },

});
