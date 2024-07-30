import { StyleSheet, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Text } from '@/components/Themed';
import { useAuthContext } from '@/core/contexts/AuthContext';
import { Link } from 'expo-router';

const ImagePlaceholder = require('@/assets/images/adaptive-icon.png');

type ItemProps = {
  title: string;
  href: string;
};

const routes: ItemProps[] = [
  {
    href: 'news',
    title: 'News',
  },
  {
    href: 'team',
    title: 'Team',
  },
  {
    href: 'profile',
    title: 'Profile',
  },
];

const Item = ({ href, title }: ItemProps) => (
  <View>
    <Link href={href} style={styles.link}>{title}</Link>
  </View>
);

export default function CustomDrawerContent() {
  const { user } = useAuthContext();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.profile}>
        <Image source={ImagePlaceholder} style={styles.image} />
        <Text style={styles.padding}>{user?.email}</Text>
      </View>
      <View style={styles.container}>
        <FlatList data={routes} renderItem={({ item }) => <Item {...item} />} keyExtractor={(item) => item.href} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    borderBottomWidth: 2,
    borderBottomColor: '#eee'
  },
  padding: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
  link: {
    padding: 16,
    marginBottom: 4,
    backgroundColor: '#eee'
  },
});
