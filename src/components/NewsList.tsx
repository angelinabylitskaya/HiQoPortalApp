import * as React from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Image, Dimensions } from 'react-native';
import { View, Card, Text } from 'react-native-ui-lib';

import { getNews } from '@/core/api/news';
import { Ionicons } from '@expo/vector-icons';

const ImagePlaceholder = require('@/assets/images/summer-camp.jpg');
const windowWidth = Dimensions.get('window').width;

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
          {news.map((newsItem, i) => (
            <View gap-16 paddingT-24 key={newsItem.id}>
              <View paddingH-16 gap-8>
                <Text h5Medium>{newsItem.title}</Text>
                <View>
                  <Text helperText neutral400>
                    Written by{' '}
                    <Text helperText neutral400 underline>
                      Oksana Borisenko
                    </Text>
                  </Text>
                  <Text helperText neutral400>
                    Tuesday, 09 July 2024, 17:22
                  </Text>
                </View>
              </View>
              <View height={windowWidth * 0.625} width={'100%'}>
                <Image style={{ objectFit: 'contain', width: '100%', maxHeight: '100%' }} source={ImagePlaceholder} />
              </View>
              <View marginH-16 paddingB-16 gap-16 style={i < news.length ? styles.divider : {}}>
                <Text body2>{newsItem.description}</Text>
                <Link
                  href={{
                    pathname: '/news/details/[id]',
                    params: { id: newsItem.id },
                  }}
                  asChild
                  key={newsItem.id}
                >
                  <Text bodyMedium brand uppercase>
                    read more
                  </Text>
                </Link>
                <Pressable style={{ flexDirection: 'row', gap: 4 }}>
                  <Text subtitle1 neutral300>
                    3
                  </Text>
                  <Text subtitle1 neutral300>
                    <Ionicons name="heart" size={16} />
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      )}

      {news && !news.length && (
        <View flex center>
          <Text>No news</Text>
        </View>
      )}

      {!news && (
        <View flex center>
          <Text>Loading news</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1
  },
});
