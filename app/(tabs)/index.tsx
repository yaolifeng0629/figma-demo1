/**
 * Home Screen - Transfer Organized
 *
 * Main home screen for the transfer application with properly encapsulated components:
 * - HomeHeader: User avatar, "Refer and earn" button, help icon
 * - CurrencyDisplay: Exchange rate information
 * - NotificationBanner: Important user notifications
 * - TransferCard: Recent transfer information
 * - RecipientCard: Recent recipient information
 *
 * Based on the provided UI design with component-based architecture.
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

// Import custom home components
import { CurrencyDisplay } from '@/components/home/CurrencyDisplay';
import { HomeHeader } from '@/components/home/HomeHeader';
import { NotificationBanner } from '@/components/home/NotificationBanner';
import { RecipientCard, RecipientData } from '@/components/home/RecipientCard';
import { SectionHeader } from '@/components/home/SectionHeader';
import { TransferCard, TransferData } from '@/components/home/TransferCard';

export default function HomeScreen() {
  // State for notification banner
  const [showNotification, setShowNotification] = useState(true);

  // Sample data for transfers
  const recentTransfers: TransferData[] = [
    {
      id: '1',
      recipientName: 'Grace Wong',
      amount: '10',
      currency: 'USD',
      status: 'Under review',
      date: 'Sep 2',
    }
  ];

  // Sample data for recipients
  const recentRecipients: RecipientData[] = [
    {
      id: '1',
      firstName: 'Bing',
      lastName: 'Chen',
      bankName: 'Bank of China Lim...',
      accountNumber: '6414',
      countryCode: 'CN',
    }
  ];

  // Event handlers
  const handleReferPress = () => {
    console.log('Refer and earn pressed');
  };

  const handleHelpPress = () => {
    console.log('Help pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile pressed');
  };

  const handleCurrencyInfo = () => {
    console.log('Currency info pressed');
  };

  const handleExchangePress = () => {
    console.log('Exchange currencies pressed');
  };

  const handleNotificationDismiss = () => {
    setShowNotification(false);
  };

  const handleTransferShare = (transfer: TransferData) => {
    console.log('Share transfer:', transfer.id);
  };

  const handleTransferPress = (transfer: TransferData) => {
    console.log('Transfer pressed:', transfer.id);
  };

  const handleRecipientMore = (recipient: RecipientData) => {
    console.log('Recipient more options:', recipient.id);
  };

  const handleRecipientPress = (recipient: RecipientData) => {
    console.log('Recipient pressed:', recipient.id);
  };

  const handleViewAllTransfers = () => {
    console.log('View all transfers');
  };

  const handleViewAllRecipients = () => {
    console.log('View all recipients');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header Component */}
        <HomeHeader
          onReferPress={handleReferPress}
          onHelpPress={handleHelpPress}
          onProfilePress={handleProfilePress}
        />

        {/* Currency Display Component */}
        <CurrencyDisplay
          fromAmount="1"
          fromCurrency="USD"
          toAmount="7.0010"
          toCurrency="CNY"
          onInfoPress={handleCurrencyInfo}
          onExchangePress={handleExchangePress}
        />

        {/* Notification Banner Component */}
        <NotificationBanner
          message="We're noticed your recent transfer is taking longer than expected. We're working on it! Thank you for your patience! Tap 'Ask for Help' if you need support."
          visible={showNotification}
          onDismiss={handleNotificationDismiss}
        />

        {/* Recent Transfers Section */}
        <View style={styles.section}>
          <SectionHeader
            title="RECENT TRANSFERS"
            onViewAllPress={handleViewAllTransfers}
          />

          <View style={styles.cardsContainer}>
            {recentTransfers.map((transfer) => (
              <TransferCard
                key={transfer.id}
                transfer={transfer}
                onSharePress={handleTransferShare}
                onCardPress={handleTransferPress}
              />
            ))}
          </View>
        </View>

        {/* Recent Recipients Section */}
        <View style={styles.section}>
          <SectionHeader
            title="RECENT RECIPIENTS"
            onViewAllPress={handleViewAllRecipients}
          />

          <View style={styles.recipientCardsContainer}>
            {recentRecipients.map((recipient) => (
              <RecipientCard
                key={recipient.id}
                recipient={recipient}
                onMorePress={handleRecipientMore}
                onCardPress={handleRecipientPress}
              />
            ))}
          </View>
        </View>

        {/* Bottom spacing for tab bar */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 100, // Extra space for tab bar
  },

  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },

  cardsContainer: {
    gap: 12,
  },

  recipientCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  bottomSpacing: {
    height: 20,
  },
});
