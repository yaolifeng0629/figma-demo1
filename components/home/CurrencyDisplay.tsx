/**
 * CurrencyDisplay.tsx
 *
 * Currency exchange rate display component showing:
 * - Source currency amount (1 USD)
 * - Target currency amount (7.0010 CNY)
 * - Exchange rate controls and info icon
 */

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface CurrencyDisplayProps {
  fromCurrency: string;
  fromAmount: string;
  toCurrency: string;
  toAmount: string;
  onInfoPress?: () => void;
  onExchangePress?: () => void;
}

export function CurrencyDisplay({
  fromCurrency,
  fromAmount,
  toCurrency,
  toAmount,
  onInfoPress,
  onExchangePress
}: CurrencyDisplayProps) {
  return (
    <View style={styles.container}>
      <View style={styles.currencyInfo}>
        {/* From Currency */}
        <View style={styles.fromCurrencyRow}>
          <ThemedText style={styles.fromCurrencyText}>
            {fromAmount} {fromCurrency}
          </ThemedText>
          {/* <TouchableOpacity
            style={styles.exchangeButton}
            onPress={onExchangePress}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Switch currencies"
          >
            <IconSymbol name="chevron.right" size={12} color="#999999" />
          </TouchableOpacity> */}
        </View>

        {/* To Currency */}
        <View style={styles.toCurrencyRow}>
          <ThemedText style={styles.toCurrencyText}>
            {toAmount} {toCurrency}
          </ThemedText>
          {/* <TouchableOpacity
            style={styles.infoButton}
            onPress={onInfoPress}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Exchange rate information"
          >
            <View style={styles.infoIcon}>
              <ThemedText style={styles.infoText}>i</ThemedText>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },

  currencyInfo: {
    // Container for currency information
  },

  fromCurrencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },

  fromCurrencyText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
  },

  exchangeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  toCurrencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  toCurrencyText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#000000',
  },

  infoButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
  },
});
