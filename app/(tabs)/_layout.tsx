import { Tabs, useRouter, useSegments } from 'expo-router';
import React from 'react';

import { CustomTabBar, TabItem } from '@/components/CustomTabBar';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const segments = useSegments();

  // Get current active tab from segments
  const activeTab = segments[segments.length - 1] || 'index';

  // Define tab items matching the design from the image
  const tabItems: TabItem[] = [
    {
      key: 'index',
      title: 'Home',
      icon: 'house.fill',
      onPress: () => router.push('/'),
    },
    {
      key: 'recipients',
      title: 'Recipients',
      icon: 'person.2.fill',
      onPress: () => router.push('/recipients'),
    },
    {
      key: 'send-money',
      title: 'Send Money',
      icon: 'paperplane.fill',
      onPress: () => router.push('/send-money'),
    },
    {
      key: 'track',
      title: 'Track',
      icon: 'arrow.triangle.2.circlepath',
      onPress: () => router.push('/track'),
    },
    {
      key: 'locations',
      title: 'Locations',
      icon: 'location.fill',
      onPress: () => router.push('/locations'),
    },
  ];

  const handleTabPress = (tabKey: string) => {
    // Find the tab item and execute its onPress
    const tab = tabItems.find(item => item.key === tabKey);
    if (tab) {
      tab.onPress();
    }
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, // Hide default tab bar
      }}
      tabBar={(props) => (
        <CustomTabBar
          tabs={tabItems}
          activeTab={activeTab}
          onTabPress={handleTabPress}
        />
      )}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="recipients" />
      <Tabs.Screen name="send-money" />
      <Tabs.Screen name="track" />
      <Tabs.Screen name="locations" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="background" />
    </Tabs>
  );
}
