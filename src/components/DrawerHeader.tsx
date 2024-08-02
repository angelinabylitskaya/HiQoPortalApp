import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View } from './Themed';
import { Text } from 'react-native-ui-lib';

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
        <Text h5 style={styles.title}>{title}</Text>
        <MaterialIcons name="search" style={styles.icon} color="black" onPress={toggleDrawer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#DBDBDB',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
  },
  icon: {
    fontSize: 24,
    height: 48,
    width: 48,
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#1C1C1C',
  },
  title: {
    fontSize: 20,
    lineHeight: 48,
    color: '#1C1C1C',
  },
});
