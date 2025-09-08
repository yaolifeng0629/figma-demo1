/**
 * Recipients.tsx
 *
 * Recipients page for managing and viewing recipient contacts.
 */

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Recipients() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title" style={styles.title}>
                Recipients
            </ThemedText>
            <ThemedText style={styles.description}>Manage your recipient contacts here.</ThemedText>
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
