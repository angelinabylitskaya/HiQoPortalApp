import { Button, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { useAuthContext } from '@/core/contexts/AuthContext';
import { useRouter } from 'expo-router';

export default function Profile() {
  const { signOut } = useAuthContext();
  const router = useRouter();

  const logOut = () => {
    signOut();
    router.replace('auth/Login');
  };

  return (
    <View style={styles.container}>
      <Button onPress={logOut} title={'Log out'}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
