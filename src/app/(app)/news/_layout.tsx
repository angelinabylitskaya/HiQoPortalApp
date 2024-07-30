import { Stack } from 'expo-router';
import DrawerHeader from '@/components/DrawerHeader';

export default function NewsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <DrawerHeader title="News" />,
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          title: '',
        }}
      />
    </Stack>
  );
}
