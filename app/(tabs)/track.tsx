/**
 * Track.tsx
 *
 * Track page for monitoring transaction status.
 */

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Track() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title" style={styles.title}>
                Track
            </ThemedText>
            <ThemedText style={styles.description}>Track your money transfers and transaction history.</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        marginBottom: 16,
        color: '#000000',
    },
    description: {
        textAlign: 'center',
        color: '#000000',
    },
});
