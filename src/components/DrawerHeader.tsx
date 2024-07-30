import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View, Text } from './Themed';

export default function DrawerHeader({ title }) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={[styles.view, { paddingTop: insets.top }]}>
      <View style={styles.container}>
        <MaterialIcons name="menu" style={styles.icon} color="black" onPress={toggleDrawer} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  container: {
    paddingTop: 16,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    marginRight: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 500
  },
});
