import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import NewsList from '@/components/NewsList';

export default function HomePage() {
  return (
    <View style={{ flex: 1 }}>
      <NewsList />
    </View>
  );
}
