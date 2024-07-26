import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

import { View } from '@/components/Themed';
import NewsList from '@/components/NewsList';

export default function HomePage() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: 'HiQo News',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <NewsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
