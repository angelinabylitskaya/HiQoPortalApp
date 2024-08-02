import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Redirect, Slot, Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Text } from 'react-native-ui-lib';
import { FontAwesome } from '@expo/vector-icons';
import CustomDrawerContent from '@/components/CustomDrawerContent';

import { useAuthContext } from '@/core/contexts/AuthContext';
import DrawerHeader from '@/components/DrawerHeader';

export default function ProtectedAppLayout() {
  const { isLoading, isSignedIn } = useAuthContext();
  console.log(isLoading, isSignedIn);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

//   if (!isSignedIn) {
//     return <Redirect href="auth/Login" />;
//   }

  if (Platform.OS === 'android') {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer drawerContent={() => <CustomDrawerContent />}>
          <Drawer.Screen
            name="news"
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="team"
            options={{
              header: () => <DrawerHeader title="Team" />,
            }}
          />
          <Drawer.Screen
            name="profile"
            options={{
              header: () => <DrawerHeader title="Profile" />,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    );
  }

  if (Platform.OS === 'ios') {
    return (
      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
          name="news"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="team"
          options={{
            title: 'Team',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="users" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          }}
        />
      </Tabs>
    );
  }

  return <Slot />;
}
