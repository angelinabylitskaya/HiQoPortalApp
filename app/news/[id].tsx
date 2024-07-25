import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import { View, Text } from '@/components/Themed';
import { getNewsById } from '@/core/api/news';

const ImagePlaceholder = require('@/assets/images/adaptive-icon.png');

export default function NewsDetails() {
  const [news, setNews] = useState(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (news?.title) {
      navigation.setOptions({
        title: news.title,
      });
    }
  }, [news]);

  React.useEffect(() => {
    getNewsById(id).then(setNews);
  }, [id]);

  if (!news) {
    return <Text style={styles.text}>Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={ImagePlaceholder} style={styles.image} />
      <Text style={styles.text}>{news.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    paddingTop: 20,
  },
});
