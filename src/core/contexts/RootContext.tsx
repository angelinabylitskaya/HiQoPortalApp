import { PropsWithChildren, useEffect, useRef } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { DefaultTheme as DefaultPaperTheme, Provider as PaperProvider } from 'react-native-paper';
import * as Notifications from 'expo-notifications';

import AuthContextProvider from '@/core/contexts/AuthContext';
import { useColorScheme } from '@/core/hooks/useColorScheme';

const theme = {
  ...DefaultPaperTheme,
};

Notifications.setNotificationHandler({
  handleNotification: async () =>
    ({
      shouldShowAlert: true,
    } as Notifications.NotificationBehavior),
});

export default function RootContextProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    // Get a token
    registerForPushNotificationsAsync();

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      console.log('--- notification received ---');
      console.log(notification);
      console.log('------');
    });

    // This listener is fired whenever a user taps on or interacts with a notification
    // (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('--- notification tapped ---');
      console.log(response);
      console.log('------');
    });

    // Unsubscribe from events
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function registerForPushNotificationsAsync() {
    try {
      let token;

      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync({ projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID })).data;
      console.log('token');
      console.log(token);

      return token;
    } catch {
      console.log('Failed to initialize Push Notifications');
    }
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthContextProvider>
        <PaperProvider theme={theme}>{children}</PaperProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
