import * as React from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { View, Text } from '@/components/Themed';
import { getNews } from '@/core/api/news';
import { Link } from 'expo-router';

const ImagePlaceholder = require('@/assets/images/adaptive-icon.png');

export default function NewsList() {
  const [news, setNews] = React.useState<any[] | null>(null);

  React.useEffect(() => {
    try {
      getNews().then(setNews);
    } catch (e) {
      console.log('Failed to load news', e);
      setNews([]);
    }
  }, []);

  return (
    <>
      {news && (
        <ScrollView>
          <View style={styles.list}>
            {news.map((newsItem) => (
              <Link
                href={{
                  pathname: '/news/details/[id]',
                  params: { id: newsItem.id },
                }}
                asChild
                key={newsItem.id}
              >
                <Pressable>
                  <Card>
                    <Card.Content>
                      <Title>{newsItem.title}</Title>
                    </Card.Content>
                    <Card.Cover source={newsItem.imgUrl ? { uri: newsItem.imgUrl } : ImagePlaceholder} />
                  </Card>
                </Pressable>
              </Link>
            ))}
          </View>
        </ScrollView>
      )}

      {news && !news.length && (
        <View style={styles.centerContainer}>
          <Text>No news</Text>
        </View>
      )}

      {!news && (
        <View style={styles.centerContainer}>
          <Text>Loading news</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    gap: 16,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
