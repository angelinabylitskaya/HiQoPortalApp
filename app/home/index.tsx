import * as React from 'react';
import { useNavigation } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { View, Text } from '@/components/Themed';

const ImagePlaceholder = require('@/assets/images/adaptive-icon.png');

export default function HomePage() {
  const [news, setNews] = React.useState<any[] | null>(null);
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: 'News',
    });
  }, [navigation]);

  React.useEffect(() => {
    const getNews = async () => {
      const querySnapshot = await getDocs(collection(getFirestore(), 'news'));
      const news = [];
      querySnapshot.forEach((doc) =>
        news.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      setNews(news);
    };

    getNews();
  }, []);

  return (
    <ScrollView>
      {news && (
        <View style={styles.container}>
          {news.map((newsItem) => (
            <Card key={newsItem.id}>
              <Card.Content>
                <Title>{newsItem.title}</Title>
                <Paragraph>{newsItem.description}</Paragraph>
              </Card.Content>
              <Card.Cover style={styles.image} source={newsItem.imgUrl ? { uri: newsItem.imgUrl } : ImagePlaceholder} />
              {/* <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions> */}
            </Card>
          ))}
        </View>
      )}

      {!news && (
        <View style={styles.centerContainer}>
          <Text>No news</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    objectFit: 'contain'
  }
});
