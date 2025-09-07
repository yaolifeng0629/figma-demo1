/**
 * TransferDetailRefund.tsx
 *
 * Transfer detail screen for refund cases, showing comprehensive information about
 * a cancelled transfer including order details, recipient information, and refund timeline.
 *
 * Features:
 * - Back navigation
 * - Transfer details with order number and status
 * - Recipient information
 * - Refund timeline with progress indicators
 * - Refund-specific styling and messaging
 */

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

export default function TransferDetailRefundScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Mock refund data based on Figma design
  const transferData = {
    id: params.id || '1',
    orderNumber: 'US1992037121',
    status: 'Under review',
    recipientName: 'Grace Wong',
    amountSent: '10 USD',
    timeline: [
      {
        title: 'Transfer submitted',
        date: 'Sep 2 at 7:30pm',
        completed: true,
        current: false,
      },
      {
        title: 'Under review',
        date: 'Sep 2 at 9:15pm',
        completed: true,
        current: false,
      },
      {
        title: 'Review not approved – transfer cancelled',
        date: 'Sep 3 at 10:23am',
        description: 'Sorry, the transfer didn\'t meet regulatory requirements. A full refund will be issued automatically.',
        completed: true,
        current: false,
        cancelled: true,
      },
      {
        title: 'Refund initiated',
        date: 'Sep 3 at 11:43am',
        completed: true,
        current: false,
        refund: true,
      },
      {
        title: 'Refund in progress',
        completed: true,
        current: false,
        refund: true,
      },
      {
        title: 'Refund completed',
        description: 'expected in 3–10 business days',
        completed: false,
        current: true,
        refund: true,
      },
    ],
  };

  const handleBackPress = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F6F6F6" />

      {/* Header with back button and profile */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <View style={styles.backIcon}>
            <View style={styles.backArrow} />
          </View>
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <ThemedText style={styles.headerTitle}>Transfer details</ThemedText>
        </View>

        {/* Profile icon */}
        <View style={styles.profileIcon} />
      </View>

      {/* Navigation Tabs */}
      <View style={styles.navigationTabs}>
        <TouchableOpacity style={styles.activeTab}>
          <ThemedText style={styles.activeTabText}>Timeline</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <ThemedText style={styles.inactiveTabText}>Summary</ThemedText>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Transfer Details Section */}
        <View style={styles.section}>
          <ThemedView style={styles.card}>
            <ThemedText style={styles.sectionTitle}>Transfer details</ThemedText>

            <View style={styles.detailRow}>
              <ThemedText style={styles.detailLabel}>Order number</ThemedText>
              <ThemedText style={styles.detailValue}>{transferData.orderNumber}</ThemedText>
            </View>

            <View style={styles.detailRow}>
              <ThemedText style={styles.detailLabel}>Status</ThemedText>
              <View style={styles.statusContainer}>
                <ThemedText style={styles.detailValue}>{transferData.status}</ThemedText>
                <View style={styles.statusIndicator} />
              </View>
            </View>
          </ThemedView>
        </View>

        {/* Recipient Section */}
        <View style={styles.section}>
          <ThemedView style={styles.card}>
            <ThemedText style={styles.sectionTitle}>Recipient</ThemedText>

            <View style={styles.detailRow}>
              <ThemedText style={styles.detailLabel}>Name</ThemedText>
              <ThemedText style={styles.detailValue}>{transferData.recipientName}</ThemedText>
            </View>

            <View style={styles.detailRow}>
              <ThemedText style={styles.detailLabel}>Amount sent</ThemedText>
              <ThemedText style={styles.detailValue}>{transferData.amountSent}</ThemedText>
            </View>
          </ThemedView>
        </View>

        {/* Timeline Section */}
        <View style={styles.timelineSection}>
          <ThemedView style={styles.timelineCard}>
            {transferData.timeline.map((item, index) => (
              <View key={index} style={styles.timelineItem}>
                {/* Timeline indicator */}
                <View style={styles.timelineIndicatorContainer}>
                  <View
                    style={[
                      styles.timelineIndicator,
                      item.completed && styles.timelineIndicatorCompleted,
                      item.current && styles.timelineIndicatorCurrent,
                      item.cancelled && styles.timelineIndicatorCancelled,
                      item.refund && styles.timelineIndicatorRefund,
                    ]}
                  >
                    {item.completed && !item.cancelled && (
                      <View style={styles.checkmark} />
                    )}
                    {item.cancelled && (
                      <View style={styles.crossmark}>
                        <View style={styles.crossLine1} />
                        <View style={styles.crossLine2} />
                      </View>
                    )}
                  </View>

                  {/* Connecting line */}
                  {index < transferData.timeline.length - 1 && (
                    <View
                      style={[
                        styles.timelineLine,
                        (item.completed || item.current) && styles.timelineLineCompleted,
                      ]}
                    />
                  )}
                </View>

                {/* Timeline content */}
                <View style={styles.timelineContent}>
                  <ThemedText
                    style={[
                      styles.timelineTitle,
                      item.completed && styles.timelineTitleCompleted,
                      !item.completed && styles.timelineTitlePending,
                      item.current && styles.timelineTitleCurrent,
                    ]}
                  >
                    {item.title}
                  </ThemedText>

                  {item.date && (
                    <ThemedText style={styles.timelineDate}>{item.date}</ThemedText>
                  )}

                  {item.description && (
                    <ThemedText
                      style={[
                        styles.timelineDescription,
                        item.current && styles.timelineDescriptionCurrent
                      ]}
                    >
                      {item.description}
                    </ThemedText>
                  )}
                </View>
              </View>
            ))}
          </ThemedView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 10 : 20,
    paddingBottom: 10,
    backgroundColor: '#F6F6F6',
  },

  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backArrow: {
    width: 12,
    height: 12,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: '#393939',
    transform: [{ rotate: '-45deg' }],
  },

  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#393939',
  },

  profileIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
  },

  navigationTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#E4E4E4',
    position: 'relative',
    backgroundColor: '#F6F6F6',
  },

  activeTab: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FF6E14',
    marginBottom: -2,
  },

  inactiveTab: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  activeTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#393939',
  },

  inactiveTabText: {
    fontSize: 14,
    color: '#717171',
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 100,
  },

  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  timelineSection: {
    paddingHorizontal: 16,
    marginTop: 16,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#393939',
    marginBottom: 16,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  detailLabel: {
    fontSize: 14,
    color: '#393939',
    flex: 1,
  },

  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#393939',
    textAlign: 'right',
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  statusIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FF6E14',
  },

  timelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },

  timelineIndicatorContainer: {
    alignItems: 'center',
    marginRight: 16,
    width: 20,
    position: 'relative',
  },

  timelineIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#C3C3C3',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  timelineIndicatorCompleted: {
    backgroundColor: '#313F5B',
    borderColor: '#313F5B',
  },

  timelineIndicatorCurrent: {
    backgroundColor: '#313F5B',
    borderColor: '#313F5B',
  },

  timelineIndicatorCancelled: {
    backgroundColor: '#BC1215',
    borderColor: '#BC1215',
  },

  timelineIndicatorRefund: {
    backgroundColor: '#313F5B',
    borderColor: '#313F5B',
  },

  checkmark: {
    width: 8,
    height: 5,
    borderBottomWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: '#FFFFFF',
    transform: [{ rotate: '45deg' }],
  },

  crossmark: {
    width: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  crossLine1: {
    position: 'absolute',
    width: 8,
    height: 1.5,
    backgroundColor: '#FFFFFF',
    transform: [{ rotate: '45deg' }],
  },

  crossLine2: {
    position: 'absolute',
    width: 8,
    height: 1.5,
    backgroundColor: '#FFFFFF',
    transform: [{ rotate: '-45deg' }],
  },

  timelineLine: {
    position: 'absolute',
    left: 9,
    top: 22,
    width: 2,
    height: 50,
    backgroundColor: '#C3C3C3',
    zIndex: 1,
  },

  timelineLineCompleted: {
    backgroundColor: '#313F5B',
  },

  timelineContent: {
    flex: 1,
    paddingTop: 2,
  },

  timelineTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },

  timelineTitleCompleted: {
    color: '#333333',
  },

  timelineTitlePending: {
    color: '#8D8D8D',
  },

  timelineTitleCurrent: {
    color: '#8D8D8D',
  },

  timelineDate: {
    fontSize: 12,
    color: '#8D8D8D',
    marginBottom: 4,
  },

  timelineDescription: {
    fontSize: 12,
    color: '#8D8D8D',
    lineHeight: 16,
    marginBottom: 4,
  },

  timelineDescriptionCurrent: {
    color: '#FF6E14',
  },
});
