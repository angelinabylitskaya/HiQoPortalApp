import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="LoginForm" options={{ title: 'Log in', presentation: 'modal' }} />
    </Stack>
  );
}
