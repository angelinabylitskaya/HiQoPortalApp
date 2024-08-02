import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-ui-lib';

import { View } from '@/components/Themed';
import { useAuthContext } from '@/core/contexts/AuthContext';
import { EmailInput, PasswordInput } from '@/components/atoms/Input';

const logo = require('@/assets/logo.png');

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
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.image} source={logo} />
      </View>
      <View style={styles.formContainer}>
        <EmailInput
          value={value.email}
          label="Email"
          placeholder="Enter Email"
          onChange={setEmail}
          onClear={() => setEmail({ text: '' })}
        />
        <PasswordInput
          value={value.password}
          label="Password"
          placeholder="Enter Password"
          onChange={setPassword}
          onClear={() => setPassword({ text: '' })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={submit}>
            <Text buttonMedium textLight>Login</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 16,
    paddingBottom: 8,
    alignItems: 'center',
    gap: 64,
    backgroundColor: '#fff'
  },
  image: {
    width: 72,
    height: 53,
  },
  formContainer: {
    width: '100%',
    flex: 1,
    gap: 8,
  },
  buttonContainer: {
    width: '100%',
  },
  //
  input: {
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default LoginForm;
