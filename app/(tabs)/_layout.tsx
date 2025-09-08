import { Tabs, useRouter, useSegments } from 'expo-router';
import { ArrowLeftRight, Home, MapPin, Send, Users } from 'lucide-react-native';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TabItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    isPrimary?: boolean;
    onPress: () => void;
}

function CustomTabBar() {
    const segments = useSegments();
    const router = useRouter();
    const insets = useSafeAreaInsets();

    // 获取当前活跃的tab，处理根路径和index路径
    const currentSegment = segments[segments.length - 1];
    let activeTab: string;

    // 处理不同的路由情况
    if (!currentSegment) {
        // 根路径或空路径，默认为 home
        activeTab = 'index';
    } else if (segments.some(segment => segment === '(tabs)')) {
        // 在 tabs 路由内，获取最后一个segment
        const tabsIndex = segments.findIndex(segment => segment === '(tabs)');
        const tabSegment = segments[tabsIndex + 1];
        activeTab = tabSegment || 'index';
    } else {
        // 其他情况
        activeTab = currentSegment;
    }

    const tabs: TabItem[] = [
        {
            id: 'index',
            label: 'Home',
            icon: <Home size={24} />,
            onPress: () => router.push('/'),
        },
        {
            id: 'recipients',
            label: 'Recipients',
            icon: <Users size={24} />,
            onPress: () => router.push('/recipients'),
        },
        {
            id: 'send-money',
            label: 'Send Money',
            icon: <Send size={24} />,
            isPrimary: true,
            onPress: () => router.push('/send-money'),
        },
        {
            id: 'track',
            label: 'Track',
            icon: <ArrowLeftRight size={24} />,
            onPress: () => router.push('/track'),
        },
        {
            id: 'locations',
            label: 'Locations',
            icon: <MapPin size={24} />,
            onPress: () => router.push('/locations'),
        },
    ];

    const handleTabPress = (tabKey: string) => {
        const tab = tabs.find(item => item.id === tabKey);
        if (tab) {
            tab.onPress();
        }
    };

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <View style={styles.wrapper}>
                {/* Floating Action Button */}
                <View style={styles.fabContainer}>
                    <TouchableOpacity onPress={() => handleTabPress('send-money')} style={styles.fab}>
                        <Send size={24} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Navigation Bar */}
                <View style={styles.navBar}>
                    {tabs.map(tab => (
                        <TouchableOpacity key={tab.id} onPress={() => handleTabPress(tab.id)} style={styles.tabButton}>
                            {tab.isPrimary ? (
                                <View style={styles.tabContent}>
                                    {/* 为 FAB 留出空间的占位符 */}
                                    <View style={styles.fabPlaceholder} />
                                    <Text style={styles.inactiveLabel}>{tab.label}</Text>
                                </View>
                            ) : (
                                <View style={styles.tabContent}>
                                    <View style={styles.iconContainer}>
                                        {React.cloneElement(tab.icon as React.ReactElement<any>, {
                                            color: activeTab === tab.id ? 'black' : '#4B5563',
                                        })}
                                    </View>
                                    <Text style={activeTab === tab.id ? styles.activeLabel : styles.inactiveLabel}>
                                        {tab.label}
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

export default function TabLayout() {
    return (
        <Tabs
            initialRouteName="index" // 确保默认显示 home 页面
            screenOptions={{
                headerShown: false,
                tabBarStyle: { display: 'none' }, // 隐藏默认的标签栏
            }}
            tabBar={() => <CustomTabBar />} // 使用自定义标签栏
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />
            <Tabs.Screen name="recipients" />
            <Tabs.Screen name="send-money" />
            <Tabs.Screen name="track" />
            <Tabs.Screen name="locations" />
            <Tabs.Screen name="explore" />
            <Tabs.Screen name="transfer-detail" />
            <Tabs.Screen name="transfer-detail-extra-docs" />
            <Tabs.Screen name="transfer-detail-refund" />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
    },
    wrapper: {
        position: 'relative',
    },
    fabContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: -32,
        zIndex: 10,
    },
    fab: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#FF6E13',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    navBar: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabContent: {
        alignItems: 'center',
        paddingVertical: 12,
    },
    fabPlaceholder: {
        width: 24,
        height: 24,
        marginBottom: 4,
    },
    iconContainer: {
        marginBottom: 4,
    },
    activeLabel: {
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        color: 'black',
    },
    inactiveLabel: {
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        color: '#374151',
    },
});
