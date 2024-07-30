import * as React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';

import { View } from '@/components/Themed';
import { useAuthContext } from '@/core/contexts/AuthContext';

function LoginForm() {
  const [value, setValue] = React.useState({ email: '', password: '' });
  const { signIn } = useAuthContext();
  const router = useRouter();
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ title: 'Log in', presentation: 'modal' });
  }, [navigation]);

  const submit = React.useCallback(async () => {
    try {
      await signIn({
        email: 'test@gmail.com',
        password: '12345678',
      });
      router.replace('(app)/news');
    } catch {}
  }, [router]);

  const setEmail = (e) => {
    setValue({
      ...value,
      email: e.text,
    });
  };

  const setPassword = (e) => {
    setValue({
      ...value,
      password: e.text,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder="Enter Email" onChange={setEmail} />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Enter Password" onChange={setPassword} />
      </View>
      <View>
        <Button title="Login" onPress={submit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default LoginForm;
